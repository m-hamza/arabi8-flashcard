export interface Flashcard {
  id: string;
  arabic: string;
  persian: string;
}

export interface Lesson {
  id: number;
  title: string;
  titleArabic: string;
  flashcards: Flashcard[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "درس اول - مراجعه دروس کلاس هفتم",
    titleArabic: "الدَّرْسُ الأَوَّل - مُراجَعَةُ دُرُوسِ الصَّفِّ السّابِع",
    flashcards: [
      { id: "1-1", arabic: "بَسيط", persian: "ساده" },
      { id: "1-2", arabic: "طَبَخْتَ", persian: "پختم" },
      { id: "1-3", arabic: "الثّامِنَ", persian: "هشتم" },
      { id: "1-4", arabic: "طَبّاخ", persian: "آشپز" },
      { id: "1-5", arabic: "حافِلَة", persian: "اتوبوس" },
      { id: "1-6", arabic: "كُرَةُ القَدَم", persian: "فوتبال" },
      { id: "1-7", arabic: "حَلْوانِي", persian: "شیرینی فروش" },
      { id: "1-8", arabic: "رُز", persian: "برنج" },
      { id: "1-9", arabic: "مُراجَعَة", persian: "دوره کردن" },
      { id: "1-10", arabic: "مُمَرِّض", persian: "پرستار" },
      { id: "1-11", arabic: "رَسائِل", persian: "نامه‌ها" },
      { id: "1-12", arabic: "مَوْقِف", persian: "ایستگاه" },
      { id: "1-13", arabic: "زُمَلاء", persian: "هم کلاسی‌ها" },
      { id: "1-14", arabic: "مُوَظَّف", persian: "کارمند" },
      { id: "1-15", arabic: "سَنَة دِراسِيَّة", persian: "سال تحصیلی" },
      { id: "1-16", arabic: "نَجَحَ", persian: "موفق شد" },
      { id: "1-17", arabic: "شُرْطِي", persian: "مأمور پلیس" },
      { id: "1-18", arabic: "نُصوص", persian: "متن‌ها" }
    ]
  },
  {
    id: 2,
    title: "درس دوم - اهمیت زبان عربی",
    titleArabic: "الدَّرْسُ الثّانِي - أَهَمِّيَّةُ اللُّغَةِ العَرَبِيَّة",
    flashcards: [
      { id: "2-1", arabic: "كُلُّ رَجُلٍ", persian: "هر مردی" },
      { id: "2-2", arabic: "لا بَأْس", persian: "اشکالی ندارد" },
      { id: "2-3", arabic: "آسانْسور", persian: "آسانسور" },
      { id: "2-4", arabic: "فارِغ", persian: "خالی" },
      { id: "2-5", arabic: "أَسْعار", persian: "قیمت‌ها" },
      { id: "2-6", arabic: "قَدَرَ", persian: "توانست" },
      { id: "2-7", arabic: "إيجار", persian: "کرایه، اجاره" },
      { id: "2-8", arabic: "كَأَنَّ", persian: "گویا" },
      { id: "2-9", arabic: "بِطاقَةُ الهُوِيَّة", persian: "کارت شناسایی" },
      { id: "2-10", arabic: "تَخْفيض", persian: "تخفیف" },
      { id: "2-11", arabic: "تَعَلُّم", persian: "یاد گرفتن" },
      { id: "2-12", arabic: "كُلّ", persian: "همه" },
      { id: "2-13", arabic: "جَعَلَ", persian: "قرار داد" },
      { id: "2-14", arabic: "حَدّاد", persian: "آهنگر" },
      { id: "2-15", arabic: "مُبين", persian: "آشکار" },
      { id: "2-16", arabic: "حَسَناً", persian: "بسیار خوب" },
      { id: "2-17", arabic: "مُحَدَّد", persian: "معین" },
      { id: "2-18", arabic: "حَيّاكَ اللهُ", persian: "زنده باشی" },
      { id: "2-19", arabic: "مِصْعَد", persian: "آسانسور" },
      { id: "2-20", arabic: "الخامِس", persian: "پنجم" },
      { id: "2-21", arabic: "مُنَظَّمَة", persian: "سازمان" },
      { id: "2-22", arabic: "نانو", persian: "نانو" },
      { id: "2-23", arabic: "خَبّاز", persian: "نانوا" },
      { id: "2-24", arabic: "مُنَظَّمَةُ الأُمَمِ المُتَّحِدَة", persian: "سازمان ملل متحد" },
      { id: "2-25", arabic: "ذاتُ ثَلاثَةِ أَسِرَّة", persian: "دارای سه تخت" },
      { id: "2-26", arabic: "ساعَدَكَ اللهُ", persian: "خدا کمکت کند" },
      { id: "2-27", arabic: "مَمْزوج", persian: "آمیخته" },
      { id: "2-28", arabic: "طابِق", persian: "طبقه" },
      { id: "2-29", arabic: "مِنْ قِبَل", persian: "از طرف" },
      { id: "2-30", arabic: "طَعام", persian: "غذا" },
      { id: "2-31", arabic: "نُريد", persian: "می‌خواهیم" },
      { id: "2-32", arabic: "يُريد", persian: "می‌خواهد" }
    ]
  },
  {
    id: 3,
    title: "درس سوم - شغل تو در آینده",
    titleArabic: "الدَّرْسُ الثّالِث - مِهْنَتُكَ فِي المُسْتَقْبَل",
    flashcards: [
      { id: "3-1", arabic: "الرِّياضَة", persian: "ورزش" },
      { id: "3-2", arabic: "سَيّارَةُ الأُجْرَة", persian: "تاکسی" },
      { id: "3-3", arabic: "رَسَمَ", persian: "رسم کرد" },
      { id: "3-4", arabic: "يَرْسِمُ", persian: "رسم می‌کند" },
      { id: "3-5", arabic: "مِهْنَة", persian: "شغل" },
      { id: "3-6", arabic: "وَصَلَ", persian: "رسید" },
      { id: "3-7", arabic: "خُبْز", persian: "نان" },
      { id: "3-8", arabic: "مُسْتَقْبَل", persian: "آینده" }
    ]
  },
  {
    id: 4,
    title: "درس چهارم - تجربه جدید",
    titleArabic: "الدَّرْسُ الرّابِع - التَّجْرِبَةُ الجَديدَة",
    flashcards: [
      { id: "4-1", arabic: "ابْنُ آدَم", persian: "آدمیزاد" },
      { id: "4-2", arabic: "غَضَب", persian: "خشم" },
      { id: "4-3", arabic: "يَكْذِبُ", persian: "دروغ می‌گوید" },
      { id: "4-4", arabic: "أُمَّة", persian: "ملت" },
      { id: "4-5", arabic: "كَذٰلِكَ", persian: "همچنین" },
      { id: "4-6", arabic: "يَشْكُرُ", persian: "تشکر می‌کند" },
      { id: "4-7", arabic: "مُحِبّون", persian: "دوستداران" },
      { id: "4-8", arabic: "يَصْدُقُ", persian: "راست می‌گوید" },
      { id: "4-9", arabic: "مُخْتَبَر", persian: "آزمایشگاه" },
      { id: "4-10", arabic: "ضِيافَة", persian: "مهمانی" },
      { id: "4-11", arabic: "مُضيف", persian: "مهمان دار" },
      { id: "4-12", arabic: "طوبىٰ لِـ", persian: "خوشا به حال" },
      { id: "4-13", arabic: "نَفْس", persian: "خود" },
      { id: "4-14", arabic: "يَنْفَعُ", persian: "سود می‌رساند" },
      { id: "4-15", arabic: "نَفَعَ", persian: "سود رساند" },
      { id: "4-16", arabic: "يَعيشُ", persian: "زندگی می‌کند" },
      { id: "4-17", arabic: "عاشَ", persian: "زندگی کرد" },
      { id: "4-18", arabic: "يَغْرَقُ", persian: "غرق می‌شود" },
      { id: "4-19", arabic: "قَرْيَة", persian: "روستا" },
      { id: "4-20", arabic: "حَقيبَة", persian: "کیف" },
      { id: "4-21", arabic: "مُجاوِرَة", persian: "مجاور" },
      { id: "4-22", arabic: "نَهْر", persian: "رودخانه" },
      { id: "4-23", arabic: "بَقَرَة", persian: "گاو" },
      { id: "4-24", arabic: "عُبور", persian: "عبور" },
      { id: "4-25", arabic: "عَميق", persian: "عمیق" },
      { id: "4-26", arabic: "يَخافُ", persian: "می‌ترسد" },
      { id: "4-27", arabic: "تَجْرِبَة", persian: "تجربه" },
      { id: "4-28", arabic: "حَكيم", persian: "دانا" }
    ]
  },
  {
    id: 5,
    title: "درس پنجم - دوستی",
    titleArabic: "الدَّرْسُ الخامِس - الصَّداقَة",
    flashcards: [
      { id: "5-1", arabic: "صَديق", persian: "دوست" },
      { id: "5-2", arabic: "صَداقَة", persian: "دوستی" },
      { id: "5-3", arabic: "أَخْلاق", persian: "اخلاق" },
      { id: "5-4", arabic: "حُسْنُ الخُلُق", persian: "خوش اخلاقی" },
      { id: "5-5", arabic: "صِدْق", persian: "راستی" },
      { id: "5-6", arabic: "كَذِب", persian: "دروغ" },
      { id: "5-7", arabic: "أَمانَة", persian: "امانت" },
      { id: "5-8", arabic: "خِيانَة", persian: "خیانت" },
      { id: "5-9", arabic: "وَفاء", persian: "وفاداری" },
      { id: "5-10", arabic: "غَدْر", persian: "نامردی" }
    ]
  },
  {
    id: 6,
    title: "درس ششم - در سفر",
    titleArabic: "الدَّرْسُ السّادِس - فِي السَّفَر",
    flashcards: [
      { id: "6-1", arabic: "سَفَر", persian: "سفر" },
      { id: "6-2", arabic: "سافَرَ", persian: "سفر کرد" },
      { id: "6-3", arabic: "يُسافِرُ", persian: "سفر می‌کند" },
      { id: "6-4", arabic: "مَطار", persian: "فرودگاه" },
      { id: "6-5", arabic: "طائِرَة", persian: "هواپیما" },
      { id: "6-6", arabic: "قِطار", persian: "قطار" },
      { id: "6-7", arabic: "مَحَطَّة", persian: "ایستگاه" },
      { id: "6-8", arabic: "تَذْكِرَة", persian: "بلیط" },
      { id: "6-9", arabic: "حَجَزَ", persian: "رزرو کرد" },
      { id: "6-10", arabic: "فُنْدُق", persian: "هتل" }
    ]
  },
  {
    id: 7,
    title: "درس هفتم - زمین خدا وسیع است",
    titleArabic: "الدَّرْسُ السّابِع - ﴿أَرْضُ اللَّهِ واسِعَةٌ﴾",
    flashcards: [
      { id: "7-1", arabic: "واسِع", persian: "وسیع" },
      { id: "7-2", arabic: "أَرْض", persian: "زمین" },
      { id: "7-3", arabic: "هِجْرَة", persian: "هجرت" },
      { id: "7-4", arabic: "هاجَرَ", persian: "هجرت کرد" },
      { id: "7-5", arabic: "يُهاجِرُ", persian: "هجرت می‌کند" },
      { id: "7-6", arabic: "مُهاجِر", persian: "مهاجر" },
      { id: "7-7", arabic: "بَلَد", persian: "شهر" },
      { id: "7-8", arabic: "وَطَن", persian: "وطن" },
      { id: "7-9", arabic: "غُرْبَة", persian: "غربت" },
      { id: "7-10", arabic: "حَنين", persian: "حسرت، دلتنگی" }
    ]
  },
  {
    id: 8,
    title: "درس هشتم - اعتماد به نفس",
    titleArabic: "الدَّرْسُ الثّامِن - الاعْتِمادُ عَلَى النَّفْس",
    flashcards: [
      { id: "8-1", arabic: "اِعْتِماد", persian: "اعتماد" },
      { id: "8-2", arabic: "اِعْتَمَدَ", persian: "اعتماد کرد" },
      { id: "8-3", arabic: "يَعْتَمِدُ", persian: "اعتماد می‌کند" },
      { id: "8-4", arabic: "نَفْس", persian: "نفس، خود" },
      { id: "8-5", arabic: "ثِقَة", persian: "اطمینان" },
      { id: "8-6", arabic: "قُدْرَة", persian: "توانایی" },
      { id: "8-7", arabic: "قادِر", persian: "قادر" },
      { id: "8-8", arabic: "يَسْتَطيعُ", persian: "می‌تواند" },
      { id: "8-9", arabic: "قَوِيّ", persian: "قوی" },
      { id: "8-10", arabic: "ضَعيف", persian: "ضعیف" }
    ]
  },
  {
    id: 9,
    title: "درس نهم - سفر علمی",
    titleArabic: "الدَّرْسُ التّاسِع - السَّفْرَةُ العِلْمِيَّة",
    flashcards: [
      { id: "9-1", arabic: "سَفْرَة", persian: "سفر" },
      { id: "9-2", arabic: "عِلْمِيَّة", persian: "علمی" },
      { id: "9-3", arabic: "زِيارَة", persian: "بازدید" },
      { id: "9-4", arabic: "زارَ", persian: "بازدید کرد" },
      { id: "9-5", arabic: "يَزورُ", persian: "بازدید می‌کند" },
      { id: "9-6", arabic: "مَتْحَف", persian: "موزه" },
      { id: "9-7", arabic: "مَكْتَبَة", persian: "کتابخانه" },
      { id: "9-8", arabic: "جامِعَة", persian: "دانشگاه" },
      { id: "9-9", arabic: "عِلْم", persian: "علم" },
      { id: "9-10", arabic: "مَعْرِفَة", persian: "معرفت، دانش" }
    ]
  },
  {
    id: 10,
    title: "درس دهم - مراقدهای دینی",
    titleArabic: "الدَّرْسُ العاشِر - المَراقِدُ الدّينِيَّة",
    flashcards: [
      { id: "10-1", arabic: "مَرْقَد", persian: "مرقد، آرامگاه" },
      { id: "10-2", arabic: "مَراقِد", persian: "مراقد" },
      { id: "10-3", arabic: "دينِيَّة", persian: "دینی" },
      { id: "10-4", arabic: "قَبْر", persian: "قبر" },
      { id: "10-5", arabic: "مَقْبَرَة", persian: "قبرستان" },
      { id: "10-6", arabic: "زِيارَة", persian: "زیارت" },
      { id: "10-7", arabic: "حَرَم", persian: "حرم" },
      { id: "10-8", arabic: "مَسْجِد", persian: "مسجد" },
      { id: "10-9", arabic: "مَدْفون", persian: "دفن شده" },
      { id: "10-10", arabic: "نَبِيّ", persian: "پیامبر" }
    ]
  }
];
