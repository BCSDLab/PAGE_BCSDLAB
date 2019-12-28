<template>
  <div class="about__introduce">
    <div class="about__title">
      ABOUT
    </div>

    <div class="about__introduce CONTENT__CONTAINER">
      <div class="about__introduce__title">
        BCSD Lab은<br>
        스타트업형 프로세스 동아리입니다.
      </div>
      <div class="about__introduce__desc">
        현직 IT 실무에서 활동하는 졸업생과 재학생이 함께 프로젝트를 하며<br>
        IT 기술 및 프로세스를 경험하고 실생활에 유용한 서비스들을 기획 및 개발합니다.
      </div>

      <div class="about__introduce__detail-container">
        <div
          v-for="(introduceDetailData, index) in introduceDetailDatas"
          :class="{ 'about__introduce__detail-among': index===1 }"
          class="about__introduce__detail">
          <img :src="introduceDetailData.imgUrl">
          <div class="about__introduce__detail-index">
            {{ index + 1 }}
          </div>
          <div class="about__introduce__detail__contents">
            <div class="about__introduce__detail-title">
              {{ introduceDetailData.title }}
            </div>
            <div
              v-html="introduceDetailData.desc"
              class="about__introduce__detail-desc">
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        introduceDetailDatas: [
          {
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__about_1.png",
            title: "생태계 구축",
            desc: "졸업생이 재학생을 가르치고 졸업한 선배가 또<br>" +
              "후배를 가르치는 시스템으로 운영됩니다."
          },
          {
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__about_2.png",
            title: "협업 프로세스 도입",
            desc: "최적화된 프로세스를 온라인상으로 경험해<br>" +
              "끊임없이 자기계발에 임합니다."
          },
          {
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__about_3.png",
            title: "정보격차 해소",
            desc: "빠르게 변하는 IT와 취업시장 정보 격차를 최소화<br>" +
              "합니다."
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    user-select: none;
  }

  .about__introduce {
    height: 900px;
  }

  .about__title {
    width: 100%;
    text-align: center;
    height: 48px;
    margin-top: 63px;
    margin-bottom: 76px;

    font-family: AppleSDGothicNeoEB00;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #3d4551;
  }

  .about__introduce__title {
    height: 102px;
    font-family: AppleSDGothicNeoM00;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: -1.2px;
    text-align: left;
    color: #3d4551;
  }

  .about__introduce__desc {
    margin-top: 30px;
    height: 54px;
    font-family: AppleSDGothicNeoL00;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: -0.6px;
    text-align: left;
    color: #778391;
  }

  .about__introduce__detail-container {
    margin-top: 84px;
  }

  .about__introduce__detail {
    width: 360px;
    float: left;
  }

  .about__introduce__detail-among {
    margin-left: 40px;
    margin-right: 40px;
  }

  .about__introduce__detail img {
    width: 360px;
    height: 222px;
    background-color: #e4e7ea;
    margin-bottom: 10px;
  }

  .about__introduce__detail-index {
    width: 60px;
    height: 48px;
    font-family: AppleSDGothicNeoM00;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.15;
    letter-spacing: -1.2px;
    text-align: center;
    color: #3d4551;
    float: left;
  }

  .about__introduce__detail__contents {
    width: 300px;
    float: left;
  }

  .about__introduce__detail-title {
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.3;
    letter-spacing: -0.6px;
    text-align: left;
    color: #3d4551;
  }

  .about__introduce__detail-desc {
    height: 43px;
    font-family: AppleSDGothicNeoL00;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: -0.48px;
    text-align: left;
    color: #778391;
  }
</style>
