import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideIconComponent } from '../../shared/lucide-icon.component';
import { TranslatePipe } from '../../core/i18n.service';

@Component({
  standalone: true,
  imports: [RouterLink, LucideIconComponent, TranslatePipe],
  templateUrl: './scan.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './scan.page.css'
})
export class ScanPage {
  private readonly router = inject(Router);

  unlock() {
    void this.router.navigateByUrl('/ride');
  }
}
