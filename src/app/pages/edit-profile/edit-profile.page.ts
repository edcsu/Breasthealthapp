import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Person, StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  editPerson: Person = <Person>{};
  yoProfile: Person;
  yourDob = null;
  yourGender = null;
  yourDistrict = null;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storageService: StorageService
    ) { }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.storageService.getPerson().then( person => {
      this.yoProfile = person[0];
    });
  }

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
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  }

}
