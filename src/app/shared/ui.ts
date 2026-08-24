import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideIconComponent } from './lucide-icon.component';
import { TranslatePipe } from '../core/i18n.service';

@Component({
  selector: 'bydo-brand',
  standalone: true,
  imports: [RouterLink, LucideIconComponent, TranslatePipe],
  templateUrl: './brand.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './brand.component.css'
})
export class BrandComponent {}

@Component({
  selector: 'bydo-page-header',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './page-header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './page-header.component.css'
})
export class PageHeaderComponent {
  title = input.required<string>();
  eyebrow = input('appName');
}

@Component({
  selector: 'bydo-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideIconComponent, TranslatePipe],
  templateUrl: './bottom-nav.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent {}

@Component({
  selector: 'bydo-bike-visual',
  standalone: true,
  imports: [LucideIconComponent],
  templateUrl: './bike-visual.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bike-visual.component.css'
})
export class BikeVisualComponent {
  size = input(112);
}

@Component({
  selector: 'bydo-scan-button',
  standalone: true,
  imports: [RouterLink, LucideIconComponent, TranslatePipe],
  templateUrl: './scan-button.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './scan-button.component.css'
})
export class ScanButtonComponent {}
