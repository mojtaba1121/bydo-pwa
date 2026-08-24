import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { TranslatePipe } from '../../core/i18n.service';
import { STATIONS } from '../../core/models';
import { FaNumberPipe } from '../../shared/fa-number.pipe';
import { BottomNavComponent, BrandComponent, ScanButtonComponent } from '../../shared/ui';

@Component({
  standalone: true,
  imports: [RouterLink, BrandComponent, BottomNavComponent, ScanButtonComponent, FaNumberPipe, LucideAngularModule, TranslatePipe],
  templateUrl: './map.page.html',
  styleUrl: './map.page.css'
})
export class MapPage {
  stations = STATIONS;
  selected = STATIONS[0];
}
