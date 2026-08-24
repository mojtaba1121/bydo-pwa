import {Routes} from "@angular/router";
import {LoginPage} from "./features/auth/login.page";
import {ShahrManCallbackPage} from "./features/auth/shahrman-callback.page";
import {SsoCallbackPage} from "./features/auth/sso-callback.page";
import {MapPage} from "./features/map/map.page";
import {StationPage} from "./features/station/station.page";
import {ReservationPage} from "./features/reservation/reservation.page";
import {ScanPage} from "./features/scan/scan.page";
import {DamagePage} from "./features/damage/damage.page";
import {RidePage} from "./features/ride/ride.page";
import {SimplePage} from "./features/simple/simple.page";

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "login"},
    {path: "login", component: LoginPage, title: "ورود | بایدو"},
    {path: "callback", component: ShahrManCallbackPage, title: "ورود شهر من | بایدو"},
    {path: "auth/shahreman/callback", component: ShahrManCallbackPage, title: "ورود شهر من | بایدو"},
    {path: "auth/sso/callback", component: SsoCallbackPage, title: "ورود یکپارچه | بایدو"},
    {path: "map", component: MapPage, title: "نقشه ایستگاه‌ها | بایدو"},
    {path: "station/:id", component: StationPage, title: "انتخاب دوچرخه | بایدو"},
    {path: "reservation/:bikeId", component: ReservationPage, title: "رزرو دوچرخه | بایدو"},
    {path: "scan", component: ScanPage, title: "اسکن دوچرخه | بایدو"},
    {path: "damage/:bikeId", component: DamagePage, title: "گزارش خرابی | بایدو"},
    {path: "ride", component: RidePage, title: "سفر فعال | بایدو"},
    {path: "trips", component: SimplePage, data: {type: "trips"}, title: "سفرهای من | بایدو"},
    {path: "wallet", component: SimplePage, data: {type: "wallet"}, title: "کیف پول | بایدو"},
    {path: "profile", component: SimplePage, data: {type: "profile"}, title: "حساب کاربری | بایدو"},
    {path: "**", redirectTo: "map"},
];
