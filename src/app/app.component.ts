import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService, ThemeService } from './core/preferences.service';

@Component({
  selector: 'bydo-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private readonly language = inject(LanguageService);
  private readonly theme = inject(ThemeService);
}
