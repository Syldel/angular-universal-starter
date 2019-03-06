import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.pug',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Titre de la page à propos');
    this.meta.updateTag({
      name: 'description',
      content: 'description de la page à propos'
    });
  }

}
