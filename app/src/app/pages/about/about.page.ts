import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  instagram() {
    window.open('https://www.instagram.com/pettec_unifei/', '_system');
  }
  linkedin() {
    window.open('https://www.linkedin.com/company/pettec-unifie', '_system');
  }
  unifei() {
    window.open('https://unifei.edu.br/', '_system');
  }
  site() {
    window.open('https://pettec.unifei.edu.br/', '_system');
  }
  github() {
    window.open('https://github.com/PET-TEC', '_system');
  }

}
