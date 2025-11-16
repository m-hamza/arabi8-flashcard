import { Lesson } from "@/data/lessons";
import { Progress } from "@/components/ui/progress";
import { BookOpen, CheckCircle2 } from "lucide-react";

interface LessonCardProps {
  lesson: Lesson;
  progress: number;
  onSelect: () => void;
}

export const LessonCard = ({ lesson, progress, onSelect }: LessonCardProps) => {
  const isCompleted = progress === 100;

  return (
    <button
      onClick={onSelect}
      className="w-full bg-card hover:bg-card/80 rounded-xl p-6 text-right transition-all hover:shadow-card border border-border group"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            isCompleted ? 'bg-gradient-success' : 'bg-gradient-primary'
          }`}>
            {isCompleted ? (
              <CheckCircle2 className="w-6 h-6 text-white" />
            ) : (
              <BookOpen className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-muted-foreground">درس {lesson.id}</span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-1" dir="rtl">
            {lesson.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3" dir="rtl">
            {lesson.titleArabic}
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {lesson.flashcards.length} کلمه
              </span>
              <span className="font-medium text-primary">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>
    </button>
  );
};
