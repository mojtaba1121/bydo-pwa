import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { ArrowRight, BatteryCharging, Bell, Bike, Check, CheckCircle2, ChevronLeft, CircleDot, CircleUserRound, Clock3, CreditCard, Flag, Flashlight, Gift, Headphones, HelpCircle, Image, Keyboard, Languages, Lightbulb, LocateFixed, Lock, LockKeyhole, Map, MapPin, Minus, Navigation, OctagonAlert, Plus, QrCode, Search, Settings, Shield, ShieldCheck, Siren, SlidersHorizontal, Smartphone, UserRound, WalletCards, Wrench, Zap, LucideAngularModule } from 'lucide-angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideAnimations(),
    importProvidersFrom(LucideAngularModule.pick({ ArrowRight, BatteryCharging, Bell, Bike, Check, CheckCircle2, ChevronLeft, CircleDot, CircleUserRound, Clock3, CreditCard, Flag, Flashlight, Gift, Headphones, HelpCircle, Image, Keyboard, Languages, Lightbulb, LocateFixed, Lock, LockKeyhole, Map, MapPin, Minus, Navigation, OctagonAlert, Plus, QrCode, Search, Settings, Shield, ShieldCheck, Siren, SlidersHorizontal, Smartphone, UserRound, WalletCards, Wrench, Zap })),
    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode(), registrationStrategy: 'registerWhenStable:30000' })
  ]
}).catch(console.error);
