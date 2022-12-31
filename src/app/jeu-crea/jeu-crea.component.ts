import { Component, OnInit } from '@angular/core';
import { Jeux } from '../models/jeux.model';
import { JeuxVideoService } from '../services/jeux-video/jeux-video.service';

@Component({
  selector: 'app-jeu-crea',
  templateUrl: './jeu-crea.component.html',
  styleUrls: ['./jeu-crea.component.scss']
})
export class JeuCreaComponent implements OnInit {
  public jeu!: Jeux;

  constructor(
    private Jeu: JeuxVideoService
  ) { }

  ngOnInit(): void {
    this.jeu = new Jeux();
  }

  add(){
    this.Jeu.saveNewGame(this.jeu).subscribe(() => {
      this.jeu  = new Jeux();
    })
  }
}
