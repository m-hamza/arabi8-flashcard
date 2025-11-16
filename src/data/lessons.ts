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
    title: "مرور دروس کلاس هفتم",
    titleArabic: "مُراجَعَةُ دُروسِ الصَّفِّ السّابِع",
    flashcards: [
      { id: "1-1", arabic: "اَلسَّلامُ عَلَيْكَ", persian: "سلام بر تو" },
      { id: "1-2", arabic: "كَيْفَ حالُكَ؟", persian: "حال شما چطور است؟" },
      { id: "1-3", arabic: "ما اسْمُكَ؟", persian: "نام شما چیست؟" },
      { id: "1-4", arabic: "أَيْنَ أَنْتَ؟", persian: "کجا هستی؟" },
      { id: "1-5", arabic: "مِنْ أَيْنَ أَنْتَ؟", persian: "اهل کجا هستی؟" },
      { id: "1-6", arabic: "بِخَيْرٍ", persian: "خوبم" },
      { id: "1-7", arabic: "صَباحُ الْخَيْر", persian: "صبح بخیر" },
      { id: "1-8", arabic: "مَساءُ الْخَيْر", persian: "عصر بخیر" },
    ]
  },
  {
    id: 2,
    title: "اهمیت زبان عربی",
    titleArabic: "أَهَمِّيَّةُ اللُّغَةِ الْعَرَبِيَّة",
    flashcards: [
      { id: "2-1", arabic: "اَللُّغَةُ", persian: "زبان" },
      { id: "2-2", arabic: "عَرَبِيّ", persian: "عربی" },
      { id: "2-3", arabic: "أَهَمِّيَّة", persian: "اهمیت" },
      { id: "2-4", arabic: "الْقُرْآن", persian: "قرآن" },
      { id: "2-5", arabic: "يَفْهَمُ", persian: "فهمیدن" },
      { id: "2-6", arabic: "يَقْرَأُ", persian: "خواندن" },
      { id: "2-7", arabic: "يَكْتُبُ", persian: "نوشتن" },
      { id: "2-8", arabic: "يَتَعَلَّمُ", persian: "یاد گرفتن" },
      { id: "2-9", arabic: "الْعِلْمُ", persian: "علم، دانش" },
      { id: "2-10", arabic: "الْكِتابُ", persian: "کتاب" },
    ]
  },
  {
    id: 3,
    title: "شغل تو در آینده",
    titleArabic: "مِهْنَتُكَ فِي الْمُسْتَقْبَل",
    flashcards: [
      { id: "3-1", arabic: "مِهْنَة", persian: "شغل" },
      { id: "3-2", arabic: "مُسْتَقْبَل", persian: "آینده" },
      { id: "3-3", arabic: "سَوْفَ أَصيرُ", persian: "خواهم شد" },
      { id: "3-4", arabic: "طِبُّ الْعُيون", persian: "چشم‌پزشکی" },
      { id: "3-5", arabic: "عَمّ", persian: "عمو" },
      { id: "3-6", arabic: "عَنْ", persian: "دربارۀ، از" },
      { id: "3-7", arabic: "آخَرين", persian: "دیگران" },
      { id: "3-8", arabic: "أَحَبَّ", persian: "دوست داشت" },
      { id: "3-9", arabic: "أُحِبُّ", persian: "دوست دارم" },
      { id: "3-10", arabic: "تُحِبُّ", persian: "دوست داری" },
      { id: "3-11", arabic: "أُريدُ أَنْ أَذْهَبَ", persian: "می‌خواهم که بروم" },
      { id: "3-12", arabic: "عَيْن", persian: "چشم" },
      { id: "3-13", arabic: "أَصْحابُ الْمِهَن", persian: "صاحبان شغل‌ها" },
      { id: "3-14", arabic: "أَنْصَحُكَ", persian: "نصیحت می‌کنم تو را" },
      { id: "3-15", arabic: "فَحَصَ", persian: "معاینه کرد" },
      { id: "3-16", arabic: "بِلاد", persian: "کشور، شهرها" },
      { id: "3-17", arabic: "بَيْع", persian: "فروش" },
      { id: "3-18", arabic: "لا أَدْري", persian: "نمی‌دانم" },
      { id: "3-19", arabic: "مَتى", persian: "چه وقت" },
      { id: "3-20", arabic: "تَقَدُّم", persian: "پیشرفت" },
      { id: "3-21", arabic: "مَرْضى", persian: "بیماران" },
      { id: "3-22", arabic: "تَهْيِئَة", persian: "تهیه" },
      { id: "3-23", arabic: "خال", persian: "دایی" },
      { id: "3-24", arabic: "خُبْز", persian: "نان" },
      { id: "3-25", arabic: "رِياضَة", persian: "ورزش" },
      { id: "3-26", arabic: "سَيّارَةُ الْأُجْرَة", persian: "تاکسی" },
      { id: "3-27", arabic: "نَصِلُ", persian: "می‌رسیم" },
    ]
  },
  {
    id: 4,
    title: "تجربه جدید",
    titleArabic: "اَلتَّجْرِبَةُ الْجَديدَة",
    flashcards: [
      { id: "4-1", arabic: "تَجْرِبَة", persian: "تجربه" },
      { id: "4-2", arabic: "جَديد", persian: "جدید" },
      { id: "4-3", arabic: "سافَرَ", persian: "مسافرت کرد" },
      { id: "4-4", arabic: "زارَ", persian: "دیدن کرد" },
      { id: "4-5", arabic: "رَأى", persian: "دید" },
      { id: "4-6", arabic: "مَتْحَف", persian: "موزه" },
      { id: "4-7", arabic: "جامِعَة", persian: "دانشگاه" },
      { id: "4-8", arabic: "مَكْتَبَة", persian: "کتابخانه" },
    ]
  },
  {
    id: 5,
    title: "صدقه",
    titleArabic: "اَلصَّدَقَة",
    flashcards: [
      { id: "5-1", arabic: "صَدَقَة", persian: "صدقه" },
      { id: "5-2", arabic: "فَقير", persian: "فقیر" },
      { id: "5-3", arabic: "مِسْكين", persian: "مسکین، بینوا" },
      { id: "5-4", arabic: "يُساعِدُ", persian: "کمک می‌کند" },
      { id: "5-5", arabic: "يُعْطي", persian: "می‌دهد" },
      { id: "5-6", arabic: "مال", persian: "مال" },
      { id: "5-7", arabic: "طَعام", persian: "غذا" },
      { id: "5-8", arabic: "كِساء", persian: "لباس" },
    ]
  },
  {
    id: 6,
    title: "در سفر",
    titleArabic: "فِي السَّفَر",
    flashcards: [
      { id: "6-1", arabic: "سَفَر", persian: "سفر" },
      { id: "6-2", arabic: "مَطار", persian: "فرودگاه" },
      { id: "6-3", arabic: "طائِرَة", persian: "هواپیما" },
      { id: "6-4", arabic: "فُنْدُق", persian: "هتل" },
      { id: "6-5", arabic: "غُرْفَة", persian: "اتاق" },
      { id: "6-6", arabic: "حَجَزَ", persian: "رزرو کرد" },
      { id: "6-7", arabic: "وَصَلَ", persian: "رسید" },
      { id: "6-8", arabic: "رَجَعَ", persian: "برگشت" },
    ]
  },
  {
    id: 7,
    title: "زمین خدا وسیع است",
    titleArabic: "أَرْضُ اللهِ واسِعَة",
    flashcards: [
      { id: "7-1", arabic: "أَرْض", persian: "زمین" },
      { id: "7-2", arabic: "واسِع", persian: "وسیع، گسترده" },
      { id: "7-3", arabic: "سَماء", persian: "آسمان" },
      { id: "7-4", arabic: "بَحْر", persian: "دریا" },
      { id: "7-5", arabic: "جَبَل", persian: "کوه" },
      { id: "7-6", arabic: "نَهْر", persian: "رودخانه" },
      { id: "7-7", arabic: "شَجَرَة", persian: "درخت" },
      { id: "7-8", arabic: "زَهْرَة", persian: "گل" },
    ]
  },
  {
    id: 8,
    title: "اعتماد بر نفس",
    titleArabic: "اَلْاِعْتِمادُ عَلَى النَّفْس",
    flashcards: [
      { id: "8-1", arabic: "اِعْتِماد", persian: "اعتماد" },
      { id: "8-2", arabic: "نَفْس", persian: "نفس" },
      { id: "8-3", arabic: "قَوِيّ", persian: "قوی" },
      { id: "8-4", arabic: "ضَعيف", persian: "ضعیف" },
      { id: "8-5", arabic: "نَجَحَ", persian: "موفق شد" },
      { id: "8-6", arabic: "فَشِلَ", persian: "شکست خورد" },
      { id: "8-7", arabic: "حاوَلَ", persian: "تلاش کرد" },
      { id: "8-8", arabic: "اِسْتَطاعَ", persian: "توانست" },
    ]
  },
  {
    id: 9,
    title: "سفر علمی",
    titleArabic: "اَلسَّفَرَةُ الْعِلْمِيَّة",
    flashcards: [
      { id: "9-1", arabic: "سَفَرَة", persian: "سفر" },
      { id: "9-2", arabic: "عِلْمِيّ", persian: "علمی" },
      { id: "9-3", arabic: "دَرَسَ", persian: "درس خواند" },
      { id: "9-4", arabic: "بَحَثَ", persian: "تحقیق کرد" },
      { id: "9-5", arabic: "اِكْتَشَفَ", persian: "کشف کرد" },
      { id: "9-6", arabic: "مُخْتَبَر", persian: "آزمایشگاه" },
      { id: "9-7", arabic: "عالِم", persian: "دانشمند" },
      { id: "9-8", arabic: "بَحْث", persian: "تحقیق، پژوهش" },
    ]
  }
];
