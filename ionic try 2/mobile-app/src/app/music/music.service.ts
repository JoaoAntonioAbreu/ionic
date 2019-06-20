import { Injectable } from "@angular/core";
import { Musicas } from "./musicas.module";
@Injectable({
  providedIn: "root"
})
export class MusicService {
  private music: Musicas[] = [
    {
      id: "1",
      title: "ayaya",
      imagemUrl: "https://i.ytimg.com/vi/DXf6ayKvd58/maxresdefault.jpg",
      videoUrl: `https://www.youtube.com/embed/NACV9MF1OvI`,
      comments: ["Description"]
    },
    {
      id: "2",
      title: "Gnomed",
      imagemUrl:
        "https://slm-assets1.secondlife.com/assets/22040563/view_large/Gnomed.jpg?1541258301",
      videoUrl:
        `https://www.youtube.com/embed/T0sDmIaepYo`,
      comments: ["Description"]
    },
    {
      id: "3",
      title: "Bungou Stray Dogs - Good For Nothing",
      imagemUrl:
        "https://www.japamo.net/I/S3274/0899201.jpg",
      videoUrl:
        `https://www.youtube.com/embed/8lPdkRzLgvQ`,
      comments: ["Description"]
    },
    {
      id: "4",
      title: "Coolio - Gangsta's Paradise",
      imagemUrl:
        "https://gtm-net-au-2017-prod.s3.amazonaws.com/uploads/2019/01/Coolio.png",
      videoUrl:
        `https://www.youtube.com/embed/fPO76Jlnz6c`,
      comments: ["Description"]
    },
    {
      id: "5",
      title: "Adam Lambert - Running",
      imagemUrl:
        "https://images.genius.com/72510a74efd1166c62b4aad508036325.600x600x1.jpg",
      videoUrl:
        `https://www.youtube.com/embed/KoJW3ob0Xt8`,
      comments: ["Description"]
    },
    {
      id: "6",
      title: "Ashes Remain - End Of Me",
      imagemUrl:
        "https://i.ytimg.com/vi/7xO-jXdU2ok/hqdefault.jpg",
      videoUrl:
        `https://www.youtube.com/embed/2r-JBk5b56U`,
      comments: ["Description"]
    },
    {
      id: "7",
      title: "Nightcore - Different Songs (Set It Off)",
      imagemUrl:
        "https://target.scene7.com/is/image/Target/GUEST_9d03d208-acb7-4bcc-8692-ecdd6cab598a?wid=488&hei=488&fmt=pjpeg",
      videoUrl:
        `https://www.youtube.com/embed/kxEShn-M_KY`,
      comments: ["Description"]
    },
    {
      id: "8",
      title: "Rise Against - Satellite",
      imagemUrl:
        "https://www.graspop.be/images/bands/detail/rise-against-1.jpg",
      videoUrl:
        `https://www.youtube.com/embed/6nQCxwneUwA`,
      comments: ["Description"]
    }
  ];
  constructor() {}

  getAllMusicas() {
    return [...this.music];
  }

  getMusic(musicasId: string) {
    return {
      ...this.music.find(musicas => {
        return musicas.id === musicasId;
      })
    };
  }

  deleteMusicas(musicasId: string) {
    this.music = this.music.filter(musicas => {
      return musicas.id !== musicasId;
    });
  }
}
