import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { cfaSignIn } from 'capacitor-firebase-auth';
import firebase from 'firebase';
import { User } from '../utils/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private afs: AngularFirestore
  ) { }

  signInWithFB() {
    cfaSignIn('facebook.com').subscribe(
      (user) => {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(
          `users/${user.uid}`
        );
        const data: User = {
          uid: user.uid,
          dname: user.displayName,
          email: user.email,
          photourl: user.photoURL,
          mode: 'facebook',
          phoneNum: user.phoneNumber
        };
        return userRef
        .set(data, { merge: true })
        .then(
          () => this.router.navigate(['/info'])
        );
      }
    );
  }
  getUID() {
    return firebase.auth().currentUser.uid;
  }

  async signOut() {
    await firebase.auth().signOut();
    this.router.navigate(['/home']);
  }
}
