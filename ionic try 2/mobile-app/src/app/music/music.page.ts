import { Component, OnInit } from '@angular/core';
import { MusicService} from './music.service';
import { Musicas } from './musicas.module';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss']
})
export class MusicPage implements OnInit {
  music: Musicas[];
  
  constructor(private musicService: MusicService) {}

  ngOnInit() {
   this.music = this.musicService.getAllMusicas();
  }
}
