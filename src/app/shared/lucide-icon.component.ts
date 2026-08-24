/* eslint-disable @angular-eslint/component-selector */
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'lucide-icon',
  standalone: true,
  imports: [LucideDynamicIcon],
  templateUrl: './lucide-icon.component.html',
  styleUrl: './lucide-icon.component.css',
  changeDetection: ChangeDetectionStrategy.Eager
})
export class LucideIconComponent {
  name = input.required<string>();
  size = input<string | number | null>(null);
  strokeWidth = input<string | number | null>(null);
}
