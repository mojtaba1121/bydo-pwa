import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideIconComponent } from '../../shared/lucide-icon.component';
import { TranslatePipe } from '../../core/i18n.service';
import { BIKES, STATIONS } from '../../core/models';
import { FaNumberPipe } from '../../shared/fa-number.pipe';

@Component({
  standalone: true,
  imports: [RouterLink, FaNumberPipe, LucideIconComponent, TranslatePipe],
  templateUrl: './station.page.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './station.page.css'
})
export class StationPage {
  private readonly route = inject(ActivatedRoute);

  station = STATIONS[0];
  bikes = BIKES;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.station = STATIONS.find((station) => station.id === id) ?? STATIONS[0];
  }

  isBikeReady(status: string) {
    return status === 'آماده';
  }

  isElectricBike(type: string) {
    return type === 'برقی';
  }
}
