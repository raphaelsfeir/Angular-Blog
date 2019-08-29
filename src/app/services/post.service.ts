import { Injectable } from '@angular/core';

export interface Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {

  publications: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in eleifend massa, quis imperdiet urna.',
      loveIts: 0,
      created_at: new Date()
    }, {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in eleifend massa, quis imperdiet urna.',
      loveIts: 0,
      created_at: new Date()
    }, {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in eleifend massa, quis imperdiet urna.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() { }

  rate(type: '+' | '-', id: number) {
    // L'utilisateur aime une publication ou non
    switch (type) {
      case '+':
        this.publications[id].loveIts++;
        break;
      case '-':
        this.publications[id].loveIts--;
        break;
    }
  }

  getStatus(publication: Post) {
    // Retourne la classe Bootstrap correspondant au statut de la publication
    if (publication.loveIts === 0) {
      return '';
    } else {
      return (publication.loveIts > 0) ? 'list-group-item-success' : 'list-group-item-danger';
    }
  }
}
