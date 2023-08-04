<template>
  <div>
    <div class="topnav"></div>
    <div class="track-tab">
      <button
        class="track-btn"
        :class="{ active: selectedTrack === track}"
        @click="selectTrack(track)"
        v-for="(track, index) in tracks"
        :key="index">
        {{ track }}
      </button>
    </div>
    <transition name="slide-fade">
    <div v-if="show">
      <div class="about">
        <div class="title">WHAT WE STUDY</div>
        <div class="about-info">
          <div
            class="about-info-box"
            v-for="(data, index) in aboutDatas"
            :key="index">
            <div class="about-info__title">{{ data.title }}</div>
            <div
              v-html="data.description"
              class="about-info__description">
            </div>
          </div>
        </div>

      </div>
      <div class="curriculum">
        <div class="title">CURRICULUM</div>
        <table class="curriculum-table">
          <thead>
            <tr>
              <th class="week">주차</th>
              <th class="contents">교과목</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(curriculum, index) in curriculums"
              :key="index">
              <td class="week-data">{{ curriculum.week }}</td>
              <td>
                <div class="curriculum-content-container">
                  <div
                    class="curriculum-content"
                    :style="contentStyle(curriculum.contents.length, index)"
                    v-for="(content, index) in curriculum.contents"
                    :key="index">
                    <div class="curriculum-content__title">
                      <div class="list"></div>
                      {{ content.title }}
                    </div>
                    <div
                      class="curriculum-content__description"
                      v-for="(description, index) in content.descriptions"
                      :key="index">
                      {{ description }}
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="members">
        <div class="title">MEMBERS</div>
        <div class="members__profile-container">
          <div class="members__profile-row">
            <div
              class="members__profile-card mentor-card"
              v-for="(member, index) in members"
              v-if="member.position == 'Mentor'"
              :key="index">
              <img
                class="members__profile-img"
                :src="member.image_url"
                alt="">
              <div class="members__profile-info">
                <div class="position mentor">{{ member.position }}</div>
                <div class="name">{{ member.name }}</div>
              </div>
            </div>
          </div>
          <div class="members__profile-row">
            <div
              v-for="(member, index) in members"
              class="members__profile-card regular-card"
              v-if="member.position == 'Regular'"
              :key="index">
              <img
                class="members__profile-img"
                :src="member.image_url"
                alt="">
              <div class="members__profile-info">
                <div class="position regular">{{ member.position }}</div>
                <div class="name">{{ member.name }}</div>
              </div>
            </div>
          </div>
          <div class="members__profile-row">
            <div
              v-for="(member, index) in members"
              class="members__profile-card beginner-card"
              v-if="member.position == 'Beginner'"
              :key="index">
              <img
                class="members__profile-img"
                :src="member.image_url"
                alt="">
              <div class="members__profile-info">
                <div class="position beginner">{{ member.position }}</div>
                <div class="name">{{ member.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tools">
        <div class="title">TECH STACK</div>
        <div class="tools-info">
          <div
            v-for="(teck, index) in teckStacks"
            :key="index"
            class="tool">
            <img
              class="tool__logo"
              :src="teck.image_url"
              :alt="teck.name">
            <div class="tool__name">{{ teck.name }}</div>
            <div class="tool__use">{{ teck.description }}</div>
          </div>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import { trackDatas } from '../../../static/trackDatas'
import * as api from '../../../api/api'

export default {
  name: 'TrackPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tracks: ['Front-End', 'Back-End', 'Android', 'UI/UX', 'Game'],
      selectedTrack: 'Front-End',
      aboutDatas: null,
      curriculums: null,
      members: null,
      teckStacks: null,
      show: true
    }
  },
  watch: {
    $route (to, from) {
      if (to.path.split('/')[2] === 'frontend') {
        this.selectedTrack = 'Front-End'
        trackDatas.forEach((data) => {
          if (this.selectedTrack === data.name) {
            this.aboutDatas = data.about
            this.curriculums = data.curriculums
          }
        })
      }
    }
  },
  methods: {
    selectTrack (track) {
      this.show = false
      this.selectedTrack = track
      trackDatas.forEach((data) => {
        if (this.selectedTrack === data.name) {
          this.aboutDatas = data.about
          this.curriculums = data.curriculums
        }
      })
      console.log(track)
      this.getTrackInfo(track)

      switch (track) {
        case 'Front-End':
          this.$router.push('frontend')
          break
        case 'Back-End':
          this.$router.push('backend')
          break
        case 'Android':
          this.$router.push('android')
          break
        case 'UI/UX':
          this.$router.push('uiux')
          break
        case 'Game':
          this.$router.push('game')
          break
      }
    },
    contentStyle (length, index) {
      if (length % 2 === 0 && length > 2) {
        if (index === length - 1 || index === length - 2) {
          return {
            'marginBottom': '0'
          }
        }
      } else {
        if (index === length - 1 && length > 2) {
          return {
            'marginBottom': '0'
          }
        }
      }
    },
    async getTrackInfo (track) {
      let id, result
      // console.log(track)
      if (track === 'Android') id = 1
      else if (track === 'Back-End') id = 2
      else if (track === 'Front-End') id = 3
      else if (track === 'Game') id = 4
      else if (track === 'UI/UX') id = 7
      if (track) {
        result = await api.getTrackInfo(id)
        let allMember = result.data.Members
        this.teckStacks = result.data.TechStacks
        this.members = allMember.filter(member => member.track === track.split('-').join(''))
      }
      this.show = true
    }
  },
  beforeRouteUpdate (to, from, next) {
    let path = to.fullPath.split('/')
    console.log(path)
    switch (path[2]) {
      case 'frontend':
        this.selectedTrack = 'Front-End'
        break
      case 'backend':
        this.selectedTrack = 'Back-End'
        break
      case 'android':
        this.selectedTrack = 'Android'
        break
      case 'uiux':
        this.selectedTrack = 'UI/UX'
        break
      case 'game':
        this.selectedTrack = 'Game'
        break
    }

    trackDatas.forEach((data) => {
      if (this.selectedTrack === data.name) {
        this.aboutDatas = data.about
        this.curriculums = data.curriculums
      }
    })

    document.documentElement.scrollTop = 0
    this.getTrackInfo(this.selectedTrack)
    next()
  },
  created () {
    console.log(this.selectedTrack)
    let path = this.$router.history.current.path.split('/')
    switch (path[2]) {
      case 'frontend':
        this.selectedTrack = 'Front-End'
        break
      case 'backend':
        this.selectedTrack = 'Back-End'
        break
      case 'android':
        this.selectedTrack = 'Android'
        break
      case 'uiux':
        this.selectedTrack = 'UI/UX'
        break
      case 'game':
        this.selectedTrack = 'Game'
        break
    }

    trackDatas.forEach((data) => {
      if (this.selectedTrack === data.name) {
        this.aboutDatas = data.about
        this.curriculums = data.curriculums
      }
    })

    document.documentElement.scrollTop = 0
    this.getTrackInfo(this.selectedTrack)
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

  .track-tab {
    border-collapse: collapse;
    border-bottom: solid 1px #e4e7ea;
    text-align: center;
    margin-bottom: 97.5px;
  }

  .track-btn {
    width: 232px;
    border: none;
    /* border-bottom: solid 1px #e4e7ea; */
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -0.6px;
    text-align: center;
    color: #3d4551;
    padding: 22px 0px 24px 0px;
    cursor: pointer;
    background: transparent;
  }

  .track-btn:focus {
    outline: none;
  }

  .active {
    color: #795cf2;
    margin-bottom: 0px;
    border-bottom: 2px solid #795cf2;
  }

  .title {
    height: 48px;
    font-family: AppleSDGothicNeoEB00;
    font-size: 40px;
    font-weight: normal;
    line-height: 1;
    letter-spacing: normal;
    text-align: center;
    color: #3d4551;
    margin-bottom: 79px;
  }
  /* about */

  .about {
    text-align: center;
    margin: 0 auto 175px auto;
  }

  .about-info {
    display: flex;
    justify-content: center;
  }

  .about-info-box {
    border: solid 1px #e4e7ea;
    width: 387px;
    padding-top: 50px;
    padding-bottom: 47px;
    text-align: center;
  }

  .about-info__title {
    font-family: AppleSDGothicNeoB00;
    height: 24px;
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 17px;
    letter-spacing: -0.6px;
    color: #3d4551;
  }

  .about-info__description {
    font-family: AppleSDGothicNeoL00;
    height: 43px;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    letter-spacing: -0.48px;
    color: #778391;
  }
  /* curriculum */

  .curriculum {
    width: 1160px;
    margin: 0 auto 217px auto;
  }

  table {
    width: 100%;
    border-top: 1px solid #e4e7ea;
  }

  thead {
    height: 56px;
  }

  thead th {
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: -0.6px;
    color: #3d4551;
    padding-top: 13px;
    padding-bottom: 13px;
    border-bottom: 1px solid #e4e7ea;
  }

  tbody td {
    border-bottom: 1px solid #e4e7ea;
  }

  tbody tr td:first-child {
    text-align: center;
  }

  .week {
    width: 25%;
  }

  .contents {
    width: 75%;
  }

  .week-data {
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    line-height: 2.7;
    letter-spacing: -0.6px;
    text-align: center;
    color: #778391;
  }

  .list {
    background-image: url('https://static.koreatech.in/bcsdlab_page_assets/img/48.png');
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 13px;
  }

  .curriculum-content-container {
    padding-top: 30px;
    padding-bottom: 35px;
    display: flex;
    flex-wrap: wrap;
  }

  .curriculum-content {
    width: 50%;
    margin-bottom: 20px;
  }

  .curriculum-content__title {
    font-family: AppleSDGothicNeoB00;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.4;
    letter-spacing: -0.6px;
    color: #3d4551;
    margin-bottom: 13px;
    display: flex;
    align-items: center;
  }

  .curriculum-content__description {
    font-family: AppleSDGothicNeoL00;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.25;
    letter-spacing: -0.48px;
    color: #778391;
    margin-bottom: 7px;
    margin-left: 25px;
  }

  .curriculum-content .curriculum-content__description:last-child {
    margin-bottom: 0;
  }

  /* member */

  .members {
    margin-bottom: 118px;
  }
  .members__profile-container {
    display: block;
    justify-content: center;
    /* max-height: 1044px; */
    background-color: #f2f5f8;
    padding-top: 208px;
    padding-bottom: 134px;
  }

  .members__profile-card {
    display: flex;
    flex-direction: column;
    width: 200.5px;
    height: 295px;
    margin: 0 10px;
    border: solid 1px #e4e7ea;
  }

  .members__profile-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 300px;
  }

  .mentor-card {
    margin-bottom: 73px;
  }

  .regular-card, .beginner-card {
    margin-bottom: 35px;
  }

  .members__profile-img {
    width: 100%;
    height: 201.3px;
  }

  .members__profile-info {
    background-color: #ffffff;
    padding: 14.6px 0 22px 17.6px;
  }

  .position {
    text-transform: uppercase;
    font-family: AppleSDGothicNeoB00;
    font-size: 13px;
    font-weight: normal;
    line-height: 1.46;
    letter-spacing: -0.39px;
    text-align: left;
  }

  .mentor {
    color: #795cf2;
  }

  .regular {
    color: #1abc9c;
  }

  .beginner {
    color: indianred;
  }

  .name {
    text-transform: uppercase;
    font-family: AppleSDGothicNeoSB00;
    font-size: 19px;
    font-weight: normal;
    letter-spacing: normal;
    text-align: left;
    color: #3d4551;
    padding-top: 13.3px;
  }

  .email {
    font-family: AppleSDGothicNeoL00;
    font-size: 15px;
    font-weight: normal;
    letter-spacing: normal;
    text-align: left;
    color: #778391;
    padding-top: 1.8px;
    text-overflow:ellipsis;
    white-space:nowrap;
    word-wrap:normal;
    width: 170px;
    overflow:hidden;
  }

  /* Tool */

  .tools {
    margin-bottom: 172.5px;
  }

  .tools-info {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 300px;
  }

  .tool {
    text-align: center;
    padding-top: 37px;
    padding-bottom: 41px;
    width: 200px;
    height: 164px;
    margin: 0 10px;
  }

  .tools-info .tool:last-child {
    margin-right: 0;
  }

  .tool__logo {
    width: auto;
    height: 96px;
  }
  .tool__name {
    font-family: AppleSDGothicNeoSB00;
    font-size: 20px;
    font-weight: normal;
    line-height: 1.4;
    letter-spacing: 0.5px;
    color: #3d4551;
    margin-top: 14px;
    margin-bottom: 2px;
  }

  .tool__use {
    font-family: AppleSDGothicNeoR00;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.36;
    letter-spacing: 0.7px;
    color: #778391;
    text-transform: uppercase;
  }

  .slide-fade-enter-active {
    transition: all .2s ease-in;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }

</style>
