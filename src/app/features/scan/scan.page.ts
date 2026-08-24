import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './scan.page.html',
  styleUrl: './scan.page.css'
})
export class ScanPage {
  private readonly router = inject(Router);

  unlock() {
    void this.router.navigateByUrl('/ride');
  }
}
