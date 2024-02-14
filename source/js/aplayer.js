
!(function() {
    var oldLoadAp = window.onload;
    window.onload = function () {
      oldLoadAp && oldLoadAp();
  
      new APlayer({
        container: document.getElementById('aplayer'),
        fixed: true,
        autoplay: false,
        loop: 'all',
        order: 'random',
        theme: '#b7daff',
        preload: 'none',
        audio: [
          {
            name: 'Flower Dance',
            artist: 'DJ OKAWARI',
            url: '/songs/DJ OKAWARI - Flower Dance.mp3',
            cover: '/img/cover.jpg',
            lrc: '/lrc/DJ OKAWARI - Flower Dance.lrc'
          },
          {
            name: 'Luv Letter',
            artist: 'DJ OKAWARI',
            url: '/songs/DJ OKAWARI - Luv Letter (情书).mp3',
            cover: '/img/Luv Letter.jpg',
            lrc: '/lrc/DJ OKAWARI - Luv Letter (情书).lrc'
          }
        ]
      });
    }
  })();