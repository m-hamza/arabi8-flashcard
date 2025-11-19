export const speakArabicText = (text: string) => {
  if (!('speechSynthesis' in window)) {
    console.error('Speech synthesis not supported in this browser');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA'; // Arabic (Saudi Arabia)
  utterance.rate = 0.8; // Slightly slower for learning
  utterance.pitch = 1;
  utterance.volume = 1;

  // Try to find an Arabic voice
  const voices = window.speechSynthesis.getVoices();
  const arabicVoice = voices.find(voice => 
    voice.lang.startsWith('ar') || voice.lang.includes('ar')
  );
  
  if (arabicVoice) {
    utterance.voice = arabicVoice;
  }

  window.speechSynthesis.speak(utterance);
};

// Load voices when available
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
