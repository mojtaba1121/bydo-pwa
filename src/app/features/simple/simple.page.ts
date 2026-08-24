import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslatePipe } from '../../core/i18n.service';
import { FaNumberPipe } from '../../shared/fa-number.pipe';
import { BottomNavComponent, BrandComponent } from '../../shared/ui';

@Component({
  standalone: true,
  imports: [BottomNavComponent, BrandComponent, LucideAngularModule, TranslatePipe, FaNumberPipe],
  templateUrl: './simple.page.html',
  styleUrl: './simple.page.css'
})
export class SimplePage {
  private readonly route = inject(ActivatedRoute);

  type = 'trips';

  constructor() {
    this.type = this.route.snapshot.data['type'] ?? 'trips';
  }
}
