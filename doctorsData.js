// قاعدة بيانات أطباء كشفيّة
const doctorsData = [
    {
        id: 1,
        name: "د. أحمد محمود",
        specialty: "internal", // باطنية
        specialtyAr: "أخصائي باطنية وقلبية",
        province: "baghdad", // المحافظة
        provinceAr: "بغداد",
        address: "الحارثية - شارع الكندي - مجمع العيادات",
        lat: 33.3128, // الإحداثيات لخرائط جوجل
        lng: 44.3615,
        phone: "07700000000",
        hours: "4:00 م - 8:00 م",
        img: "https://ui-avatars.com/api/?name=د+احمد&background=005eb8&color=fff"
    },
    {
        id: 2,
        name: "د. سارة علي",
        specialty: "gynae", // نسائية
        specialtyAr: "أخصائية نسائية وتوليد",
        province: "erbil",
        provinceAr: "أربيل",
        address: "شارع 40 - مقابل مستشفى رزگاري",
        lat: 36.1901,
        lng: 44.0091,
        phone: "07500000000",
        hours: "3:00 م - 7:00 م",
        img: "https://ui-avatars.com/api/?name=د+سارة&background=005eb8&color=fff"
    }
    // تگدر تضيف أي عدد من الأطباء هنا بنفس الطريقة
];
