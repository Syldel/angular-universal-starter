import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.pug',
  styleUrls: ['./countries-page.component.sass']
})
export class CountriesPageComponent implements OnInit {

  public response: any;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.title.setTitle('Titre de la page Countries');
    this.meta.updateTag({
      name: 'description',
      content: 'description de la page Countries'
    });

    this.router.data.subscribe(data => {
      if (data.response) {
        this.response = data.response;
        if (this.response.name) {
          this.title.setTitle('Titre de la page Country ' + this.response.name);
          this.meta.updateTag({
            name: 'description',
            content: 'description de la page Country ' + this.response.name
          });
        }
      } else {
        this.response = null;
      }
    });
  }

}
