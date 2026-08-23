import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { BrandComponent } from '../../shared/ui';

@Component({
  standalone: true,
  imports: [FormsModule, BrandComponent, LucideAngularModule],
  template: `<main class="auth-shell">
    <section class="auth-hero">
      <div class="hero-top"><bydo-brand/><button class="language"><lucide-icon name="languages"/> فارسی</button></div>
      <div class="hero-copy"><span class="mini-badge"><i></i> شهر برای حرکت آماده‌ست</span><h1>شهر را<br><em>با ریتم خودت</em><br>کشف کن.</h1><p>نزدیک‌ترین دوچرخه را پیدا کن، قفلش را باز کن و سفرت را شروع کن.</p></div>
      <div class="road"><span class="road-line"></span><span class="bike-orbit"><lucide-icon name="bike" [size]="74"/></span></div>
      <div class="trust-row"><span><lucide-icon name="check"/> بدون ترافیک</span><span><lucide-icon name="check"/> دوستدار شهر</span><span><lucide-icon name="check"/> همیشه نزدیک</span></div>
    </section>
    <section class="auth-panel">
      <div class="auth-card">
        <p class="eyebrow">خوش اومدی</p><h2>ورود به بایدو</h2><p class="muted">شماره موبایلت را وارد کن تا کد تأیید برات ارسال بشه.</p>
        <label for="mobile">شماره موبایل</label>
        <div class="phone-field" [class.valid]="mobile.length === 11"><span>+۹۸</span><input id="mobile" inputmode="numeric" maxlength="11" [(ngModel)]="mobile" placeholder="شماره تأییدشده"><lucide-icon name="smartphone"/></div>
        <button class="btn primary wide" [disabled]="mobile.length !== 11" (click)="continue()">دریافت کد تأیید <lucide-icon name="chevron-left"/></button>
        <div class="divider"><span>یا</span></div>
        <button class="btn secondary wide" (click)="continue()"><lucide-icon name="shield-check"/> ورود یکپارچه سازمانی</button>
        <p class="terms">با ورود، <a href="#">قوانین استفاده</a> و <a href="#">حریم خصوصی</a> را می‌پذیرم.</p>
      </div>
    </section>
  </main>`,
  styles: [`:host{display:block;min-height:100dvh}.auth-shell{min-height:100dvh;display:grid;grid-template-columns:1.1fr .9fr;background:var(--surface)}.auth-hero{position:relative;overflow:hidden;padding:2rem clamp(2rem,5vw,5rem);background:var(--ink);color:#fff;display:flex;flex-direction:column;min-height:100dvh}.auth-hero:after{content:'';position:absolute;inset:auto -10% -30% auto;width:70%;aspect-ratio:1;border-radius:50%;border:1px solid rgba(255,255,255,.1);box-shadow:0 0 0 70px rgba(255,255,255,.025),0 0 0 140px rgba(255,255,255,.02)}.hero-top{display:flex;justify-content:space-between;align-items:center;position:relative;z-index:2}.hero-top ::ng-deep .brand{color:#fff}.language{display:flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#fff;padding:.65rem .8rem;border-radius:12px}.hero-copy{position:relative;z-index:2;margin:auto 0}.mini-badge{display:inline-flex;align-items:center;gap:.5rem;color:#bdddb6;font-size:.78rem;font-weight:800}.mini-badge i{width:7px;height:7px;background:#7cbc6d;border-radius:50%;box-shadow:0 0 0 5px rgba(124,188,109,.12)}h1{font-size:clamp(2.8rem,5vw,5rem);line-height:1.16;margin:1rem 0;font-weight:950;letter-spacing:-.05em}h1 em{font-style:normal;color:#7cbc6d}h1+p{max-width:520px;color:#bfbfbf;font-size:1.05rem;line-height:1.9}.road{height:120px;position:relative;z-index:2}.road-line{position:absolute;inset:55% 0 auto;border-top:2px dashed rgba(255,255,255,.16)}.bike-orbit{position:absolute;left:20%;top:8%;color:#7cbc6d;filter:drop-shadow(0 12px 18px rgba(0,0,0,.4))}.trust-row{display:flex;gap:1.5rem;color:#bfbfbf;font-size:.75rem;position:relative;z-index:2}.trust-row span{display:flex;align-items:center;gap:.3rem}.trust-row lucide-icon{color:#7cbc6d;width:15px}.auth-panel{display:grid;place-items:center;padding:2rem}.auth-card{width:min(100%,430px);background:#fff;border:1px solid var(--line);box-shadow:var(--shadow-lg);padding:clamp(1.5rem,4vw,2.5rem);border-radius:28px}.eyebrow{color:var(--primary);font-weight:900;font-size:.78rem;margin:0}h2{font-size:2rem;margin:.3rem 0}.muted{margin:0 0 1.7rem;line-height:1.8}.auth-card label{display:block;font-size:.82rem;font-weight:800;margin-bottom:.55rem}.phone-field{height:56px;border:1px solid var(--line-strong);border-radius:14px;display:flex;align-items:center;padding:0 .9rem;gap:.7rem;direction:ltr;transition:.2s}.phone-field:focus-within{border-color:var(--primary);box-shadow:0 0 0 4px var(--primary-soft)}.phone-field input{border:0;outline:0;flex:1;font:inherit;text-align:right;background:transparent}.phone-field span{padding-right:.7rem;border-right:1px solid var(--line);color:var(--muted)}.phone-field lucide-icon{color:var(--primary)}.btn{margin-top:1rem}.divider{display:flex;align-items:center;color:var(--muted);font-size:.75rem;margin:1.1rem 0 0}.divider:before,.divider:after{content:'';height:1px;background:var(--line);flex:1}.divider span{padding:0 1rem}.terms{text-align:center;font-size:.7rem;color:var(--muted);margin:1.3rem 0 0}.terms a{color:var(--primary);font-weight:700}@media(max-width:850px){.auth-shell{grid-template-columns:1fr}.auth-hero{min-height:42dvh;padding:1.25rem}.hero-copy{margin:2.5rem 0 1rem}.hero-copy h1{font-size:2.6rem}.road,.trust-row{display:none}.auth-panel{padding:0 1rem 1.5rem;margin-top:-1rem;position:relative;z-index:3}.auth-card{border-radius:24px}.hero-top ::ng-deep .brand-mark{width:2.25rem;height:2.25rem}}`]
})
export class LoginPage { mobile = ''; constructor(private router: Router) {} continue(){ void this.router.navigateByUrl('/map'); } }
