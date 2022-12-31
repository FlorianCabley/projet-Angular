import { Component, OnInit, Input } from '@angular/core';
import { JeuxVideoService } from '../services/jeux-video/jeux-video.service';

@Component({
  selector: 'app-jeux-video',
  templateUrl: './jeux-video.component.html',
  styleUrls: ['./jeux-video.component.scss']
})
export class JeuxVideoComponent implements OnInit {

  @Input() jeuName?: string;
  @Input() jeuAvailable?: boolean;
  @Input() jeuAffiche?: string;
  @Input() jeuCountry?: string;
  @Input() jeuDeveloper?: string;
  @Input() jeuEditor?: string;
  @Input() jeuReleaseDate?: string;
  @Input() jeuSynopsis?: string;
  @Input() index: number= 0;
  @Input() id?: string;

  constructor(
    private Jeu: JeuxVideoService
  ) { }

  ngOnInit(){
  }

  getAvailable(){
    return this.jeuAvailable;
  }

  onGameLaunch(){
    console.log('Jeu démarré');
  }

  changeColor(){
    //si this.jeuAvailable retourne blue sinon retourne red
    return this.jeuAvailable ? 'blue' : 'red';
  }

  onSwitch(){
    this.Jeu.switchAvailable(this.index);
  }

  suppr(){
    this.Jeu.delete(this.id);
  }
}
