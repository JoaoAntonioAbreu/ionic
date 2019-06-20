import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Musicas } from '../musicas.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-musicas-video',
  templateUrl: './musicas-video.page.html',
  styleUrls: ['./musicas-video.page.scss']
})
export class MusicasVideoPage implements OnInit {
  mostrarMusicas: Musicas;

  constructor(
    private activatedRoute: ActivatedRoute,
    private musicService: MusicService,
    private router: Router,
    private alertCtrl: AlertController,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('musicasId')) {
        this.router.navigate(['/music']);
        return;
      }
      const musicasId = paramMap.get('musicasId');
      this.mostrarMusicas = this.musicService.getMusic(musicasId);
    });
  }

  onDeleteMusicas() {
    this.alertCtrl
      .create({
        header: 'Tens a certeza?',
        message: 'Queres mesmo apagar esta musica?',
        buttons: [
          {
            text: 'Cancel',
            role: 'Cancel'
          },
          {
            text: 'Delete',
            handler: () => {
              this.musicService.deleteMusicas(this.mostrarMusicas.id);
              this.router.navigate(['/music']);
            }
          }
        ]
      })
      .then(alertEl => {
        alertEl.present();
      });
  }

  EmbedUrl(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mostrarMusicas.videoUrl)
  }
}
