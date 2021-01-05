import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  myArray: any[] = [];
  myArrayId: string[] = [];

  constructor(private Firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.Firestore
      .collection('Utilisateur')
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.myArrayId.push(doc.id);
          this.myArray.push(doc.data());
          console.table(doc.data());
        });
      });
  }

}
