import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, Platform } from '@ionic/angular';
import { Person, StorageService } from 'src/app/services/storage.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  images = [];
  editPerson: Person = <Person>{};
  yoProfile: Person;
  yourDob = null;
  yourGender = null;
  yourDistrict = null;
  profile_pic = null;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storageService: StorageService,
    private camera: Camera,
    private actionSheetController: ActionSheetController,
    private plt: Platform,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    private file: File,
    private webview: WebView,
    ) { }

  ngOnInit() {
    this.loadProfile();
    this.plt.ready().then(() => {
    this.loadPhoto();
    });
  }

  loadProfile() {
    // load profile details
    this.storageService.getPerson().then( person => {
      this.yoProfile = person[0];
    });
  }

  loadPhoto() {
      // load photos
      this.storageService.loadStoredImage().then(image => {
        /* if (image) {
          let convertedImg = JSON.parse(image);
          this.profile_pic = convertedImg;
        } */
          this.profile_pic = 'assets/img/avatar.jpg';
      });
    }

  /* loadPhotos() {
    // load photos
    this.storageService.loadStoredImage().then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
  } */

  // update details
  updatePerson(person: Person) {
    this.storageService.updatePerson(person).then(() => {
      console.log('updated');
    });
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    this.updatePerson(this.yoProfile);
    loader.onWillDismiss().then(async l => {
      this.presentToast('Your Data was Edited!');
      this.navCtrl.navigateForward('/home-results');
    });
  }

  /*
  // get image path
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: 'Select Image source',
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
      let options: CameraOptions = {
          quality: 100,
          sourceType: sourceType,
          saveToPhotoAlbum: false,
          correctOrientation: true
      };

      this.camera.getPicture(options).then(imagePath => {
          if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
              this.filePath.resolveNativePath(imagePath)
                  .then(filePath => {
                      let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                      let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                  });
          } else {
              let currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
              let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
              this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          }
      });

  }

  createFileName() {
    let d = new Date(),
    n = d.getTime(),
    newFileName = n + '.jpg';
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
      this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
          this.updateStoredImages(newFileName);
      }, error => {
        this.presentToast('Error while storing file.');
      });
  }

  updateStoredImages(name) {
    this.storageService.loadStoredImage().then(images => {
          let arr = JSON.parse(images);
          if (!arr) {
              let newImages = [name];
              this.storageService.updateStoredImage(newImages);
          } else {
              arr.push(name);
              this.storageService.updateStoredImage(arr);
          }

          let filePath = this.file.dataDirectory + name;
          let resPath = this.pathForImage(filePath);

          let newEntry = {
              name: name,
              path: resPath,
              filePath: filePath
          };

          this.images = [newEntry, ...this.images];
          this.ref.detectChanges(); // trigger change detection cycle
      });
  } */

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      showCloseButton: true,
      // cssClass: 'bg-profile',
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
        header: 'Select Image source',
        buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
            {
                text: 'Use Camera',
                handler: () => {
                    this.takePicture(this.camera.PictureSourceType.CAMERA);
                }
            },
            {
                text: 'Cancel',
                role: 'cancel'
            }
        ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    let base64ImageData;
    let options: CameraOptions = {
        // here is the picture quality in range 0-100 default value 50. Optional field
        quality: 100,
        /**here is the format of an output file.
         *destination type default is FILE_URI.
          * DATA_URL: 0 (number) - base64-encoded string,
          * FILE_URI: 1 (number)- Return image file URI,
          * NATIVE_URI: 2 (number)- Return image native URI
        */
        destinationType: this.camera.DestinationType.NATIVE_URI,
        /**here is the returned image file format
         *default format is JPEG
          * JPEG:0 (number),
          * PNG:1 (number),
        */
        encodingType: this.camera.EncodingType.JPEG,
        /**here set the source of the picture
         *Default is CAMERA.
          *PHOTOLIBRARY : 0,
          *CAMERA : 1,
          *SAVEDPHOTOALBUM : 2
        */
        sourceType: sourceType,
        saveToPhotoAlbum: true,
        correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // alert(imageData)
      this.profile_pic = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.storageService.updateStoredImage(this.profile_pic);
      //  here converting a normal image data to base64 image data.
      base64ImageData = 'data:image/jpeg;base64,' + imageData;
      /**here passing three arguments to method
      *Base64 Data
      *Folder Name
      *File Name
      */
      this.writeFile(base64ImageData, 'My Picture', 'profile_photo.jpeg');
     }, (err) => {
      // Handle error
      this.presentToast('Error ' + JSON.stringify(err));
     });
  }

  //  here is the method is used to write a file in storage
  public writeFile(base64Data: any, folderName: string, fileName: any) {
    let contentType = this.getContentType(base64Data);
    let DataBlob = this.base64toBlob( base64Data, contentType);
    // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage.
    //  You can change a file path whatever pre-defined method
    let filePath = this.file.externalRootDirectory + folderName;
    this.file.writeFile(filePath, fileName, DataBlob, contentType).then((success) => {
      this.presentToast(`Photo saved Successfully ${success}` );
    }).catch((err) => {
      this.presentToast(`Error Occured While saving photo ${err}`);
    });
}

//  here is the method is used to get content type of an bas64 data
public getContentType(base64Data: any) {
    let block = base64Data.split(';');
    let contentType = block[0].split(':')[1];
    return contentType;
}
//  here is the method is used to convert base64 data to blob data
public base64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    let sliceSize = 512;
    let byteCharacters = atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        let slice = byteCharacters.slice(offset, offset + sliceSize);
        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, {
        type: contentType
    });
    return blob;
}

}
