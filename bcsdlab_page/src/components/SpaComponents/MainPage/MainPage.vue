<template>
  <div>
    <!--배너 미출력-->
    <transition name="fade">
      <!--배너 미출력-->
      <div v-if="!isBanner">
        <!--topnav 배경부-->
        <div class="topnav"></div>
        <section__about></section__about>
        <section__rewards></section__rewards>
        <section__track></section__track>
        <section__activity></section__activity>
        <section__mentor></section__mentor>
        <section__submit></section__submit>
      </div>
    </transition>
    <!--배너 출력-->
    <transition>
      <div
        class="banner"
        v-if="isBanner"
      >
        <agile
          ref="carousel" :dots="false" :infinite="false" :autoplay-speed="5000" :autoplay="false" timing="ease-in" :mobileFirst="false" :navButtons="false">
          <div class="slide">
            <main-banner
              :nowBannerIndex="0"
              @selectBannerIndex="selectBannerIndex"
              @removeBanner="removeBanner"></main-banner>
          </div>
          <div class="slide">
            <main-banner
              :nowBannerIndex="1"
              @selectBannerIndex="selectBannerIndex"
              @removeBanner="removeBanner">
            </main-banner>
          </div>
        </agile>
      </div>
    </transition>
  </div>
</template>

<script>
import MainBannerComponent from './Components/MainBannerComponent'
import AboutSection from './Components/AboutSection'
import RewardsSection from './Components/RewardsSection'
import TrackSection from './Components/TrackSection'
import ActivitySection from './Components/ActivitySection'
import MenotrSection from './Components/MentorSection'
import SubmitSection from './Components/SubmitSection'
import VueAgile from '../../SharedComponents/SlideComponent/Agile'

export default {
  name: 'MainPage',
  components: {
    'main-banner': MainBannerComponent,
    'section__about': AboutSection,
    'section__rewards': RewardsSection,
    'section__track': TrackSection,
    'section__activity': ActivitySection,
    'section__mentor': MenotrSection,
    'section__submit': SubmitSection,
    'agile': VueAgile
  },
  data () {
    return {
      nowBannerIndex: 0,
      isBanner: true
    }
  },
  methods: {
    displayBanner: function () {
      this.isBanner = true
    },
    removeBanner: function () {
      this.isBanner = false
    },
    selectBannerIndex: function (index) {
      this.nowBannerIndex = index
      this.$refs.carousel.goTo(this.nowBannerIndex)
    }

    // onScroll: function () {
    //   console.log(window.scrollY)
    //   if (window.scrollY < 0) {
    //     this.displayBanner()
    //   } else {
    //     this.removeBanner()
    //   }
    // }
  },
  created () {

  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topnav {
    height: 70px;
    width: 100%;
    background-color: #795cf2;
  }

  .slide {
    width: 100%;
    height:100%;
    min-width: 1400px;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease-in-out;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .banner {
    min-width: 1400px;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
  }

  .content {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

</style>
