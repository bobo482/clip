
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
            cover: '/img/cover.jpg'
          }
        ]
      });
    }
  })();