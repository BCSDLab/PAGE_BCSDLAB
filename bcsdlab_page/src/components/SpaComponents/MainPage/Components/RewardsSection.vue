<template>
  <div class="reward__introduce">
    <div class="reward__wrapper CONTENT__CONTAINER">
      <div class="reward__title">
        BCSD Lab의 리워드는<br>
        IT 정보 교류 및 최신 기술 습득을 통한 IT 인재로의 성장입니다.
      </div>
      <div class="reward__detail__container">
        <div
          v-for="(reward, index) in rewards"
          :class="{'reward__detail__second': index === 1, 'reward__detail__third': index===2}"
          class="reward__detail">
          <img
            :src="reward.imgUrl">
          <div class="reward__detail-title">
            {{ reward.title }}
          </div>
          <div
            v-html="reward.desc"
            class="reward__detail-desc">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Reward',
    data () {
      return {
        //TODO:  img link 교체
        rewards: [
          {
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__reward_1.png",
            title: "더 빠르고 더 편하게",
            desc: "학교생활에서 느낀 불편함을 <br>" +
              "IT기술로 개선하여 자동화를 작업합니다. "
          },
          {
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__reward_2.png",
            title: "포트폴리오와 가이드",
            desc: "실무에 쓰이는 능력을 배양하고<br>" +
              "포트폴리오의 품질을 향상시킵니다. "
          },
          {
            imgUrl: "https://static.koreatech.in/assets/bcsdlab_img/main__reward_3.png",
            title: "협업과 개인의 역량 증진",
            desc: "현업과 동일한 수준의<br>협업을 통해 개인의 역량을 키웁니다."
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

  .reward__introduce {
    height: 698px;
    background-color: #f2f5f8;
    margin-left: auto;
    margin-right: auto;
  }

  .reward__title {
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
    padding-top: 78px;
    margin-bottom: 85px;
  }

  .reward__detail__container {
    height: 297px;
  }

  .reward__detail {
    width: 385px;
    float: left;
  }

  .reward__detail img {
    margin-left: 54px;
    width: 158px;
    height: 158px;
  }

  .reward__detail__container .reward__detail__second {
    margin-left: 47px;
    width: 338px;
  }

  .reward__detail__container .reward__detail__second .reward__detail-desc{
    margin-right: 67px;
  }


  .reward__detail__container .reward__detail__third {
    margin-left: 98px;
    width: 287px;
  }

  .reward__detail__container .reward__detail__third .reward__detail-title{
    margin-left: 42px;
  }

  .reward__detail__container .reward__detail__third .reward__detail-desc{
    margin-right: 24px;
  }


  .reward__detail-title {
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.3;
    letter-spacing: -0.6px;
    color: #3d4551;
    margin-top: 35px;
    margin-left: 58px;
  }

  .reward__detail-desc {
    font-family: AppleSDGothicNeoL00;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: -0.48px;
    text-align: center;
    margin-top: 10px;
    margin-right: 120px;
    color: #778391;
  }
</style>
