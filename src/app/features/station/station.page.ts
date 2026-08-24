import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { BIKES, STATIONS } from '../../core/models';
import { FaNumberPipe } from '../../shared/fa-number.pipe';

@Component({
  standalone: true,
  imports: [RouterLink, FaNumberPipe, LucideAngularModule],
  templateUrl: './station.page.html',
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
}
