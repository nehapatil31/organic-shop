import { Injectable } from '@angular/core';
// for AngularFireDatabase
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}

  save(user: firebase.User){
    // this.db.database.ref('user/'+user.uid).update({
    //   name: user.displayName,
    //   email: user.email
    // });
    firebase.database().ref('user/' + user.uid).set({
      name: user.displayName,
      email: user.email
    });
  }
}
