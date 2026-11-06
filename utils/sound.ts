export const playClickSound = () => {
  try {
    // A short premium Apple-style UI pop sound
    const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    audio.volume = 0.3; // Keeps it soft and premium
    audio.play().catch(() => {
      // Ignore errors if browser blocks autoplay
    });
  } catch (e) {
    // Ignore errors
  }
};
