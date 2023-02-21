    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

    const videos = $$('.content-video');
    const typing = $('.typing')
    const mainActons = $$('.content-action-item')
    const appWrap = $('.app_wrap')
    const listAction = $('.content-action')
    const rainBtn = $('.button-change-rain')
    const nightBtn = $('.change')
    const nightVideo = $('#nightVideo');
    const dayVideo = $('#dayVideo')
    const rainDay = $('#rainDayVideo')
    const rainNight = $('#rainNightVideo')
    const audioRain = $('.audio')
    const inputRain = $('.input-rain')
    const inputFontRain = $('.input-font-rain')
    const audioTraffic = $('.audioTraffic')
    const inputFontTraffic = $('.input-font-traffic')
    const inputTraffic = $('.input-traffic')
    const audioFire = $('.audioFire')
    const inputFontFire = $('.input-font-fire')
    const inputFire = $('.input-fire')
    const regimes = $$('.action-mood-regime-item')
    const backBtn = $('.back-btn')
    const nextBtn = $('.next-btn')
    const playBtn = $('.music-change')
    const mainMusic = $('.main-music')
    const mainVolume = $('.mainVolumn')
    const volumeFont = $('.input-Font-Main')
const app = {
    isplay: false,
    isNight: false,
    isRain: false,
    currentIndex : 0,
  song : [
      './asecct/main-music/chill1.mp3',
      './asecct/main-music/chill2.mp3',
      './asecct/main-music/chill3.mp3',
      './asecct/main-music/jazz1.mp3',
  ],
  backgroundVideo : {
      sunny :'./asecct/backgroud-video/BDR Day-Christmas ver 112521 (1).mp4',
      night: '/asecct/backgroud-video/BDR STARRY NIGHT - Christmas ver.mp4',
      rainSun: '/asecct/backgroud-video/BDR RAINY DAY - Christmas ver.mp4',
      rainNig: '/asecct/backgroud-video/BDR RAINY NIGHT - Christmas ver.mp4'
  },
  playCurrentSong : function(){
    mainMusic.src = `${this.song[this.currentIndex]}`
    // mainMusic.src = './asecct/main-music/chill1.mp3'
    mainMusic.play()
  },
  handlevent: function(){
      const _this = this;
      for(const video of videos){
        video.play();

          video.onended = function(){
              console.log('hết');
              video.play();
              
          }

      }
    // ---------tiếng gõ phím ------
    typing.volume = 0.2;
    audioRain.volume=0.5;
    // audioTraffic.play();
    // audioTraffic.volume = 0
    // audioFire.play();
    // audioFire.volume = 0
    // ------- main action
    for(const mainAction of mainActons){
        mainAction.onclick = function(){
            console.log('trúng')
            if($('.content-action-item.active')){
                $('.content-action-item.active').classList.remove('active')
            }
            mainAction.classList.add('active');
            appWrap.onclick = function(e){
                console.log('app')
            mainAction.classList.remove('active');
            }
            listAction.onclick = function(e){
               e.stopPropagation();
                console.log('trong cug')
            
    
            }
        }
    }
    for(const regime of regimes){
        regime.onclick = function(){
            if($('.action-mood-regime-item.active')){
                $('.action-mood-regime-item.active').classList.remove('active');
            }
            regime.classList.toggle('active')
        }
    }
    
    

    // ------butoon rain

    rainBtn.onclick = function(){
        _this.isRain = !_this.isRain;

        if(_this.isRain){
            if(_this.isNight){
                nightVideo.style.display = 'none'
                rainNight.style.display = 'block'
                audioRain.play()
               

            }else{
                dayVideo.style.display = 'none'
                rainDay.style.display = 'block'
                audioRain.play()


            }
            if(audioRain.volume == 0){
                inputRain.setAttribute('value',50)
                audioRain.volume = 0.5;
            }
            
        }else{
            if(_this.isNight){
                nightVideo.style.display = 'block'
                rainNight.style.display = 'none'
                audioRain.volume = 0;

            }else{
                dayVideo.style.display = 'block'
                rainDay.style.display = 'none'
                audioRain.volume = 0;


            }
        }
        
    }
    audioRain.onplay = function(){
        
        inputFontRain.value = 50;
        console.log('ako')

    }
    // audio rainDay.style.display = ''

   audioRain.onended = function() {
       audioRain.play();
   }
   audioTraffic.onended = function() {
    audioTraffic.play();
}
audioFire.onended = function() {
    audioFire.play();
}
// mainMusic.onended = function() {
//     mainMusic.play();
// }
    // -----night-btn

    nightBtn.onclick = function(){
        _this.isNight = !_this.isNight
        rainDay.style.display = 'none'
            rainNight.style.display = 'none'
        if(_this.isNight){
            if(_this.isRain){
            rainNight.style.display = 'block'
            dayVideo.style.display = 'none'
            }else{
                nightVideo.style.display = 'block'
                dayVideo.style.display = 'none'
            }
            // nightVideo.style.display = 'block'
            // dayVideo.style.display = 'none'
            // rainDay.style.display = 'none'
            // rainNight.style.display = 'none'
           
        }else{
            if(_this.isRain){
                rainDay.style.display = 'block'
                nightVideo.style.display = 'none'
                }else{
                    nightVideo.style.display = 'none'
                     dayVideo.style.display = 'block'
                }
           
        }
        nightBtn.classList.toggle('active');
    }

    //  input ranin
    inputFontRain.style.width = inputRain.value
    inputRain.onchange = function(e) {
        _this.isRain = true
        if(_this.isRain){
            if(_this.isNight){
                nightVideo.style.display = 'none'
                rainNight.style.display = 'block'
                audioRain.play();


            }else{
                dayVideo.style.display = 'none'
                rainDay.style.display = 'block'
                  audioRain.play();

            }
            
        }
        console.log('is Rain',_this.isRain)
        
        audioRain.play();

        console.log(e.target.value)
        audioRain.volume = e.target.value / 100;
        audioRain.onvolumechange = function (){
            inputRain.value = audioRain.volume *100
            inputFontRain.style.width = `${inputRain.value}%`

            
           
        }
        if(audioRain.volume == 0){
            _this.isRain = false;
            if(_this.isNight){
                nightVideo.style.display = 'block'
                rainNight.style.display = 'none'
                audioRain.play();


            }else{
                dayVideo.style.display = 'block'
                rainDay.style.display = 'none'
                  audioRain.play();

            }
        }

    }
    inputFontTraffic.style.width = inputTraffic.value
    inputTraffic.onchange = function(e) {
        audioTraffic.play();
        console.log(e.target.value)
        audioTraffic.volume = e.target.value / 100;
        audioTraffic.onvolumechange = function (){
            inputFontTraffic.style.width = `${inputTraffic.value}%`
           
        }
    }
    inputFontFire.style.width = inputFire.value
    inputFire.onchange = function(e) {
        audioFire.play()
        console.log(e.target.value)
        audioFire.volume = e.target.value / 100;
        audioFire.onvolumechange = function (){
            inputFontFire.style.width = `${inputFire.value}%`
           
        }
    }
// play btn
    playBtn.onclick = function(){
        _this.isplay = !_this.isplay
        playBtn.classList.toggle('active')
        console.log('is playing',_this.isplay)
        if(_this.isplay){
           mainMusic.play();
        }else{
            mainMusic.pause()
        }
    }
    
    // backBtn
    backBtn.onclick = function(){
        _this.currentIndex--;
        if(_this.currentIndex < 0 ){
            _this.currentIndex = _this.song.length -1
        }
        _this.playCurrentSong();
    }
    nextBtn.onclick = function(){
        _this.currentIndex++;
        if(_this.currentIndex > _this.song.length -1 ){
            _this.currentIndex = 0;
        }
        _this.playCurrentSong();
    }
    mainVolume.onchange = function(e){
      
     volumeFont.style.width = `${e.target.value}%`
     var x = mainVolume.value /100
        mainMusic.volume = x;
        console.log(x)
    }
  },
  start: function(){
      this.handlevent();

        //   console.log(audio.duration)
  }
}
app.start();


