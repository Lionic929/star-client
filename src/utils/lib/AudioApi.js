export default () => {
  const isSafari = navigator.userAgent.indexOf('Safari') != -1;
  const isIe = navigator.userAgent.indexOf('MSIE') != -1;
  const isFireFox = navigator.userAgent.indexOf('Firefox') != -1;

  if (typeof webkitAudioContext == 'undefined' && typeof mozAudioContext == 'undefined') {
    window.webkitAudioContext = function() {
      throw 'Web Audio API not supported in this browser';
    };
  }

  function initializeNewWebAudioContext() {
    return initializeNewWebAudioContext(false);
  }

  function initializeNewWebAudioContext(enableIe) {
    let webContext = null;
    try {
      if (typeof mozAudioContext != 'undefined') {
        webContext = new mozAudioContext();
      } else {
        webContext = new webkitAudioContext();
      }
    } catch (e) {
      if (isIe && !enableIe) {
        disableSoundFallback();
      }

      webContext = new fallbackAudioContext();
    }
    return webContext;
  }

  function disableSoundFallback() {
    if (isIe) {
      throw new Error(
        'Relevant audio is being disabled for your browser, probably because your browser (IE) is not capable of playing back sound at a reasonable latency.  \n\nEven though you are using Microsoft Windows as an Operating system, you are still able to access the web the way the rest of the world can by downloading an alternative browser.',
      );
    }

    fallbackAudioContext.prototype.playSound = function(strBufferName) {
      return;
    };
  }

  webkitAudioContext.prototype.loadSound = function(url, strNameOfSoundBufferconstiable) {
    const request = null;
    if (url instanceof Array) {
      url = webkitAudioContext.orderUrl(url);
      this.prepareRequest(url[0], strNameOfSoundBufferconstiable);
      for (const i = 1; i < url.length; i++) {
        this.prepareFallbackRequestForSafari(url[i], strNameOfSoundBufferconstiable);
      }
    } else {
      this.prepareRequest(url, strNameOfSoundBufferconstiable);
    }
  };

  webkitAudioContext.orderUrl = function(url) {
    if (url[0].indexOf('.mp3') == -1) {
      return url;
    }
    return [url[1], url[0]];
  };

  webkitAudioContext.prototype.prepareRequest = function(url, strNameOfSoundBufferconstiable) {
    const webContext = this;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      context.decodeAudioData(
        request.response,
        function(buffer) {
          context.buffers[strNameOfSoundBufferconstiable] = buffer;
        },
        onError,
      );
    };
    request.send();
  };

  webkitAudioContext.prototype.prepareFallbackRequestForSafari = function(url, strNameOfSoundBufferconstiable) {
    const webContext = this;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      context.decodeAudioData(
        request.response,
        function(buffer) {
          context.fallbackBuffers[strNameOfSoundBufferconstiable] = buffer;
        },
        onError,
      );
    };
    request.send();
  };

  webkitAudioContext.prototype.loadFallbackSound = function(url, strNameOfSoundBufferconstiable) {
    const webContext = this;
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      context.decodeAudioData(
        request.response,
        function(buffer) {
          context.fallbackBuffers[strNameOfSoundBufferconstiable] = buffer;
        },
        onError,
      );
    };
    request.send();
  };

  function onError() {
    throw new Error(
      "something suboptimal happened while attempting to decode some audioData.  \nYou're probably using Safari, and Apple has some kind of a shady plan going on to stop the .ogg format from easing the development burden on the web.  Perhaps setting a fallback audio file (an mp3) will function properly after this first attempt to decode audio will work.",
    );
  }

  webkitAudioContext.prototype.playSound = function(strBuffer) {
    const webContext = this;
    buffer = this.buffers[strBuffer]; // get the audio buffer by it's name
    if (navigator.vendor.indexOf('Apple') != -1) {
      buffer = this.fallbackBuffers[strBuffer]; // use the fallbackBuffer if the user is trying to support Safari
    }

    const source = context.createBufferSource(); // creates a sound source
    source.buffer = buffer; // Give the Source some PCM data to be played
    source.connect(context.destination); // connect the audio source the speakers
    source.noteOn(0); // play the audio source zero seconds from now
  };

  // We need a place to store our audio buffers.
  // May as well pin them here, directly to the context
  webkitAudioContext.prototype.buffers = {};

  // Specially for Safari, use this workaround to create a good experience for
  // users who wound up using Safari today.
  webkitAudioContext.prototype.fallbackBuffers = {};

  // The fallback context is used on browsers that don't use webkitAudioContext.
  // In the case of a fallback, html5 audio will be used instead
  function fallbackAudioContext() {
    this.buffers = {};
  }

  function fallbackAudioEntity(url) {
    this.audioElement = new Audio(url); // Place the audio element here
    //this.audioElement = document.createElement('audio');   // oh my god... Safari 5 doesn't even support Audio tags in the first place...
    //this.audioElement.setAttribute('src', url);

    this.tracks = {}; // .play() multiple audio elements simultaniously in this tracks collection.  It's gc friendly
    this.audioBufferIndex = 0; // these help us keep track of the new Audio() elements we create so
    this.maxSoundsAtOnce = 32; // they garbage collect a tiny bit easier
  }

  fallbackAudioEntity.prototype.playNew = function() {
    const i = this.audioBufferIndex;

    if (typeof this.tracks[i] != 'undefined' && !isFireFox) this.tracks[i].src = ''; // minimize memory usage... and smoothness too???
    this.tracks[i] = this.audioElement.cloneNode(true);
    if (isIe) {
      this.tracks[i].src = 'audio/beep.mp3';
    } //  lol, IE9s performance is ridiculous, what a waste of time
    this.tracks[i].play();

    // this stuff is done to prevent "memory leaking" in browsers, which causes a
    // stall when it does it's garbage collection after spawning off too many Audio objects
    this.audioBufferIndex++;
    if (this.audioBufferIndex >= this.maxSoundsAtOnce) this.audioBufferIndex = 0;
  };

  fallbackAudioContext.prototype.loadSound = function(url, strNameOfSoundBufferconstiable) {
    if (url instanceof Array) {
      url = webkitAudioContext.orderUrl(url);
      if (isSafari || isIe) {
        url[0] = url[1]; // make the mp3 the one chosen... since this isn't firefox...
      }

      this.buffers[strNameOfSoundBufferconstiable] = new fallbackAudioEntity(url[0]);
    } else {
      this.buffers[strNameOfSoundBufferconstiable] = new fallbackAudioEntity(url);
    }
  };

  // this was needed due to Safari.
  fallbackAudioContext.prototype.loadFallbackSound = function(url, strNameOfSoundBufferconstiable) {
    return;
  };

  fallbackAudioContext.prototype.playSound = function(strBufferName) {
    this.buffers[strBufferName].playNew();
  };

  return initializeNewWebAudioContext;
};
