import { Component, OnDestroy, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { FaNumberPipe } from '../../shared/fa-number.pipe';
import { BikeVisualComponent } from '../../shared/ui';

@Component({
  standalone: true,
  imports: [RouterLink, BikeVisualComponent, FaNumberPipe, LucideAngularModule],
  templateUrl: './reservation.page.html',
  styleUrl: './reservation.page.css'
})
export class ReservationPage implements OnDestroy {
  private readonly route = inject(ActivatedRoute);

  bikeId = 'BD-2048';
  remaining = signal(598);
  timer: number;

  constructor() {
    this.bikeId = this.route.snapshot.paramMap.get('bikeId') ?? this.bikeId;
    this.timer = window.setInterval(() => this.remaining.update((value) => Math.max(0, value - 1)), 1000);
  }

  minutes() {
    return Math.floor(this.remaining() / 60).toString().padStart(2, '0');
  }

  seconds() {
    return (this.remaining() % 60).toString().padStart(2, '0');
  }

  progress() {
    return (this.remaining() / 600) * 360;
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
