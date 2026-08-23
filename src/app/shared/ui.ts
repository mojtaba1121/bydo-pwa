import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'bydo-brand',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `<a class="brand" routerLink="/map" aria-label="بایدو، صفحه نقشه"><span class="brand-mark"><lucide-icon name="bike" [size]="22" /></span><span>بایدو</span></a>`,
  styles: [`.brand{display:inline-flex;align-items:center;gap:.6rem;color:var(--ink);font-size:1.35rem;font-weight:900}.brand-mark{display:grid;place-items:center;width:2.5rem;height:2.5rem;border-radius:14px;background:var(--primary);color:#fff;box-shadow:var(--shadow-green)}`]
})
export class BrandComponent {}

@Component({
  selector: 'bydo-page-header',
  standalone: true,
  template: `<header class="page-header"><div><p class="eyebrow">{{ eyebrow() }}</p><h1>{{ title() }}</h1><ng-content /></div></header>`,
  styles: [`.page-header{padding:1.25rem 1.25rem .9rem}.eyebrow{color:var(--primary);font-size:.75rem;font-weight:800;margin:0 0 .2rem}.page-header h1{font-size:1.45rem;margin:0;color:var(--ink)}`]
})
export class PageHeaderComponent { title = input.required<string>(); eyebrow = input('بایدو'); }

@Component({
  selector: 'bydo-bottom-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  template: `<nav class="bottom-nav" aria-label="ناوبری اصلی">
    <a routerLink="/map" routerLinkActive="active"><lucide-icon name="map"/><span>نقشه</span></a>
    <a routerLink="/trips" routerLinkActive="active"><lucide-icon name="clock-3"/><span>سفرها</span></a>
    <a routerLink="/wallet" routerLinkActive="active"><lucide-icon name="wallet-cards"/><span>کیف پول</span></a>
    <a routerLink="/profile" routerLinkActive="active"><lucide-icon name="circle-user-round"/><span>حساب</span></a>
  </nav>`,
  styles: [`.bottom-nav{position:fixed;z-index:30;bottom:0;left:50%;transform:translateX(-50%);width:min(100%,520px);height:76px;padding:8px 12px calc(8px + env(safe-area-inset-bottom));display:grid;grid-template-columns:repeat(4,1fr);background:rgba(255,255,255,.92);border-top:1px solid var(--line);backdrop-filter:blur(16px)}a{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;color:var(--muted);font-size:.72rem;font-weight:700;border-radius:14px}lucide-icon{width:21px;height:21px}.active{color:var(--primary);background:var(--primary-soft)}`]
})
export class BottomNavComponent {}

@Component({
  selector: 'bydo-bike-visual',
  standalone: true,
  imports: [LucideAngularModule],
  template: `<div class="bike-visual"><span class="halo"></span><lucide-icon name="bike" [size]="size()" [strokeWidth]="1.4"/></div>`,
  styles: [`.bike-visual{height:150px;display:grid;place-items:center;position:relative;color:var(--primary)}.halo{position:absolute;width:130px;height:130px;border-radius:50%;background:radial-gradient(circle,var(--primary-soft),transparent 70%)}lucide-icon{position:relative;filter:drop-shadow(0 14px 15px rgba(40,120,22,.17))}`]
})
export class BikeVisualComponent { size = input(112); }

@Component({ selector:'bydo-scan-button', standalone:true, imports:[RouterLink,LucideAngularModule], template:`<a class="scan-fab" routerLink="/scan" aria-label="اسکن کد دوچرخه"><lucide-icon name="qr-code"/><span>اسکن و شروع</span></a>`, styles:[`.scan-fab{position:fixed;z-index:32;left:50%;bottom:88px;transform:translateX(-50%);display:flex;align-items:center;gap:.55rem;padding:.85rem 1.15rem;border-radius:999px;background:var(--ink);color:#fff;font-weight:800;box-shadow:0 12px 32px rgba(0,18,0,.28);white-space:nowrap}.scan-fab:hover{background:var(--primary-dark)}`] })
export class ScanButtonComponent {}
