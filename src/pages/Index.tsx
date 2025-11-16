import { useState } from "react";
import { lessons } from "@/data/lessons";
import { LessonCard } from "@/components/LessonCard";
import { FlashCard } from "@/components/FlashCard";
import { useFlashcardProgress } from "@/hooks/useFlashcardProgress";
import { Button } from "@/components/ui/button";
import { ArrowRight, RotateCcw, BookOpenCheck } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const { progress, markCard, getLessonProgress, resetLesson, resetAll } = useFlashcardProgress();

  const handleSelectLesson = (lessonId: number) => {
    setSelectedLesson(lessonId);
    setCurrentCardIndex(0);
  };

  const handleBackToLessons = () => {
    setSelectedLesson(null);
    setCurrentCardIndex(0);
  };

  const handleMarkCard = (known: boolean) => {
    if (selectedLesson === null) return;

    const lesson = lessons.find((l) => l.id === selectedLesson);
    if (!lesson) return;

    const currentCard = lesson.flashcards[currentCardIndex];
    markCard(selectedLesson, currentCard.id, known);

    if (known) {
      toast.success("عالی! یک کلمه دیگر یاد گرفتید! 🎉");
    }

    // Move to next card
    if (currentCardIndex < lesson.flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      const progressPercent = getLessonProgress(selectedLesson, lesson.flashcards.length);
      if (progressPercent === 100) {
        toast.success("تبریک! این درس را کامل کردید! 🎊");
      }
      setCurrentCardIndex(0);
    }
  };

  const handleResetLesson = () => {
    if (selectedLesson !== null) {
      resetLesson(selectedLesson);
      setCurrentCardIndex(0);
      toast.info("پیشرفت این درس بازنشانی شد");
    }
  };

  const selectedLessonData = selectedLesson !== null 
    ? lessons.find((l) => l.id === selectedLesson)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-primary text-white py-8 px-4 shadow-card">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-right">
              <h1 className="text-3xl font-bold mb-2" dir="rtl">
                فلش کارت لغات عربی
              </h1>
              <p className="text-white/80" dir="rtl">
                کتاب عربی پایه هشتم
              </p>
            </div>
            <BookOpenCheck className="w-12 h-12 text-white/80" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {selectedLesson === null ? (
          // Lessons List View
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold" dir="rtl">
                انتخاب درس
              </h2>
              <Button
                variant="outline"
                size="sm"
                onClick={resetAll}
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                بازنشانی همه
              </Button>
            </div>

            <div className="grid gap-4">
              {lessons.map((lesson) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  progress={getLessonProgress(lesson.id, lesson.flashcards.length)}
                  onSelect={() => handleSelectLesson(lesson.id)}
                />
              ))}
            </div>
          </div>
        ) : (
          // Flashcard View
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Button
                variant="outline"
                onClick={handleBackToLessons}
                className="gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                بازگشت به لیست دروس
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetLesson}
                className="gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                بازنشانی این درس
              </Button>
            </div>

            {selectedLessonData && (
              <>
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2" dir="rtl">
                    {selectedLessonData.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-4" dir="rtl">
                    {selectedLessonData.titleArabic}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span>
                      کارت {currentCardIndex + 1} از {selectedLessonData.flashcards.length}
                    </span>
                    <span>•</span>
                    <span>
                      پیشرفت: {Math.round(getLessonProgress(selectedLesson, selectedLessonData.flashcards.length))}%
                    </span>
                  </div>
                </div>

                <FlashCard
                  flashcard={selectedLessonData.flashcards[currentCardIndex]}
                  onMark={handleMarkCard}
                />

                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    disabled={currentCardIndex === 0}
                    onClick={() => setCurrentCardIndex(Math.max(0, currentCardIndex - 1))}
                  >
                    کارت قبلی
                  </Button>
                  <Button
                    variant="outline"
                    disabled={currentCardIndex === selectedLessonData.flashcards.length - 1}
                    onClick={() => setCurrentCardIndex(Math.min(selectedLessonData.flashcards.length - 1, currentCardIndex + 1))}
                  >
                    کارت بعدی
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
