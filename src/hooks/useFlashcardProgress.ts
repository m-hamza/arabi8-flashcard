import { useState, useEffect } from "react";

interface LessonProgress {
  [lessonId: number]: {
    [cardId: string]: boolean;
  };
}

const STORAGE_KEY = "arabic-flashcard-progress";

export const useFlashcardProgress = () => {
  const [progress, setProgress] = useState<LessonProgress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markCard = (lessonId: number, cardId: string, known: boolean) => {
    setProgress((prev) => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId],
        [cardId]: known,
      },
    }));
  };

  const getLessonProgress = (lessonId: number, totalCards: number): number => {
    const lessonData = progress[lessonId] || {};
    const knownCards = Object.values(lessonData).filter(Boolean).length;
    return totalCards > 0 ? (knownCards / totalCards) * 100 : 0;
  };

  const resetLesson = (lessonId: number) => {
    setProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[lessonId];
      return newProgress;
    });
  };

  const resetAll = () => {
    setProgress({});
  };

  return {
    progress,
    markCard,
    getLessonProgress,
    resetLesson,
    resetAll,
  };
};
