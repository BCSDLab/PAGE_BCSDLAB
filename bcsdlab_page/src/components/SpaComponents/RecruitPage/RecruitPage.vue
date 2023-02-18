<template>
  <div class="container">
    <div class="header">
      <div class="header__overlay">
        <div class="header__title">
          <span class="header__title-name">Recruit</span>
          <p class="header__title-description">BCSD Lab과 성장하세요.</p>
        </div>
      </div>
    </div>
    <!-- <div class="information-section">
      <div class="title">Information</div>
      <div class="information__list">
        <div
          class="information"
          v-for="(info, index) in informationDatas"
          :key="index">
          <div class="information__title">{{ info.title }}</div>
          <hr>
          <div
            v-html="info.contents"
            class="information__contents">
          </div>
        </div>
      </div>
    </div> -->
    <div class="position-section">
      <div class="title">Recruit position</div>
      <position-card />
    </div>
    <div class="recruit-process-section">
      <div class="title">Recruit Process</div>
      <div class="process-bar">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <div class="processes">
        <div
          v-for="(process, index) in processDatas"
          :key="index"
          class="process">
          <div class="process__step">{{ process.step }}</div>
          <div class="process__title">{{ process.title }}</div>
          <div
            v-html="process.contents"
            class="process__contents">
          </div>
        </div>
      </div>
    </div>
    <div class="advantage-section">
      <div class="advantage__overlay">
        <div class="title">Advantage</div>
        <div class="advantage__list">
          <div
            v-for="(advantage, index) in advantageDatas"
            :key="index"
            class="advantage">
            <img
              class="advantage__logo"
              :src="advantage.image_url"
              alt="">
            <div class="advantage__title">{{ advantage.title }}</div>
            <div
              v-html="advantage.description"
              class="advantage__description">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join">
      <div class="title">
        BCSD Lab과 함께 하실 준비가 되었나요?
      </div>
      <div class="description">
        BCSD Lab과 함께 할 코리아텍 학우 여러분들을 환영합니다.<br>
        함께 프로젝트를 이어나가고, 자신의 능력을 향상시키고 싶은 분들의 많은 지원바랍니다.
      </div>
      <button
        @click="apply()"
        class="apply-btn">
        지원하기
      </button>
      <button
        @click="inquiry()"
        class="inquiry-btn">
        문의하기
      </button>
    </div>

  </div>
</template>

<script>
import PositionCard from './Components/PositionCard'
export default {
  name: 'RecruitPage',
  components: {
    'position-card': PositionCard
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      informationDatas: [
        { title: '모집 분야', contents: '기초를 위한 Novice<br>트랙의 Beginner<br>(모집하지 않는 트랙이 있을 수 있음)' },
        { title: '모집 기간', contents: '1기 : 12월 중 ~ 01월 초<br>2기 : 02월 중 ~ 03월 초<br>3기 : 06월 중 ~ 07월 초<br>4기 : 08월 중 ~ 09월 초' },
        { title: '지원 자격', contents: '매우 강한 책임감을 가진 학우<br>시간의 소중함을 아는 학우<br>자기주도적인 학우<br>성장에 대한 절박함이 있는 학우' }
      ],
      advantageDatas: [
        { title: '온/오프라인 병행', description: '모교 출신 멘토들과의<br>24시간 상담 그리고 질의응답', image_url: 'https://static.koreatech.in/bcsdlab_page_assets/img/24-1.png' },
        { title: '효율적인 프로세스', description: '실제 스타트업에서 쓰이는<br>프로세스 차용', image_url: 'https://static.koreatech.in/bcsdlab_page_assets/img/img-418801.png' },
        { title: '포트폴리오 강화', description: '학부생으로서<br>가지기 힘든 실무 능력', image_url: 'https://static.koreatech.in/bcsdlab_page_assets/img/26-1.png' },
        { title: '취업 멘토링', description: '서류와 면접 준비에 대한<br>가이드', image_url: 'https://static.koreatech.in/bcsdlab_page_assets/img/kisspng-mentorship-computer-icons-organization-learning-co-quill-5-ae-2-d-43-c-819253-5722715715248149085307.png' }
      ],
      processDatas: [
        { step: '1', title: '지원서 접수', contents: '본인의 역량과 관심사에 따라<br>트랙을 선택합니다' },
        { step: '2', title: '지원서 검토', contents: '개발자, 디자이너는 지원 서류를 통해<br>지원자의 수준을 파악하고 어디부터<br>배워야할지 검토합니다' },
        { step: '3', title: '커리큘럼 진행', contents: '트랙별 교육을 진행합니다<br>해당 교육과정은 각 직군 별로 상이하며약 6개월 간 진행됩니다' },
        { step: '4', title: '회고', contents: '6개월간의 교육과 학습을 통해<br>느낀 점, 좋았던 점, 아쉬웠던 점 등<br>교육과정 내 배운 내용에 대해 확인 후<br>Regular로의 진입을 결정합니다' }
      ]
    }
  },
  methods: {
    apply () {
      window.open('https://forms.gle/sQYk7Br2YGXrmUqQ7')
    },
    inquiry () {
      window.open('https://www.facebook.com/BCSD-Lab-1727922507422214/?ref=bookmarks')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    width: 100%;
  }

  .header {
    background-image: url("https://static.koreatech.in/bcsdlab_page_assets/img/recruit.png");
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

  .title {
    font-family: AppleSDGothicNeoEB00;
    font-size: 40px;
    font-weight: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
  }
  /* information */
  .information-section {
    margin-top: 81px;
    margin-bottom: 231px;
  }

  .information-section .title {
    color: #3d4551;
  }

  .information__list {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
  }

  .information {
    width: 345px;
    height: 255px;
    border: solid 1px #e4e7ea;
    margin-right: 63px;
    text-align: center;
    padding-top: 53px;
    box-sizing: border-box;
  }

  .information__list .information:last-child {
    margin-right: 0;
  }

  hr {
    width: 25px;
    background-color:#795cf2;
    height: 3px;
    margin-top: 13px;
    margin-bottom: 20px;
  }

  .information__title {
    font-family: AppleSDGothicNeoSB00;
    font-size: 25px;
    font-weight: normal;
    line-height: 1.44;
    letter-spacing: 0.43px;
    color: #3d4551;
  }

  .information__contents {
    font-family: AppleSDGothicNeoL00;
    font-size: 17px;
    font-weight: normal;
    line-height: 1.24;
    letter-spacing: 0.34px;
    color: #778391;

  }
  /* position */
  .position-section {
    margin-top: 81px;
    margin-bottom: 150px;
  }

  .position-section .title {
    color: #3d4551;
  }
  /* process */

  .recruit-process-section {
    margin-bottom: 249px;
  }

  .recruit-process-section .title {
    color: #3d4551;
  }

  .process-bar {
    height: 18px;
    width: 100%;
    background: linear-gradient(to right,#c5d4e3, #54606e);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 128px;
  }

  .circle {
    width: 25px;
    height: 25px;
    background-color: #77828f;
    border-radius: 50%;
    border: 7px solid white;
    margin: 0 115px;
  }

  .process-bar .circle:first-child {
    margin-left: -154px;
  }

  @media (max-width: 1324px) {
    .process-bar .circle:last-child {
      margin-right: 0;
    }
    .process-bar .circle:first-child {
      margin-left: -268px;
    }
  }
  .processes {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .process {
    border-left: 1px solid #d2d5d9;
    padding-top: 43px;
    padding-left: 20px;
    padding-right: 20px;
    height: 311px;
    width: 269px;
    box-sizing: border-box;
  }

  .process__step {
    font-family: AppleSDGothicNeoM00;
    font-size: 40px;
    font-weight: normal;
    line-height: 1.15;
    letter-spacing: -1.2px;
    text-align: left;
    color: #3d4551;
  }

  .process__title {
    font-family: AppleSDGothicNeoM00;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -0.6px;
    color: #000000;
    margin-top: 8px;
  }

  .process__contents {
    font-family: AppleSDGothicNeoL00;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: -0.9px;
    color: #778391;
    margin-top: 10px;
  }
  /* advantage */

  .advantage-section {
    background-image: url("https://static.koreatech.in/bcsdlab_page_assets/img/recruit.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 664px;
    position: relative;
  }

  .advantage__overlay {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #3d4551;
    width: 100%;
    height: inherit;
    box-sizing:border-box;
    opacity: 0.95;
    padding: 98px 0 146px 0;
  }

  .advantage__list {
    margin-top: 136px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .advantage {
    margin-right: 52px;
    width: 260px;
    text-align: center;
  }

  .advantage__list .advantage:last-child {
    margin-right: 0;
  }

  .advantage__logo {
    margin-bottom: 65px;
  }

  .advantage__title {
    font-family: AppleSDGothicNeoM00;
    font-size: 30px;
    font-weight: normal;
    line-height: 1.3;
    letter-spacing: 0.51px;
    text-align: center;
    color: #ffffff;
  }

  .advantage__description {
    font-family: AppleSDGothicNeoL00;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.3;
    letter-spacing: 0.34px;
    text-align: center;
    color: #868686;
  }
  /* join */

  .join {
    padding: 89px 0 111px 0;
    background-color: #f2f5f8;
    text-align: center;
  }

  .join .title {
    font-family: AppleSDGothicNeoM00;
    font-size: 40px;
    font-weight: normal;
    line-height: 1.35;
    letter-spacing: -1.2px;
    color: #3d4551;
    margin-bottom: 30px;
    text-transform: initial;
  }

  .join .description {
    font-family: AppleSDGothicNeoL00;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #778391;
    margin-bottom: 62px;
  }

  .apply-btn {
    font-family: AppleSDGothicNeoM00;
    font-size: 22px;
    font-weight: normal;
    line-height: 1.59;
    letter-spacing: -0.66px;
    text-align: center;
    color: #f2f5f8;
    background-color: #795cf2;
    border: 2px solid #795cf2;
    border-radius: 4px;
    padding: 22px 76px;
    margin: 0 15px;
    cursor: pointer;
    box-sizing: border-box;
  }

  .inquiry-btn {
    font-family: AppleSDGothicNeoM00;
    font-size: 22px;
    font-weight: normal;
    line-height: 1.59;
    letter-spacing: -0.66px;
    text-align: center;
    color: #795cf2;
    background-color: transparent;
    border: 2px solid #795cf2;
    border-radius: 4px;
    padding: 22px 76px;
    margin: 0 15px;
    cursor: pointer;
    box-sizing: border-box;
  }

  button:focus {
    outline: none;
  }
</style>
