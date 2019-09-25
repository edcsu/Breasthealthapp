import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Person {
  id: number;
  fullName:  string;
  userName:  string;
  email:  string;
  phone:  string;
  district:  string;
  dob:  Date;
  gender:  string;
}

const PERSONS_KEY = 'my-profile';
const PHOTO_KEY = 'profile-photo';
@Injectable({
  providedIn: 'root'
})

export class StorageService {

  constructor(
              private storage: Storage,
  ) { }

  // create person
  addPerson(person: Person): Promise<any> {
    return this.storage.get(PERSONS_KEY).then((persons: Person[]) => {
      if (persons) {
        persons.push(person);
        return this.storage.set(PERSONS_KEY, persons);
      } else {
        return this.storage.set(PERSONS_KEY, [person]);
      }
    });
  }

  // get person
  getPerson(): Promise<Person[]> {
    return this.storage.get(PERSONS_KEY);
  }

  // edit person
  updatePerson(person: Person): Promise<any> {
    return this.storage.get(PERSONS_KEY).then((persons: Person[]) => {
      if (!persons || persons.length === 0) {
        return null;
      }

      let newPersons: Person[] = [];

      for (const p of persons) {
        if (p.id === person.id) {
          newPersons.push(person);
        } else {
          newPersons.push(p);
        }
      }

        return this.storage.set(PERSONS_KEY, newPersons);
    });
  }

  // delete person
  deletePerson(id: number) {
    return this.storage.get(PERSONS_KEY).then((persons: Person[]) => {
      if (!persons || persons.length === 0) {
        return null;
      }

      let toKeep: Person[] = [];

      for (const i of persons) {
        if (i.id === id) {
          toKeep.push(i);
        }
      }

        return this.storage.set(PERSONS_KEY, toKeep);
    });
  }

  // load images
  loadStoredImage() {
    return this.storage.get(PHOTO_KEY);
  }

  // set images
  updateStoredImage(images) {
    this.storage.set(PHOTO_KEY, JSON.stringify(images));
  }

}
