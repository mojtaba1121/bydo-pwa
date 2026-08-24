import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'bydo-brand',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent {}

@Component({
  selector: 'bydo-page-header',
  standalone: true,
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  title = input.required<string>();
  eyebrow = input('بایدو');
}

@Component({
  selector: 'bydo-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent {}

@Component({
  selector: 'bydo-bike-visual',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './bike-visual.component.html',
  styleUrl: './bike-visual.component.css'
})
export class BikeVisualComponent {
  size = input(112);
}

@Component({
  selector: 'bydo-scan-button',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './scan-button.component.html',
  styleUrl: './scan-button.component.css'
})
export class ScanButtonComponent {}
