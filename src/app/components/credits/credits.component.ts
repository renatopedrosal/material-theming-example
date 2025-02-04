import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-credits',
  imports: [MatButtonModule],
  template: `
    <br />
    <a mat-raised-button href="#video">Video explainer</a>
    <br />
    <br />
    <a
      mat-flat-button
      class="lemonsqueezy-button"
      href="https://zoaibkhan.lemonsqueezy.com/buy/b6f485c0-d14d-4ea1-a7e9-9801000557bb?embed=1"
      >Buy now</a
    >
  `,
  styles: `
  
  :host {
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    color: var(--primary-dark);
  }

  a {
    color: var(--primary-dark);
  }

  `,
})
export class CreditsComponent {}
