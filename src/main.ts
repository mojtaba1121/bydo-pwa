import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withXhr } from '@angular/common/http';
import { isDevMode, provideZoneChangeDetection } from '@angular/core';
import { LucideArrowRight, LucideBatteryCharging, LucideBell, LucideBike, LucideCheck, LucideCheckCircle2, LucideChevronLeft, LucideCircleDot, LucideCircleUserRound, LucideClock3, LucideCreditCard, LucideFlag, LucideFlashlight, LucideGift, LucideGlobe2, LucideHeadphones, LucideHelpCircle, LucideImage, LucideKeyboard, LucideLanguages, LucideLightbulb, LucideLocateFixed, LucideLock, LucideLockKeyhole, LucideMap, LucideMapPin, LucideMinus, LucideMoon, LucideNavigation, LucideOctagonAlert, LucidePlus, LucideQrCode, LucideSearch, LucideSettings, LucideShield, LucideShieldCheck, LucideSiren, LucideSlidersHorizontal, LucideSmartphone, LucideSun, LucideUserRound, LucideWalletCards, LucideWrench, LucideZap, provideLucideIcons } from '@lucide/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZoneChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withXhr()),
    provideLucideIcons(
      LucideArrowRight,
      LucideBatteryCharging,
      LucideBell,
      LucideBike,
      LucideCheck,
      LucideCheckCircle2,
      LucideChevronLeft,
      LucideCircleDot,
      LucideCircleUserRound,
      LucideClock3,
      LucideCreditCard,
      LucideFlag,
      LucideFlashlight,
      LucideGift,
      LucideGlobe2,
      LucideHeadphones,
      LucideHelpCircle,
      LucideImage,
      LucideKeyboard,
      LucideLanguages,
      LucideLightbulb,
      LucideLocateFixed,
      LucideLock,
      LucideLockKeyhole,
      LucideMap,
      LucideMapPin,
      LucideMinus,
      LucideMoon,
      LucideNavigation,
      LucideOctagonAlert,
      LucidePlus,
      LucideQrCode,
      LucideSearch,
      LucideSettings,
      LucideShield,
      LucideShieldCheck,
      LucideSiren,
      LucideSlidersHorizontal,
      LucideSmartphone,
      LucideSun,
      LucideUserRound,
      LucideWalletCards,
      LucideWrench,
      LucideZap
    ),
    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000' })
  ]
}).catch(console.error);
