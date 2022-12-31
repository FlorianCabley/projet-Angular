import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Jeux } from 'src/app/models/jeux.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JeuxVideoService {
  private dbPath = '/jeux';
  jeuxRef: AngularFirestoreCollection<Jeux>;
  private jeux?: any;
  constructor(
    private db: AngularFirestore
  ) { 
    this.jeuxRef = db.collection(this.dbPath);
  }

  setAvailable(){
    for(const jeu of this.jeux){
      jeu.available = true;
    }
  }

  setNoAvailable(){
    for(const jeu of this.jeux){
      jeu.available = false;
      console.log(jeu)
    }
  }

  switchAvailable(index: number){
    this.jeux[index].available = !this.jeux[index].available;
  }

  getJeuById(id: number){
    let tmp;
    for(const jeu of this.jeux){
      if(jeu.id == id){
        tmp = jeu;
      }
    }
    return tmp;
  }

  getAllGames(): any{
    return this.jeuxRef.snapshotChanges().pipe(
      map((changes:any) => {
        return changes.map((doc:any) => {
          return ({id: doc.payload.doc.id, ...doc.payload.doc.data()})
        }) 
      })
    );
  }

  saveNewGame(jeu: Jeux): any{
    return new Observable(obs => {
      this.jeuxRef.add({...jeu}).then(() => {
        obs.next();
      })
    })
  }

  get(id: any): any {
    return new Observable(obs => {
      this.jeuxRef.doc(id).get().subscribe(res => {
        obs.next({id: res.id, ...res.data()});
      });
    });
  }

  update(jeu: Jeux){
    return new Observable(obs => {
      this.jeuxRef.doc(jeu.id).update(jeu);
      obs.next();
    });
  }

  delete(id:any){
      this.db.doc(`jeux/${id}`).delete();
  }
}
