import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.pug',
  styleUrls: ['./not-found-page.component.sass']
})
export class NotFoundPageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Titre de la page 404 Not found');
    this.meta.updateTag({
      name: 'description',
      content: 'description de la page 404 Not found'
    });
  }

}
