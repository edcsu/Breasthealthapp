import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, Platform } from '@ionic/angular';
import { Person, StorageService } from 'src/app/services/storage.service';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

@Component({
  selector: 'app-upload-medical-records',
  templateUrl: './upload-medical-records.page.html',
  styleUrls: ['./upload-medical-records.page.scss'],
})
export class UploadMedicalRecordsPage implements OnInit {
  document_selected = null;

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
    this.plt.ready().then(() => {
    // this.loadPhoto();
    });
  }

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
      this.document_selected = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.storageService.updateStoredImage(this.document_selected);
      //  here converting a normal image data to base64 image data.
      base64ImageData = 'data:image/jpeg;base64,' + imageData;
      /**here passing three arguments to method
      *Base64 Data
      *Folder Name
      *File Name
      */
      // this.writeFile(base64ImageData, 'My Picture', 'profile_photo.jpeg');
     }, (err) => {
      // Handle error
      this.presentToast('Error ' + JSON.stringify(err));
     });
  }

  resetDocument() {
    this.document_selected = null;
  }

}
