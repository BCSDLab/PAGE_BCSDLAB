<template>
  <div class="activity__wrapper">
    <div class="activity CONTENT__CONTAINER">
      <div class="activity__title">
        ACTIVITY
      </div>
      <div class="activity__detail__container">
        <div
          v-for="(activity, index) in activityData"
          :class="{'last-card': index===3}"
          class="activity__card">
          <div class="activity__index">0{{ index + 1 }}</div>

          <div class="activity__img">
            <img :src="activity.imgUrl">
          </div>

          <div
            v-html="activity.desc"
            class="activity__desc">
          </div>


          <div class="activity__name">
            <div class="activity__name__inner">{{ activity.name }}</div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Activity',
    data () {
      return {
        activityData: [
          {
            name: "개강총회",
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__activity__1.png",
            desc: "새 학기가 시작됨과 동시에 <br>" +
              "BCSD Lab의 한 학기 계획과 다짐을 <br>" +
              "의논하는 행사 입니다."
          },
          {
            name: "졸업생 세미나",
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__activity__2.png",
            desc: "BCSD Lab의 졸업생들이 재학생들을 <br>" +
              "대상으로 진행하는 취업 특강 세미나입니다."
          },
          {
            name: "BCON",
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__activity__3.png",
            desc: "현직 개발자, 디자이너로 재직중인 <br>" +
              "BCSD Lab 멘토들을 초청하여 코리아텍 학우들을 대상으로 진행하는 컨퍼런스입니다."
          },
          {
            name: "종강총회",
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__activity__4.png",
            desc: "학기를 마무리하며 BCSD Lab의 <br>" +
              "결산과 의의를 의논하는 행사입니다."
          },
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .activity__wrapper {
    width: 100%;
    height: 1050px;
    background: #f2f5f8;
  }

  .activity {
    padding-top: 70px;
    height: 1145px;
  }

  .activity__title {
    text-align: center;
    font-family: AppleSDGothicNeoEB00;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #3d4551;
    margin-bottom: 58px;
  }

  .activity__detail__container {

  }

  .activity__card {
    width: 260px;
    float: left;
    height: 698px;
    margin-right: 40px;
  }

  .activity__index {
    font-family: AppleSDGothicNeoB00;
    font-size: 30px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.17;
    letter-spacing: normal;
    text-align: left;
    color: #3d4551;
    margin-bottom: 12px;
  }

  .activity__img {
    position: relative;
  }

  .activity__card .activity__img img {
    width: 260px;
    height: 650px;
    border-radius: 4px;
  }

  .activity__name {
    position: relative;
    width: 260px;
    height: 650px;
    object-fit: contain;
    border-radius: 4px;
    background-color: rgba(61,69,80,0.7);
    text-align: center;
    bottom: 754px;
    z-index: 1;
  }

  .activity__name__inner {
    font-family: AppleSDGothicNeoL00;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 650px;
    letter-spacing: normal;
    text-align: center;
    color: #f2f5f8;
    opacity: 1;
    z-index: 2;
  }

  .last-card {
    margin-right: 0;
  }

  .activity__desc {
    height: 80px;
    margin-top: 18px;
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
