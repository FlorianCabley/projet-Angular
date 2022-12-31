import { Component, OnInit } from '@angular/core';
import { JeuxVideoService } from './services/jeux-video/jeux-video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CABLEY-Florian-projet';
  jeux: any = [];

  constructor(
    private Jeu: JeuxVideoService
  ){}

  ngOnInit(){
    //this.jeux = this.Jeu.jeux;
  }

}
