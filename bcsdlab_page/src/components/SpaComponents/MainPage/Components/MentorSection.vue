<template>
  <div class="mentor__wrapper">
    <div class="mentor__container CONTENT__CONTAINER">
    </div>
    <div class="mentor__black__filter">
      <div class="CONTENT__CONTAINER">
        <!-- TODO: 트랜지션 -->
        <transition name="slide-left">
          <div class="mentor__content">
            <div class="mentor__content__header">
              <img :src="mentorDatas[nowMentorDataIndex].mentorProfileImage">
              <div class="mentor__content__header__text">

                <div class="mentor__content__line"></div>

                <div class="mentor__content__name">
                  {{ mentorDatas[nowMentorDataIndex].mentorName }}
                </div>

                <div class="mentor__content__company">
                  {{ mentorDatas[nowMentorDataIndex].mentorCompany }}
                </div>
              </div>
            </div>
            <div
              v-html="mentorDatas[nowMentorDataIndex].mentorComment"
              class="mentor__content__comment">
            </div>
            <div
              @click="nextMentorComment()"
              class="mentor__content__next__btn">
              <img
                src="https://static.koreatech.in/bcsdlab_page_assets/img/ic-expand-more.png"
                alt="">
            </div>
          </div>
        </transition>
      </div>
      <div
        @click="nextMentorComment()"
        class="mentor__content__next__btn">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Mentor',
    data () {
      return {
        nowMentorDataIndex: 0,
        mentorDatas: [
          {
            mentorProfileImage: "https://static.koreatech.in/assets/bcsdlab_img/mentor_profile_image_1.png",
            mentorName: "정찬혁",
            mentorCompany: "POSCO ICT 합격",
            mentorComment:
              "BCSD Lab의 특장점은 우리 학교 조별과제로 절대 경험할 수 없는 체계적인 협업이라고 생각합니다.<br>" +
              "메인 파일 하나에 몇 천줄 써내려가는 것에 아무 위화감 없이 살고있었는데<br>" +
              " BCSD Lab에서 다른 개발자들과 토의하고 협업하면서 정말 많은 것을 배우게 되었습니다.<br>" +
              "어떤 디자인 패턴을 사용해야 할까? 어떻게 예외를 방지할 수 있을까? 무슨 방식이 사용자 친화적일까?<br>" +
              "메인한방 인생을 계속 살았더라면 끝내 궁금하지도 않았을 것들을 함께 이야기하며 차츰 성장해 나갔고<br>" +
              "고민의 흔적이 담긴 프로젝트를 자신있게 기업의 면접관에게 보여줄 수 있었습니다.<br>" +
              "협업다운 협업을 아직 해본 적이 없는 것 같다, 개발자로서의 성장이 필요하다는 분들께<br>" +
              "꼭 한번 지원신청서를 작성하라고 말씀드리고 싶습니다."
          },
          {
            mentorProfileImage: "https://static.koreatech.in/assets/bcsdlab_img/mentor_profile_image_4.jpg",
            mentorName: "서정민",
            mentorCompany: "IBK 기업은행 합격",
            mentorComment:
              "현재 많은 기업들이 컴퓨터 공학에 대한 이론과 학점이 아닌 어떤 프로젝트를 개발해봤는지,<br>" +
              "알고리즘 실력이 어느정도 되는지를 원하고 있습니다.<br>" +
              "혼자서 꾸준히 하기 어려운 알고리즘 공부나 눈에 띄는 프로그래밍 프로젝트 결과물 및 지식을 얻기 위해<br>" +
              "BCSD Lab에 지원하게 되었고 그 결과 IBK 기업은행에 입사하여 금융 IT에서 일하고 싶다는 꿈을 이룰 수 있었습니다.<br>" +
              "많은 한국기술교육대학교 후배님들도 할까 말까 고민만 하시지 말고 일단 지원하여 자신이 원하는 길을 걸었으면 좋겠습니다."
          },
          {
            mentorProfileImage: "https://static.koreatech.in/assets/bcsdlab_img/mentor_profile_image_2.png",
            mentorName: "박혜림",
            mentorCompany: "롯데정보통신 Mobile팀 합격",
            mentorComment:
              "아무것도 갖춘 것이 없었을 때, BCSD Lab이 큰 도움이 되었습니다.<br>" +
              "단순 과제를 벗어나 실제 서비스를 만들면서 개발 능력, 실무 능력 등 많은 것을 배웠습니다.<br>" +
              "남들과 차별화된 경험을 쌓을 수 있는 좋은 기회이니 함께하면 좋겠습니다." 
          },
          {
            mentorProfileImage: "https://static.koreatech.in/assets/bcsdlab_img/mentor_profile_image_3.jpeg",
            mentorName: "박영호",
            mentorCompany: "챗봇 스타트업 JellyLab 합격",
            mentorComment:
              "실력을 기르기 위해서는 자신의 노력도 중요하지만 환경도 중요하다 생각합니다.<br>" +
              "훌륭한 선배들과 팀원들과 함께 협업하며 좋지 않은 습관이나 버릇들도 고칠 수 있고 게을러지는 것을 막을 수도 있습니다.<br>" +
              "또한 학부 학생의 신분으로는 어느 곳에서도 얻기 힘든 경험과 실력도 쌓을 수 있습니다.<br>" +
              "자신의 실력 증진에 욕심이 있다면 BCSD Lab에 지원하세요!"
          },
          
        ]
      }
    },
    methods: {
      nextMentorComment: function() {
        this.nowMentorDataIndex += 1;
        if( this.nowMentorDataIndex >= this.mentorDatas.length ) {
          this.nowMentorDataIndex = 0;
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mentor__wrapper {
    height: 886px;
    background: url("https://static.koreatech.in/assets/bcsdlab_img/main__about__mentor.png") no-repeat;
    background-size: cover;
    opacity: 1.5
  }

  .mentor__black__filter {
    background-color: rgba(0,0,0,0.7);
    width: 100%;
    height: 886px;
    color: white;
    position: relative;
  }

  .mentor__content__header {
    padding-top: 154px;
    width: 100%;
  }

  .mentor__content__header img {
    width: 142px;
    height: 142px;
    border-radius: 50%;
    float: left;
  }

  .mentor__content__header__text {
    width: 920px;
    height: 142px;
    float: left;
    margin-left: 49px;
  }

  .mentor__content__comment {
    width: 100%;
    float: left;
    padding-top: 38px;
    font-family: AppleSDGothicNeoL00;
    font-size: 22px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.27;
    letter-spacing: normal;
    text-align: left;
    color: #f2f5f8;
  }

  .mentor__content__line {
    margin-top: 26px;
    width: 29px;
    height: 0;
    border: solid 3px #795cf2;
  }

  .mentor__content__name {
    margin-top: 20px;
    height: 32px;
    font-family: AppleSDGothicNeoM00;
    font-size: 27px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.3;
    letter-spacing: normal;
    text-align: left;
    color: #f2f5f8;
  }

  .mentor__content__company {
    margin-top: 6px;
    font-family: AppleSDGothicNeoL00;
    font-size: 22px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.32;
    letter-spacing: normal;
    text-align: left;
    color: #f2f5f8;
  }

  .mentor__content__next__btn {
    background-image: url("https://static.koreatech.in/bcsdlab_page_assets/img/ic-expand-more.png");
    position: absolute;
    width: 17.4px;
    height: 28.2px;
    font-weight: 800;
    right: 380px;
    top: 441px;
    bottom: 407px;
    cursor: pointer;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }
</style>
