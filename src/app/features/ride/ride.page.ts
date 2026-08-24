import { Component, OnDestroy, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { LucideIconComponent } from '../../shared/lucide-icon.component';
import { TranslatePipe } from '../../core/i18n.service';
import { FaNumberPipe } from '../../shared/fa-number.pipe';

@Component({
  standalone: true,
  imports: [LucideIconComponent, FaNumberPipe, TranslatePipe],
  templateUrl: './ride.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './ride.page.css'
})
export class RidePage implements OnDestroy {
  private readonly router = inject(Router);

  elapsed = signal(0);
  timer = window.setInterval(() => this.elapsed.update((value) => value + 1), 1000);

  time() {
    const minutes = Math.floor(this.elapsed() / 60).toString().padStart(2, '0');
    const seconds = (this.elapsed() % 60).toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  finish() {
    void this.router.navigateByUrl('/trips');
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }
}
