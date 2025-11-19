import { useState } from "react";
import { Volume2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Flashcard } from "@/data/lessons";
import { speakArabicText } from "@/utils/speechSynthesis";

interface FlashCardProps {
  flashcard: Flashcard;
  onMark: (known: boolean) => void;
}

export const FlashCard = ({ flashcard, onMark }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-full max-w-md mx-auto perspective-1000">
      <div
        className={cn(
          "relative w-full h-80 cursor-pointer transition-transform duration-700 preserve-3d",
          isFlipped && "rotate-y-180"
        )}
        onClick={handleFlip}
      >
        {/* Front - Arabic */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-gradient-card rounded-2xl p-8 flex flex-col items-center justify-center shadow-card hover:shadow-hover transition-shadow">
            <div className="text-sm font-medium text-white/80 mb-4">کلمه عربی</div>
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakArabicText(flashcard.arabic);
                }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm group"
                aria-label="تلفظ کلمه"
              >
                <Volume2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
              </button>
              <div className="text-5xl font-bold text-white text-center" dir="rtl">
                {flashcard.arabic}
              </div>
            </div>
            <div className="text-sm text-white/60">برای دیدن ترجمه کلیک کنید</div>
          </div>
        </div>

        {/* Back - Persian */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-gradient-success rounded-2xl p-8 flex flex-col items-center justify-center shadow-card hover:shadow-hover transition-shadow">
            <div className="text-sm font-medium text-white/80 mb-4">معنی فارسی</div>
            <div className="text-4xl font-bold text-white text-center mb-8" dir="rtl">
              {flashcard.persian}
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMark(false);
                  setIsFlipped(false);
                }}
                className="px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors backdrop-blur-sm"
              >
                یاد نگرفتم
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMark(true);
                  setIsFlipped(false);
                }}
                className="px-6 py-2 bg-white hover:bg-white/90 text-success rounded-lg transition-colors font-medium"
              >
                یاد گرفتم ✓
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
