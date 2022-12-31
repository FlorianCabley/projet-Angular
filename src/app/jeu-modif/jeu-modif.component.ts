import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { JeuxVideoService } from '../services/jeux-video/jeux-video.service';

@Component({
  selector: 'app-jeu-modif',
  templateUrl: './jeu-modif.component.html',
  styleUrls: ['./jeu-modif.component.scss']
})
export class JeuModifComponent implements OnInit {
  jeu: any;
  change?: boolean;

  constructor(
    private Jeu: JeuxVideoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.Jeu.get(id).subscribe((value: any) => {
      console.log(value)
      this.jeu = value;
    });
  }

 modif(){
  this.Jeu.update(this.jeu).subscribe(() => {
    this.change = true;
    setTimeout(() => {
      this.change = false;
    }, 3000);
  });
 } 
}
