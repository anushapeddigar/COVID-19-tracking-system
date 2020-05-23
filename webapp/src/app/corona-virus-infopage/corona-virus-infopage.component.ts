import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-corona-virus-infopage',
  templateUrl: './corona-virus-infopage.component.html',
  styleUrls: ['./corona-virus-infopage.component.scss']
})
export class CovidInformationComponent implements OnInit {

  name = 'Angular 6';
  safeSrc: SafeResourceUrl;

  ngOnInit() {
  }

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/WfJSVbQtHsk');


    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const acc = document.getElementsByClassName('accordion');

        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < acc.length; i++) {
          acc[i].addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + 'px';
            }

            // tslint:disable-next-line:prefer-for-of
            for (let j = 0; j < acc.length; j++) {
              if (this !== acc[j]) {
                if (acc[j].classList.contains('active')) {
                  acc[j].classList.toggle('active');
                }
                const p = acc[j].nextElementSibling as HTMLScriptElement;
                p.style.maxHeight = null;
              }
            }
          });
        }
      }
    });


  }
}



