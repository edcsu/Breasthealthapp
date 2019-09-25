import { Component, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import {
  // NavController,
  Platform,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  LoadingController,
  ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { SetProfilePage } from '../../pages/modal/set-profile/set-profile.page';
import { ImagePage } from './../modal/image/image.page';
// Call notifications test by Popover and Custom Component.
import { NotificationsComponent } from './../../components/notifications/notifications.component';

// Get Persons info
import { Person, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  searchKey = '';
  myProfile = false;
  yourLocation = '123 Test Street';
  themeCover = 'assets/img/ionic4-Start-Theme-cover.jpg';
  backButtonSubscription;
  yoProfile: Person;
  age = null;
  birthYear = null;
  currentDate = null;
  currentYear = null;
  // for storing the returned subscription

  constructor(
    // public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private router: Router,
    private platform: Platform,
    private storageService: StorageService
  ) {

  }

  ngOnInit() {
    this.loadProfile();
  }

  ngOnChanges() {
    this.loadProfile();
  }

  ngAfterViewInit() {
    this.SetProfile();
    this.loadProfile();
    this.backButtonSubscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ngOnDestroy() {
    this.backButtonSubscription.unsubscribe();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  loadProfile() {
    this.storageService.getPerson().then( person => {
    this.yoProfile = person[0];
    this.getAge();
    });
  }

  getAge() {
    // get birth year
    this.birthYear = this.yoProfile.dob.toString().substr(0, 4);
    this.currentDate = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.age = this.currentYear - this.birthYear;
    console.log('Age: ' + this.age);
  }

  playSound() {

  }

  settings() {
  //  this.navCtrl.navigateForward('settings');
    this.router.navigate(['settings']);
  }

  async alertLocation() {
    const changeLocation = await this.alertCtrl.create({
      header: 'Change Location',
      message: 'Type your Address.',
      inputs: [
        {
          name: 'location',
          placeholder: 'Enter your new Location',
          type: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: async (data) => {
            console.log('Change clicked', data);
            this.yourLocation = data.location;
            const toast = await this.toastCtrl.create({
              message: 'Location was change successfully',
              duration: 3000,
              position: 'top',
              closeButtonText: 'OK',
              showCloseButton: true
            });

            toast.present();
          }
        }
      ]
    });
    changeLocation.present();
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async SetProfile () {
    if ( this.yoProfile.dob === null || this.yoProfile.gender === null) {
      const popover = await this.popoverCtrl.create({
        component: SetProfilePage,
        componentProps: {
          Profile : this.yoProfile
        },
        animated: true,
        showBackdrop: true
      });

      popover.onDidDismiss().then((data) => {
        console.log(data);
      });

      return await popover.present();
    }
  }

  async presentImage(image: any) {
    const modal = await this.modalCtrl.create({
      component: ImagePage,
      componentProps: { value: image }
    });
    return await modal.present();
  }

  async notifications(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: NotificationsComponent,
      event: ev,
      animated: true,
      showBackdrop: true
    });
    return await popover.present();
  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
        showCloseButton: true,
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
     // this.navCtrl.navigateForward('/home-results');
      this.router.navigate(['home-results']);
    });
  }

  goToSelfCareLink() {
    // this.navCtrl.navigateForward('/self-care-link');
    this.router.navigate(['self-care-link']);
  }

  goToTips() {
    // this.navCtrl.navigateForward('/tips');
    this.router.navigate(['tips']);
  }

  goToBreastHealthInfo() {
    // this.navCtrl.navigateForward('/breast-health-info');
    this.router.navigate(['breast-health-info']);
  }

  goToSupportGroup() {
    // this.navCtrl.navigateForward('/support-group');
    this.router.navigate(['support-group']);
  }

  goToSpecialist() {
    // this.navCtrl.navigateForward('/specialist');
    this.router.navigate(['specialist']);
  }

  goTosignsAndSymptoms() {
    // this.navCtrl.navigateForward('/signs-symptoms');
    this.router.navigate(['signs-symptoms']);
  }

  goToRiskAssessment() {
    // this.navCtrl.navigateForward('/risk-assessment');
    this.router.navigate(['risk-assessment']);
  }

  goToUploadMedicalRecords() {
    // this.navCtrl.navigateForward('/upload-medical-records');
    this.router.navigate(['upload-medical-records']);
  }

}
