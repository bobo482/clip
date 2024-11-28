
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
        lrcType: 3,
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
          },
          {
            name: '溯（钢琴版）',
            artist: '柳轻颂',
            url: 'http://music.163.com/song/media/outer/url?id=1811118434.mp3',
            cover: 'http://p1.music.126.net/qX7knUIlpmbJ34UBzCCS6w==/109951164802366812.jpg?param=130y130',
            lrc: '[00:01.000] 纯音乐，请欣赏'
          }
        ]
      });
    }
  })();
