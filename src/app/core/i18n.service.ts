import { inject, Injectable, Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './preferences.service';

const TRANSLATIONS: Record<string, { fa: string; en: string }> = {
  appName: { fa: 'بایدو', en: 'Bydo' },
  navMap: { fa: 'نقشه', en: 'Map' },
  navTrips: { fa: 'سفرها', en: 'Trips' },
  navWallet: { fa: 'کیف پول', en: 'Wallet' },
  navAccount: { fa: 'حساب', en: 'Account' },
  mainNav: { fa: 'ناوبری اصلی', en: 'Main navigation' },
  brandAria: { fa: 'بایدو، صفحه نقشه', en: 'Bydo, map page' },
  scanFabAria: { fa: 'اسکن کد دوچرخه', en: 'Scan bike code' },
  scanFab: { fa: 'اسکن و شروع', en: 'Scan and start' },
  languageFa: { fa: 'فارسی', en: 'FA' },
  languageEn: { fa: 'انگلیسی', en: 'EN' },
  themeLight: { fa: 'روشن', en: 'Light' },
  themeDark: { fa: 'تیره', en: 'Dark' },

  authBadge: { fa: 'شهر برای حرکت آماده‌ست', en: 'The city is ready to move' },
  authHeroLine1: { fa: 'شهر را', en: 'Discover' },
  authHeroLine2: { fa: 'با ریتم خودت', en: 'the city' },
  authHeroLine3: { fa: 'کشف کن.', en: 'at your pace.' },
  authHeroCopy: {
    fa: 'نزدیک‌ترین دوچرخه را پیدا کن، قفلش را باز کن و سفرت را شروع کن.',
    en: 'Find the nearest bike, unlock it, and start your ride.'
  },
  authTrustTraffic: { fa: 'بدون ترافیک', en: 'No traffic' },
  authTrustCity: { fa: 'دوستدار شهر', en: 'City friendly' },
  authTrustNearby: { fa: 'همیشه نزدیک', en: 'Always nearby' },
  welcome: { fa: 'خوش اومدی', en: 'Welcome' },
  loginTitle: { fa: 'ورود به بایدو', en: 'Sign in to Bydo' },
  loginMobileHint: {
    fa: 'شماره موبایلت را وارد کن تا کد تأیید برات ارسال بشه.',
    en: 'Enter your mobile number to receive a verification code.'
  },
  loginOtpHint: { fa: 'کد ارسال‌شده به شماره موبایلت را وارد کن.', en: 'Enter the code sent to your mobile number.' },
  mobileLabel: { fa: 'شماره موبایل', en: 'Mobile number' },
  otpLabel: { fa: 'کد تأیید', en: 'Verification code' },
  requestOtp: { fa: 'دریافت کد تأیید', en: 'Get verification code' },
  loginSubmit: { fa: 'ورود به بایدو', en: 'Sign in to Bydo' },
  editMobile: { fa: 'ویرایش شماره موبایل', en: 'Edit mobile number' },
  or: { fa: 'یا', en: 'or' },
  ssoLogin: { fa: 'ورود یکپارچه سازمانی', en: 'Enterprise SSO' },
  termsPrefix: { fa: 'با ورود،', en: 'By signing in, you accept the' },
  termsUse: { fa: 'قوانین استفاده', en: 'Terms of Use' },
  termsPrivacy: { fa: 'حریم خصوصی', en: 'Privacy Policy' },
  and: { fa: 'و', en: 'and' },
  termsSuffix: { fa: 'را می‌پذیرم.', en: '.' },
  authFailed: { fa: 'ورود انجام نشد', en: 'Sign-in failed' },
  backToLogin: { fa: 'بازگشت به ورود', en: 'Back to sign in' },
  authErrorGeneric: { fa: 'درخواست انجام نشد. دوباره تلاش کن.', en: 'The request failed. Please try again.' },
  authErrorNetwork: {
    fa: 'ارتباط با سرور برقرار نشد. اینترنت یا آدرس سرویس را بررسی کن.',
    en: 'Could not connect to the server. Check your internet connection or service URL.'
  },
  authErrorInvalidFields: { fa: 'اطلاعات واردشده معتبر نیست.', en: 'The entered information is not valid.' },
  authErrorInvalidOtp: { fa: 'کد تأیید درست نیست یا منقضی شده است.', en: 'The verification code is incorrect or expired.' },
  shahrmanMissingCallback: { fa: 'اطلاعات ورود شهر من ناقص است.', en: 'Shahr Man sign-in information is incomplete.' },
  ssoMissingCallback: { fa: 'اطلاعات بازگشتی ورود یکپارچه ناقص است.', en: 'SSO callback information is incomplete.' },
  ssoInvalidState: {
    fa: 'درخواست ورود یکپارچه معتبر نیست. دوباره از صفحه ورود اقدام کن.',
    en: 'The SSO request is not valid. Start again from the sign-in page.'
  },
  ssoLoadingTitle: { fa: 'در حال تکمیل ورود یکپارچه', en: 'Completing SSO sign-in' },
  ssoLoadingText: {
    fa: 'اطلاعات بازگشتی از سامانه سازمانی بررسی می‌شه.',
    en: 'We are checking the response from your organization.'
  },
  shahrmanLoadingTitle: { fa: 'در حال بررسی ورود شهر من', en: 'Checking Shahr Man sign-in' },
  shahrmanLoadingText: { fa: 'چند لحظه صبر کن تا احراز هویت کامل بشه.', en: 'Please wait while authentication completes.' },

  goodEvening: { fa: 'عصر بخیر،', en: 'Good evening,' },
  bydoCompanion: { fa: 'همراه بایدو', en: 'Bydo rider' },
  destinationSearchAria: { fa: 'جستجوی مقصد', en: 'Search destination' },
  destinationSearch: { fa: 'کجا می‌خوای بری؟', en: 'Where are you going?' },
  parkMellat: { fa: 'پارک ملت', en: 'Mellat Park' },
  keshavarzBlvd: { fa: 'بلوار کشاورز', en: 'Keshavarz Blvd' },
  'ایستگاه پارک ملت': { fa: 'ایستگاه پارک ملت', en: 'Mellat Park Station' },
  'ورودی اصلی پارک ملت': { fa: 'ورودی اصلی پارک ملت', en: 'Mellat Park main entrance' },
  'ایستگاه میدان ولیعصر': { fa: 'ایستگاه میدان ولیعصر', en: 'Valiasr Square Station' },
  'ضلع شمال‌شرقی میدان': { fa: 'ضلع شمال‌شرقی میدان', en: 'Northeast side of the square' },
  'ایستگاه بلوار کشاورز': { fa: 'ایستگاه بلوار کشاورز', en: 'Keshavarz Blvd Station' },
  'نبش خیابان فلسطین': { fa: 'نبش خیابان فلسطین', en: 'Corner of Palestine Street' },
  'ایستگاه پارک لاله': { fa: 'ایستگاه پارک لاله', en: 'Laleh Park Station' },
  'ورودی خیابان کارگر': { fa: 'ورودی خیابان کارگر', en: 'Kargar Street entrance' },
  '۳ دقیقه': { fa: '۳ دقیقه', en: '3 min' },
  '۸ دقیقه': { fa: '۸ دقیقه', en: '8 min' },
  '۱۲ دقیقه': { fa: '۱۲ دقیقه', en: '12 min' },
  '۱۵ دقیقه': { fa: '۱۵ دقیقه', en: '15 min' },
  nearestStation: { fa: 'نزدیک‌ترین ایستگاه', en: 'Nearest station' },
  directions: { fa: 'مسیریابی', en: 'Directions' },
  bikesReady: { fa: 'دوچرخه آماده', en: 'bikes ready' },
  docksEmpty: { fa: 'جایگاه خالی', en: 'empty docks' },
  viewBikes: { fa: 'مشاهده دوچرخه‌ها', en: 'View bikes' },

  selectedStation: { fa: 'ایستگاه انتخابی', en: 'Selected station' },
  vehicleSelect: { fa: 'انتخاب وسیله', en: 'Choose a bike' },
  stationBikes: { fa: 'دوچرخه‌های این ایستگاه', en: 'Bikes at this station' },
  item: { fa: 'مورد', en: 'items' },
  charge: { fa: 'شارژ', en: 'Charge' },
  range: { fa: 'برد', en: 'Range' },
  km: { fa: 'کیلومتر', en: 'km' },
  select: { fa: 'انتخاب', en: 'Select' },
  electric: { fa: 'برقی', en: 'Electric' },
  regular: { fa: 'معمولی', en: 'Regular' },
  ready: { fa: 'آماده', en: 'Ready' },
  needsReview: { fa: 'نیازمند بررسی', en: 'Needs review' },
  'برقی': { fa: 'برقی', en: 'Electric' },
  'معمولی': { fa: 'معمولی', en: 'Regular' },
  'آماده': { fa: 'آماده', en: 'Ready' },
  'نیازمند بررسی': { fa: 'نیازمند بررسی', en: 'Needs review' },

  reserveTitle: { fa: 'رزرو دوچرخه', en: 'Bike reservation' },
  reserved: { fa: 'با موفقیت رزرو شد', en: 'Reserved successfully' },
  bikeWaiting: { fa: 'دوچرخه منتظر شماست', en: 'Your bike is waiting' },
  reserveLead: {
    fa: 'تا پایان زمان رزرو خودت را به ایستگاه برسون و قفل دوچرخه رو باز کن.',
    en: 'Reach the station before the reservation expires and unlock the bike.'
  },
  remainingTime: { fa: 'زمان باقی‌مانده', en: 'Time left' },
  bikeCode: { fa: 'کد دوچرخه', en: 'Bike code' },
  pickupPlace: { fa: 'محل دریافت', en: 'Pickup location' },
  scanUnlock: { fa: 'اسکن کد و باز کردن قفل', en: 'Scan code and unlock' },
  damageQuestion: { fa: 'دوچرخه مشکلی دارد؟ گزارش خرابی', en: 'Bike has a problem? Report damage' },
  freeReservation: { fa: 'رزرو رایگان است', en: 'Reservation is free' },
  rideChargedAfterUnlock: { fa: 'هزینه سفر فقط بعد از باز شدن قفل محاسبه می‌شود.', en: 'Ride cost starts only after unlocking.' },

  damageTitle: { fa: 'گزارش خرابی', en: 'Report damage' },
  preRideCheck: { fa: 'بررسی قبل از سفر', en: 'Pre-ride check' },
  damageHeading: { fa: 'کجای دوچرخه مشکل داره؟', en: 'What part has a problem?' },
  damageHelp: { fa: 'برای انتخاب، روی قسمت موردنظر دوچرخه یا یکی از گزینه‌ها بزن.', en: 'Tap a bike part or choose an option.' },
  wheelTire: { fa: 'چرخ و لاستیک', en: 'Wheel and tire' },
  handleBrake: { fa: 'فرمان و ترمز', en: 'Handlebar and brake' },
  bikeLock: { fa: 'قفل دوچرخه', en: 'Bike lock' },
  light: { fa: 'چراغ', en: 'Light' },
  moreDetailsOptional: { fa: 'توضیحات بیشتر (اختیاری)', en: 'More details (optional)' },
  damagePlaceholder: { fa: 'مشکل را کوتاه توضیح بده...', en: 'Briefly describe the issue...' },
  submitDamage: { fa: 'ثبت گزارش و انتخاب دوچرخه دیگر', en: 'Submit and choose another bike' },

  scanTitle: { fa: 'اسکن دوچرخه', en: 'Scan bike' },
  scanHeading: { fa: 'کد روی فرمان را اسکن کن', en: 'Scan the code on the handlebar' },
  scanHelp: { fa: 'دوربین را مقابل QR دوچرخه نگه دار', en: 'Point the camera at the bike QR code' },
  flashlight: { fa: 'چراغ', en: 'Flash' },
  gallery: { fa: 'گالری', en: 'Gallery' },
  safeLock: { fa: 'قفل امن بایدو', en: 'Secure Bydo lock' },
  autoUnlockCopy: { fa: 'بعد از تأیید کد، قفل به‌صورت خودکار باز می‌شود.', en: 'After verification, the lock opens automatically.' },
  manualCode: { fa: 'وارد کردن کد به‌صورت دستی', en: 'Enter code manually' },

  activeRide: { fa: 'سفر فعال', en: 'Active ride' },
  emergencyHelp: { fa: 'کمک اضطراری', en: 'Emergency help' },
  rideDuration: { fa: 'مدت سفر', en: 'Ride duration' },
  bike: { fa: 'دوچرخه', en: 'Bike' },
  distance: { fa: 'مسافت', en: 'Distance' },
  currentSpeed: { fa: 'سرعت فعلی', en: 'Current speed' },
  currentCost: { fa: 'هزینه تا این لحظه', en: 'Cost so far' },
  toman: { fa: 'تومان', en: 'toman' },
  endRideNote: { fa: 'برای پایان سفر، دوچرخه را در یکی از ایستگاه‌های بایدو قفل کن.', en: 'To end the ride, lock the bike at a Bydo station.' },
  endRide: { fa: 'پایان سفر', en: 'End ride' },
  closeLockAtStation: { fa: 'قفل را در ایستگاه ببند', en: 'Lock it at a station' },

  walletBalance: { fa: 'موجودی کیف پول', en: 'Wallet balance' },
  addBalance: { fa: 'افزایش موجودی', en: 'Add balance' },
  recentTransactions: { fa: 'تراکنش‌های اخیر', en: 'Recent transactions' },
  mellatTrip: { fa: 'سفر پارک ملت', en: 'Mellat Park ride' },
  todayTime: { fa: 'امروز، ۱۸:۴۲', en: 'Today, 18:42' },
  topUp: { fa: 'افزایش موجودی', en: 'Top-up' },
  mordad22: { fa: '۲۲ مرداد، ۱۰:۱۵', en: 'Aug 13, 10:15' },
  keshavarzTrip: { fa: 'سفر بلوار کشاورز', en: 'Keshavarz Blvd ride' },
  mordad20: { fa: '۲۰ مرداد، ۱۷:۰۳', en: 'Aug 11, 17:03' },
  bydoUser: { fa: 'کاربر بایدو', en: 'Bydo user' },
  verifiedMobile: { fa: 'شماره تأییدشده', en: 'Verified mobile' },
  accountVerified: { fa: 'حساب تأیید شده', en: 'Verified account' },
  accountSettings: { fa: 'تنظیمات حساب', en: 'Account settings' },
  inviteFriends: { fa: 'دعوت از دوستان', en: 'Invite friends' },
  support: { fa: 'پشتیبانی', en: 'Support' },
  help: { fa: 'راهنمای استفاده', en: 'Help' },
  traveledRoutes: { fa: 'مسیرهای طی‌شده', en: 'Completed routes' },
  myTrips: { fa: 'سفرهای من', en: 'My trips' },
  trip: { fa: 'سفر', en: 'rides' },
  kilometers: { fa: 'کیلومتر', en: 'km' },
  ridingHours: { fa: 'ساعت رکاب‌زنی', en: 'riding hours' },
  recentTrips: { fa: 'سفرهای اخیر', en: 'Recent trips' },
  routeMellatValiasr: { fa: 'پارک ملت ← میدان ولیعصر', en: 'Mellat Park -> Valiasr Square' },
  tripMellatMeta: { fa: 'امروز · ۲۴ دقیقه · ۴٫۲ کیلومتر', en: 'Today · 24 min · 4.2 km' },
  routeKeshavarzLaleh: { fa: 'بلوار کشاورز ← پارک لاله', en: 'Keshavarz Blvd -> Laleh Park' },
  tripKeshavarzMeta: { fa: '۲۰ مرداد · ۳۱ دقیقه · ۵٫۸ کیلومتر', en: 'Aug 11 · 31 min · 5.8 km' }
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly language = inject(LanguageService);

  t(key: string): string {
    return TRANSLATIONS[key]?.[this.language.language()] ?? key;
  }
}

@Pipe({ name: 't', standalone: true, pure: false })
export class TranslatePipe implements PipeTransform {
  private readonly i18n = inject(I18nService);

  transform(key: string): string {
    return this.i18n.t(key);
  }
}
