import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslatePipe } from '../../core/i18n.service';

@Component({
  standalone: true,
  imports: [RouterLink, LucideAngularModule, TranslatePipe],
  templateUrl: './scan.page.html',
  styleUrl: './scan.page.css'
})
export class ScanPage {
  private readonly router = inject(Router);

  unlock() {
    void this.router.navigateByUrl('/ride');
  }
}
