export interface Station {
    id: number;
    name: string;
    address: string;
    bikes: number;
    docks: number;
    distance: string;
    x: number;
    y: number;
    featured?: boolean;
}
export interface Bike {
    id: string;
    battery: number;
    range: number;
    type: "برقی" | "معمولی";
    status: "آماده" | "نیازمند بررسی";
}

export const STATIONS: Station[] = [
    {
        id: 1,
        name: "ایستگاه پارک ملت",
        address: "ورودی اصلی پارک ملت",
        bikes: 8,
        docks: 4,
        distance: "۳ دقیقه",
        x: 53,
        y: 38,
        featured: true,
    },
    {
        id: 2,
        name: "ایستگاه میدان ولیعصر",
        address: "ضلع شمال‌شرقی میدان",
        bikes: 3,
        docks: 9,
        distance: "۸ دقیقه",
        x: 27,
        y: 57,
    },
    {
        id: 3,
        name: "ایستگاه بلوار کشاورز",
        address: "نبش خیابان فلسطین",
        bikes: 5,
        docks: 6,
        distance: "۱۲ دقیقه",
        x: 72,
        y: 66,
    },
    {
        id: 4,
        name: "ایستگاه پارک لاله",
        address: "ورودی خیابان کارگر",
        bikes: 1,
        docks: 11,
        distance: "۱۵ دقیقه",
        x: 75,
        y: 25,
    },
];

export const BIKES: Bike[] = [
    {id: "BD-2048", battery: 92, range: 36, type: "برقی", status: "آماده"},
    {id: "BD-1852", battery: 78, range: 29, type: "برقی", status: "آماده"},
    {id: "BD-0914", battery: 0, range: 0, type: "معمولی", status: "آماده"},
    {id: "BD-2210", battery: 43, range: 16, type: "برقی", status: "نیازمند بررسی"},
];
