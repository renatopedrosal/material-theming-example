import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ThemeSelectorService } from '../../services/theme-selector.service';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <section class="hero">
      <div class="container">
        <h1>Easy Angular Material Theme Builder</h1>
        <p class="description">
          Theme Angular Material components dynamically using just 6 CSS
          variables! No complex SASS setup required - change themes at runtime
          and support both light & dark modes.
        </p>
        <div class="actions">
          <a mat-flat-button (click)="themeSelectorService.open()"
            >Try Live Demo</a
          >
          <a mat-stroked-button href="#video">Watch Tutorial</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      background: linear-gradient(to bottom, var(--background), var(--primary-light));
      padding-top: 64px;
      
      h1 {
        font-size: 3rem;
        color: var(--primary);
        margin-bottom: 24px;
      }

      .description {
        font-size: 1.2rem;
        color: var(--primary-dark);
        margin-bottom: 32px;
        line-height: 1.6;
        max-width: 800px;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      align-items: center;

      a {
        min-width: 120px;
      }
    }

    @media (max-width: 600px) {
      .hero h1 {
        font-size: 2rem;
      }

      .actions {
        flex-direction: column;
        width: 100%;
        
        a {
          width: 100%;
          justify-content: center;
        }
      }
    }

    section {
      padding: 64px 0;
    }

    @media (max-width: 600px) {
      section {
        padding: 48px 0;
      }
    }
  `,
})
export class HeroSectionComponent {
  themeSelectorService = inject(ThemeSelectorService);
}
