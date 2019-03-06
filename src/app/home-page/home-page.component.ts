import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.pug',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Titre de la page d\'accueil');
    this.meta.updateTag({
      name: 'description',
      content: 'description de la page d\'accueil'
    });
  }

}
