import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslatePipe } from '../../core/i18n.service';
import { FaNumberPipe } from '../../shared/fa-number.pipe';
import { BikeVisualComponent } from '../../shared/ui';

@Component({
  standalone: true,
  imports: [RouterLink, BikeVisualComponent, LucideAngularModule, TranslatePipe, FaNumberPipe],
  templateUrl: './damage.page.html',
  styleUrl: './damage.page.css'
})
export class DamagePage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  bikeId = 'BD-2048';
  selected = signal('');

  constructor() {
    this.bikeId = this.route.snapshot.paramMap.get('bikeId') ?? this.bikeId;
  }

  submit() {
    void this.router.navigateByUrl('/station/1');
  }
}
