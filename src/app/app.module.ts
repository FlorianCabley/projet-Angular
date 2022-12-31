import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JeuxVideoComponent } from './jeux-video/jeux-video.component';
import { FormsModule } from '@angular/forms';
import { JeuxVideoService } from './services/jeux-video/jeux-video.service';
import { HomeComponent } from './home/home.component';
import { JeuListComponent } from './jeu-list/jeu-list.component';
import { JeuModifComponent } from './jeu-modif/jeu-modif.component';
import { JeuCreaComponent } from './jeu-crea/jeu-crea.component';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';

const appRoutes: Routes = [
  {
    path: 'jeux',
    component: JeuListComponent
  },
  {
    path: 'crea',
    component: JeuCreaComponent
  },
  {
    path: 'modif/:id',
    component: JeuModifComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    JeuxVideoComponent,
    HomeComponent,
    JeuListComponent,
    JeuModifComponent,
    JeuCreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    JeuxVideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
