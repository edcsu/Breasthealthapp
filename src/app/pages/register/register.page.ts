import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { Person, StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  persons: Person[] = [];

  newPerson: Person = <Person>{};

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private storageService: StorageService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this.formBuilder.group({
      'fullName': [null, Validators.compose([
        Validators.required
      ])],
      'email': [null, Validators.compose([
        Validators.required
      ])],
      'password': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  addPerson() {
    this.newPerson.id = 1;
    this.newPerson.fullName = 'John Doe';
    this.newPerson.userName = 'johndoe';
    this.newPerson.email = 'johndoe@gmail.com';
    this.newPerson.phone = '+26577212345678';
    this.newPerson.district = 'Gulu';
    this.newPerson.dob = null;
    // this.newPerson.dob = new Date(1985, 12, 25);
    this.newPerson.gender = null;
  }

  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    this.addPerson();
    loader.present();
    this.storageService.addPerson(this.newPerson).then( person => {
      this.newPerson = <Person>{};
      loader.onWillDismiss().then(() => {
        this.navCtrl.navigateRoot('/home-results');
      });
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
}
