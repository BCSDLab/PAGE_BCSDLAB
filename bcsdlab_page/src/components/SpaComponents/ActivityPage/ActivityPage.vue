<template>
  <div class="container">
    <div
      v-if="popupFlag"
      class="popup-overlay"></div>
    <div class="header">
      <div class="header__overlay">
        <div class="header__title">
          <span class="header__title-name">Activity</span>
          <p class="header__title-description">BCSD Lab에서 하는 활동입니다.</p>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="tab">
        <span
          class="year-btn"
          :class="{ active: selectedYear === year}"
          @click="selectYear(year)"
          v-for="(year, index) in years"
          :key="index">
          {{ year }}
        </span>
      </div>
      <div
        v-for="(activity, index) in activities"
        :key="index"
        class="contents">
        <div class="contents__header">
          <span class="contents__title-name">{{ activity.title }}</span>
          <span class="contents__title-date">{{ activity.date }}</span>
        </div>
        <div class="contents__description">
          {{ activity.description }}
        </div>
        <div
          class="contents__image-container">
          <img
            @click="showImagePopup(index, imgIdx)"
            class="contents__image"
            v-for="(image, imgIdx) in activity.image_urls"
            :key="imgIdx"
            :src="image"
            alt="">
          <div
            class="contents__image-popup"
            :class="{ show: popupFlag} ">
            <div>
              <div class="contents__image">
                <img
                  class="prev"
                  @click="prev()"
                  src="https://static.koreatech.in/bcsdlab_page_assets/img/ic-left.png" alt="">
                <div class="contents__image-body">
                  <img
                    class="close-btn"
                    @click="closePopup"
                    src="https://static.koreatech.in/bcsdlab_page_assets/img/21-1.png"
                    alt="">
                  <img
                    class="popup-image"
                    :src="popupImage" alt="">
                </div>
                <img
                  class="next"
                  @click="next()"
                  src="https://static.koreatech.in/bcsdlab_page_assets/img/ic-right.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../../../api/api'
export default {
  name: 'ActivityPage',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      years: [2019, 2018, 2017],
      selectedYear: 2019,
      popupFlag: false,
      activities: null,
      activityIndex: 0,
      imageIndex: 0,
      popupImage: null,
    }
  },
  methods: {
    selectYear (year) {
      this.selectedYear = year;
      this.getActivitesOfYear(year);
    },
    showImagePopup (index, imgIdx) {
      console.log(index, imgIdx);
      this.popupFlag = true;
      this.activityIndex = index;
      this.imageIndex = imgIdx;
      this.popupImage = this.activities[index].image_urls[imgIdx];
    },
    prev () {
      this.imageIndex--;
      if (this.imageIndex < 0) {
        this.imageIndex = this.activities[this.activityIndex].image_urls.length - 1;
      }
      this.popupImage = this.activities[this.activityIndex].image_urls[this.imageIndex]
    },
    next () {
      this.imageIndex++;
      if (this.imageIndex > this.activities[this.activityIndex].image_urls.length - 1)
        this.imageIndex = 0;
      this.popupImage = this.activities[this.activityIndex].image_urls[this.imageIndex]
    },
    closePopup () {
      this.popupFlag = false;
    },
    async getActivitesOfYear(year) {
      let result = await api.getActivites(year);
      this.activities = result.data.Activities;
      console.log(this.activities);
    }
  },
  created () {
    this.getActivitesOfYear(this.selectedYear);
    // esc: 27, right: 39, left: 37
    window.onkeydown = ((e) => {
      if (this.popupFlag) {
        if (e.keyCode == 27) this.closePopup();
        else if(e.keyCode == 39) this.next();
        else if(e.keyCode == 37) this.prev();
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 100%;
  }
  
  .popup-overlay {
    width: 100%;
    height: 100vh;
    background-color: #212121;
    opacity: 0.8;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }
  .header {
    background: url("https://static.koreatech.in/bcsdlab_page_assets/img/teamwork-2.png") no-repeat;
    background-size: cover;
    height: 540px;
  }

  .header__overlay {
    background-color: #3d4551;
    width: 100%;
    height: 540px;
    opacity: 0.9;
  }

  .header__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    height: 100%;
    color: #ffffff;
  }

  .header__title-name {
    font-family: AppleSDGothicNeoEB00;
    font-size: 60px;
    font-weight: normal;
    line-height: 1.07;
    letter-spacing: normal;
  }

  .header__title-description {
    font-family: AppleSDGothicNeoT00;
    font-size: 22px;
    font-weight: normal;
    line-height: 2.91;
    letter-spacing: normal;
    margin: 0;
    margin-top: 8px;
  }

  .body {
    width: 1160px;
    margin: auto;
  }

  .tab {
    border-bottom: solid 1px #e4e7ea;
    margin-bottom: 55px;
  }

  .year-btn {
    height: 29px;
    font-family: AppleSDGothicNeoB00;
    font-size: 24px;
    font-weight: normal;
    line-height: 1.42;
    letter-spacing: normal;
    text-align: left;
    color: #e4e7ea;
    display: inline-block;
    padding: 31px 43px 31px 0;
    cursor: pointer;
  }

  .tab .year-btn:first-child {
    padding-left: 5px;
  }

  .active {
    color: #3d4551;
  }

  .contents {
    margin-bottom: 56.5px;
  }
  
  .body .contents:last-child {
    margin-bottom: 117.5px;
  }

  .contents__header {
    display: flex;
    justify-content: space-between;
  }

  .contents__title-name {
    font-family: AppleSDGothicNeoB00;
    font-size: 24px;
    font-weight: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #3d4551;
  }

  .contents__title-date {
    font-family: AppleSDGothicNeoM00;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #3d4551;
  }

  .contents__description {
    font-family: AppleSDGothicNeoR00;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.1;
    letter-spacing: normal;
    text-align: left;
    color: #778391;
    padding-top: 16px;
    padding-bottom: 29px;
  }

  .contents__image-container {
    display: flex;
    flex-wrap: wrap;
  }

  .contents__image {
    width: 280px;
    height: 164.5px;
    cursor: pointer;
    margin-right: 13px;
    margin-bottom: 10px;
  }

  .contents__image-container .contents__image:nth-child(4n) {
    margin-right: 0;
  }

  .contents__image-popup {
    display: none;
    width: 100%;
    height: 100vh;
  }

  .show {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .close-btn {
    float: right;
    margin-bottom: 22px;
    cursor: pointer;
  }
  .contents__image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .prev, .next {
    cursor: pointer;
  }

  .prev {
    margin-right: 51px;
  }

  .popup-image {
    max-width: 951px;
    max-height: 650px;
  }
  .next {
    margin-left: 51px;
  }
</style>
