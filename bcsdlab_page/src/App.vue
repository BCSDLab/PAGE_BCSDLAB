<template>
  <div id="app">
    <app-topnav></app-topnav>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Topnav from './components/SharedComponents/TopnavComponent/TopnavComponent'
  import Footer from './components/SharedComponents/FooterComponent/FooterComponent'

  export default {
    name: 'App',
    components: {
      'app-topnav': Topnav,
      'app-footer': Footer,
    }
  }
</script>

<style>
  .CONTENT__CONTAINER {
    width: 1160px;
    margin-left: auto;
    margin-right: auto;
  }

  #app {
    min-width: 1400px;
  }
   @font-face {
    font-family: "AppleSDGothicNeoB00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoB.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoB00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoB.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoB.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoB.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoEB00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoEB.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoEB.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoEB00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoEB.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoEB.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoH00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoH.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoH.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoH00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoH.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoH.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoL00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoL.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoL.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoL00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoL.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoL.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoM00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoM.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoM.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoM00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoM.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoM.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoR00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoR.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoR.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoR00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoR.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoR.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoSB00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoSB.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoSB.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoSB00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoSB.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoSB.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoT00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoT.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoT.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoT00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoT.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoT.svg#NanumGothic') format('svg');
  }

  @font-face {
    font-family: "AppleSDGothicNeoUL00";
    src: url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoUL.eot');
    src:local(※),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoUL.eot?#iefix') format('embedded-opentype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoUL00.woff') format('woff'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoUL.ttf') format('truetype'),
      url('https://static.koreatech.in/assets/bcsdlab_img/font/AppleSDGothicNeoUL.svg#NanumGothic') format('svg');
  }

  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

</style>
