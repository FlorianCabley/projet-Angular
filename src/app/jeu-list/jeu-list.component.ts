import { Component, OnInit } from '@angular/core';
import { JeuxVideoService } from '../services/jeux-video/jeux-video.service';

@Component({
  selector: 'app-jeu-list',
  templateUrl: './jeu-list.component.html',
  styleUrls: ['./jeu-list.component.scss']
})
export class JeuListComponent implements OnInit {
  jeux!:any;

  
  constructor(
    private Jeu: JeuxVideoService
  ) { }

  ngOnInit(): void {
    this.Jeu.getAllGames().subscribe((data: any) => {
      this.jeux = data;
    });
  }
}
