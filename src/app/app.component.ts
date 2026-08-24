import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService, ThemeService } from './core/preferences.service';

@Component({
  selector: 'bydo-root',
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly language = inject(LanguageService);
  private readonly theme = inject(ThemeService);
}
