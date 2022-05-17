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
    <div class="contents-section">
      <div class="position-description-card">
        <div class="card-head">
          <div class="recruit-home">
            <img
              @click="goBack"
              src="../../../assets/menu.png"
              alt="recruit-home">
          </div>
          <div class="name">
            {{ data.contents.name }}
          </div>
          <div
            class="d-day">
            <!-- {{ setDday }} -->
          </div>
        </div>
        <div class="card-body">
          <p class="title">◆ 포지션</p>
          <span>20-3기 {{ data.contents.track }} {{ data.position }}</span>

          <p class="title">◆ 지원기간</p>
          <span>{{recruitDatas[0].period}}</span>

          <p class="title">◆ 지원조건</p>
          <ul class="list">
            <li>매우 강한 책임감을 가진 학우</li>
            <li>시간의 소중함을 아는 학우</li>
            <li>자기주도적인 학우</li>
            <li>성장에 대한 절박함이 있는 학우</li>
            <li
              v-for="(q, index) in data.qualification"
              :key="index">
              {{ q }}
            </li>
          </ul>

          <p class="title">◆ 프로세스</p>
          <span>{{ data.process }}</span>
          <p class="title">◆ 학습내용</p>
          <ul>
            <li
              v-for="(contents, index) in data.learningContents"
              :key="index">
              {{ contents }}
            </li>
          </ul>
          <div>
            ※ 상세 커리큘럼은 
            <span
              @click="goTrack()"
              class="track">
              트랙 소개
            </span>
             참조
          </div>
          <div class="tags">
            <tag
              v-for="(tag, index) in data.contents.tags"
              :key="index"
              :name="tag"
            />
          </div>
          
          
        </div>
        <div class="card-footer">
          <a
            target="_blank"
            href="https://forms.gle/Yc532QgUHETc7eez7">
            <button class="apply-btn">
              지원하기
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/BCSD-Lab-1727922507422214/">
            <button class="inquiry-btn">
              문의하기
            </button> 
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recruitDatas from '../../../static/recruitDatas'
import Tag from './Components/Tag'
export default {
  name: "RecruitDetailPage",
  components: {
    'tag': Tag
  },
  data() {
    return {
      data: null,
      date: new Date(),
      recruitDatas
    }
  },
  computed: {
    setDday() {
      if (this.date.getFullYear() === 2019) {
        if (30 - this.date.getDate() > 0) return `D-${30 - this.date.getDate()}`;
        else if(30 - this.date.getDate() === 0) return 'D-Day';
        else return '모집 기간이 지났습니다.'
      } else {
        return '모집 기간이 지났습니다.';
      }
      
    }
  },
  methods: {
    goTrack() {
      this.$router.push(`/track/${this.data.path[1]}`);
    },
    goBack() {
      this.$router.push('/recruit');
    }
  },
  created() {
    if (this.$route.params.data === undefined) {
      // recruitDatas.filter(data => data.path[0] === this.$route.params.data)
      this.data = recruitDatas.filter(data => data.path[0] === this.$route.params.id)[0];
    } else {
      this.data = this.$route.params.data;
    }
  }
}
</script>

<style scoped>
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

  .contents-section {
    background: #f9f9f9;
    width: 100%;
    padding: 120px 0;
  }

  .position-description-card {
    background: #fff;
    width: 1000px;
    margin: 0 auto;
  }

  .card-head {
    width: 100%;
    height: 150px;
    background: #f1f1f1;
    border-bottom: 1px solid #e6e6e6;
    border-top: 1px solid #888;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recruit-home {
    text-align: center;
    width: 200px;
  }
  .recruit-home img {
    width: 45px;
    cursor: pointer;
  }
  .name {
    flex: 1;
    font-family: AppleSDGothicNeoUL00;
    font-size: 25px;
    color: #1e1e1e;
    margin-bottom: 10px;
  }

  .d-day {
    width: 200px;
    text-align: center;
    font-size: 20px;
    color: #1e1e1e;
  }
  .card-body {
    flex: 1;
    font-family: AppleSDGothicNeoUL00;
    padding: 20px 0 20px 90px;
  }

  .title {
    font-size: 17px;
  }

  ul {
    padding-left: 20px;
  }
  ul li {
    list-style-type: disc;
  }
  a {
    text-decoration: none;
  }

  .track {
    /* color: red; */
    font-family: AppleSDGothicNeoSB00;
    cursor: pointer;
  }

  .tags {
    margin-top: 30px;
  }
  .card-footer {
    text-align: center;
    padding-top: 30px;
    padding-bottom: 50px;
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
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline:  none;
  }

  .inquiry-btn {
    background: #fff;
    font-family: AppleSDGothicNeoM00;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.59;
    letter-spacing: -.66px;
    text-align: center;
    border: 2px solid #795cf2;
    border-radius: 4px;
    padding: 22px 76px;
    margin: 0 15px;
    cursor: pointer;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
    color: #795cf2;
  }

  
</style>