<template>
  <div class="banner">
    <transition name="slide-fade">
    <div
      :class="{
      'banner-1__background': nowBannerIndex===0,
      'banner-2__background': nowBannerIndex===1,
      }">
      <div :class="{'black__filter': nowBannerIndex===0, 'sub__img': nowBannerIndex === 1}">
        <div class="banner__container">

          <!--<div class="banner__subinfo-img__container">-->
            <!--<img-->
              <!--class="banner__subinfo-img"-->
              <!--v-if="nowBannerIndex === 1"-->
              <!--:src="bannerDatas[1].subInfoImage">-->
          <!--</div>-->

          <div class="banner__contents">
            <div class="banner__indicators">
              <div
                v-for="(nullData, index) in bannerDatas"
                @click="clickIndicator(index)"
                :class="{'active': index===nowBannerIndex}"
                class="banner__indicator">
              </div>
            </div>

            <div class="banner__title">
              {{ bannerDatas[nowBannerIndex].title }}
            </div>
            <div class="banner_content">
              <div class="banner__desc">
                {{ bannerDatas[nowBannerIndex].desc }}
              </div>
              <div
                v-if="nowBannerIndex === 1"
                class="banner__date">
                {{ bannerDatas[1].subInfo }}
              </div>
              <div
                v-for="btn in bannerDatas[nowBannerIndex].btns"
                @click="clickBtn(btn.btnLink)"
                class="banner__btn">
                {{ btn.btnTitle }}
              </div>
              <div
                class="banner__footer"
                :class="{'banner__footer-second-margin': nowBannerIndex === 1}">
                BCSD LAB은 현직 IT 실무에서 활동하는 멘토와 함께 프로젝트를 하는<br>
                <span class="banner__footer-bold">스타트업형 프로세스 동아리</span>입니다.
                <!-- <div
                  @click="removeBanner"
                  class="banner__mouse">
                  <img src="https://static.koreatech.in/assets/bcsdlab_img/main_banner__mouse.png">
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        @click="clickNextBtn"
        class="banner__next__btn">
        <img
          src="https://static.koreatech.in/bcsdlab_page_assets/img/ic-expand-more.png"
          alt="">
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'MainBanner',
  props: {
    nowBannerIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      bannerDatas: [
        {
          backgroundImgUrl: 'https://static.koreatech.in/assets/bcsdlab_img/main_banner__background.png',
          backgroundColor: '',
          title: 'BCSD LAB',
          desc: 'Beyond Computer Software Development Laboratory ',
          subInfo: '',
          btns: [
            {
              btnTitle: 'BCSD LAB 소개',
              btnLink: ''
            }
          ]
        }, {
          backgroundImgUrl: '',
          backgroundColor: '#f7941e',
          title: 'KOIN',
          desc: 'KOREATECH Community Site',
          subInfo: '2018. 07',
          subInfoImage: 'https://static.koreatech.in/assets/bcsdlab_img/main_banner__sub-image.png',
          btns: [
            {
              btnTitle: '사이트 바로가기',
              btnLink: 'https://koreatech.in'
            }
          ]
        }
      ],
      lastScrollTop: 0
    }
  },
  methods: {
    clickIndicator: function (index) {
      this.$emit('selectBannerIndex', index)
    },

    clickBtn: function (link) {
      switch (link) {
        case '':
          this.removeBanner()
          break

        case 'https://koreatech.in':
          window.open(link)
          break
      }
    },

    removeBanner: function () {
      this.$emit('removeBanner')
    },

    // scrollDownEvent: function () {
    //   let st = window.scrollY || document.documentElement.scrollTop // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    //   if (st > this.lastScrollTop) {
    //     this.removeBanner()
    //   }
    //   this.lastScrollTop = st <= 0 ? 0 : st
    // },

    clickNextBtn: function () {
      if (this.nowBannerIndex === 0) this.$emit('selectBannerIndex', 1)
      else if (this.nowBannerIndex === 1) this.$emit('selectBannerIndex', 0)
    }

  },
  mounted () {
    window.addEventListener('scroll', this.scrollDownEvent)
  },

  destroyed () {
    window.removeEventListener('scroll', this.scrollDownEvent)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    user-select: none;
  }

  .banner {
    height: 100vh;
    width: 100%;
    min-height: 500px;
    min-width: 1400px;
  }

  .banner-1__background {
    height: 100vh;
    background: url("https://static.koreatech.in/assets/bcsdlab_img/main_banner__background.png") no-repeat;
    background-size: cover;
    position: relative;
  }

  .banner-1__background:before {
    filter: grayscale(100%);
  }

  .banner-2__background {
    height: 100vh;
    background: #f7941e;
    position: relative;
  }
  .black__filter {
    background: #3d4551;
    opacity: 0.9;
    height: 100%;
    min-height: 500px;
    min-width: 1400px;
  }

  .sub__img {
    width: 100%;
    height: 100%;
    min-height: 1000px;
    background: url("https://static.koreatech.in/assets/bcsdlab_img/main_banner__sub-image.png") right top 60px /1040px 548px no-repeat !important;
  }

  .banner__container {
    margin-left: 74px;
  }

  .banner__indicators {
    padding-top: 150px;
    padding-left: 5px;
    width: 100%;
    height: 9px;
  }

  .banner__indicator {
    width: 18px;
    margin-right: 6px;
    float: left;
    height: 9px;
    border-radius: 21px;
    opacity: 0.25;
    background-color: #ffffff;
    cursor: pointer;
  }

  .active {
    opacity: 1;
  }

  .banner_content {
    display:flex;
    flex-direction: column;
    gap: 15px;
  }

  .banner__title, .banner__desc {
    margin-top: 59px;
    font-family: AppleSDGothicNeoEB00;
    font-size: 60px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.07;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .banner__desc {
    margin-top: -2px;
    font-family: AppleSDGothicNeoT00;
  }

  .banner__date {
    font-family: AppleSDGothicNeoL00;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.92;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .banner__btns {
    margin-top: 10px;
    width: 100%;
  }

  .banner__btn {
    margin-right: 13px;
    cursor: pointer;
    width: 133.7px;
    height: 42.2px;
    line-height: 42.2px;
    border: solid 2px #ffffff;
    font-family: AppleSDGothicNeoL00;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    float: left;
  }

  .banner__footer {
    width: 100%;
    margin-top: 80px;
    font-family: AppleSDGothicNeoL00;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
  }

  .banner__footer-second-margin {
    bottom: 100px;
  }

  .banner__subinfo-img {
    width: 1260px;
  }

  .banner__footer-bold {
    font-family: AppleSDGothicNeoB00;
  }

  .banner__subinfo-img__container {
    position: relative;
    left: 1px;
    z-index: 1;
  }
  .banner__mouse {
    text-align:center;
  }
  .banner__mouse img {
    width: 27.9px;
    height: 40.5px;
    cursor: pointer;
  }

  .banner__next__btn {
    cursor: pointer;
    position: absolute;
    top: 400px;
    bottom: 503px;
    right: 74px;
  }

  @media (max-height: 870px) {
    /* .banner__footer {
      position: relative;
      margin-top: 10px;
      bottom: 0;
    } */

    .banner__footer-second-margin {
      position: relative;
      bottom:0;
      margin-top: 100px;
    }
  }

  @media (max-width: 1830px) {
    .sub__img {
      width: 100%;
      height: 100%;
      min-height: 1000px;
      background: url("https://static.koreatech.in/assets/bcsdlab_img/main_banner__sub-image.png") right top 150px/782px 437px no-repeat !important;
    }
  }

  @media (max-width: 1500px) {
    .sub__img {
      width: 100%;
      height: 100%;
      min-height: 1000px;
      background: url("https://static.koreatech.in/assets/bcsdlab_img/main_banner__sub-image.png") right 20pxtop 200px/640px 350px no-repeat !important;
    }
  }
</style>
