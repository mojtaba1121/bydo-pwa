import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { BrandComponent } from '../../shared/ui';

@Component({
  standalone: true,
  imports: [FormsModule, BrandComponent, LucideAngularModule],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {
  private readonly router = inject(Router);

  mobile = '';

  continue() {
    void this.router.navigateByUrl('/map');
  }
}
