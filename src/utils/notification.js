import lang from 'i18next';
import AudioApi from './lib/AudioApi';
import FlashTitle from './lib/FlashTitle';

export const initNotification = () => {
  const initializeNewWebAudioContext = AudioApi();

  const context = initializeNewWebAudioContext();

  context.loadSound('/static/sound/notifi.mp3', 'alert');

  const purchaseSound = new Audio('/static/sound/notifi.mp3');

  return {
    push: ({ tid, tvalues, message }) => {
      try {
        context.playSound('purchase');
      } catch {
        purchaseSound.play();
      }

      FlashTitle(message || lang.t(tid, tvalues));
    },
  };
};
