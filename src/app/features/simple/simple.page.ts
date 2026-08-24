import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LucideIconComponent } from '../../shared/lucide-icon.component';
import { TranslatePipe } from '../../core/i18n.service';
import { FaNumberPipe } from '../../shared/fa-number.pipe';
import { BottomNavComponent, BrandComponent } from '../../shared/ui';

@Component({
  standalone: true,
  imports: [BottomNavComponent, BrandComponent, LucideIconComponent, TranslatePipe, FaNumberPipe],
  templateUrl: './simple.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './simple.page.css'
})
export class SimplePage {
  private readonly route = inject(ActivatedRoute);

  type = 'trips';

  constructor() {
    this.type = this.route.snapshot.data['type'] ?? 'trips';
  }
}
