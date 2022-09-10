<template>
  <div class="track">
    <div class="track__container CONTENT__CONTAINER">
      <div class="track__title">
        TRACKS
      </div>

      <div class="track__introduce-title">
        BCSD Lab의 TRACK을 소개합니다.
      </div>

      <div class="track__introduce-desc">
        5개의 TRACK으로 이루어져 있으며 <br>
        각 TRACK은 Mentor, Regular, Beginner로 구성되어 있습니다. <br>
      </div>

      <div class="track__card__group">
        <div
          @click="goUrl(trackData.link)"
          v-for="(trackData, index) in trackDatas"
          :class="{'track__card__third': index%3===2}"
          class="track__card">

          <div class="track__card__name">{{ trackData.name }}</div>
          <div class="track__card__member-count">{{ trackData.memberCount }}명 <span>이 함께 하고 있습니다.</span></div>
          <div class="track__card__link">자세히 보기</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as api from '../../../../api/api'

  export default {
    name: 'Track',
    data () {
      return {
        trackDatas: [
          {
            name: "Front-End",
            memberCount: "02111",
            link: "track/frontend"
          },
          {
            name: "Back-End",
            memberCount: "06",
            link: "track/backend"
          },
          {
            name: "Android",
            memberCount: "06",
            link: "track/android"
          },
          {
            name: "Game",
            memberCount: "10",
            link: "track/game"
          },
          {
            name: "UI/UX",
            memberCount: "07",
            link: "track/uiux"
          }
        ]
      }
    },
    methods: {
      goUrl: function(link) {
        this.$router.push(link)
        document.documentElement.scrolltop = 0;
      },
      

      async getTotalTrackInfo() {
        for(const [idx, i] of [1,2,3,4,7].entries()){
          let track = await api.getTrackInfo(i);
          this.trackDatas[idx].memberCount = String(track.data.Members.length).padStart(2,0);
        }
      }
    },
    
    created() {
      this.getTotalTrackInfo()
    }
  } 
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    user-select: none;
  }

  .track {
    height: 917px;
  }

  .track__title {
    margin-top: 97px;
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

  .track__introduce-title {
    margin-top: 76px;
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

  .track__introduce-desc {
    font-family: AppleSDGothicNeoL00;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: -0.6px;
    text-align: left;
    color: #778391;
    margin-top: 28px;
  }

  .track__card__group {
    margin-top: 56px;
  }

  .track__card {
    float: left;
    width: 293px;
    height: 211px;
    border-radius: 4px;
    background-color: #f2f5f8;
    text-align: center;
    margin-right: 140px;
    margin-bottom: 84px;
    cursor: pointer;
  }

  .track__card__third {
    margin-right: 0;
  }

  .track__card__name {
    margin-top: 32px;
    font-family: AppleSDGothicNeoB00;
    font-size: 24px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.88;
    letter-spacing: normal;
    color: #3d4551;
  }

  .track__card__member-count {
    font-family: AppleSDGothicNeoL00;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 0.94;
    letter-spacing: normal;
    text-align: center;
    color: #3d4551;
    margin-top: 4px;
    margin-bottom: 13px;
  }

  .track__card__member-count span {
    opacity: 0.72;
    font-family: AppleSDGothicNeoL00;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: normal;
    text-align: left;
    color: #3d4551;
    position: relative;
    bottom: 2px;
  }

  .track__card__link {
    margin-left: 69px;
    width: 156px;
    height: 32px;
    border-radius: 4px;
    background-color: #795cf2;
    text-align: center;
    padding-top: 17px;
    font-family: AppleSDGothicNeoL00;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #ffffff;
  }

  .track__card:hover {
    border-radius: 4px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.13);
    background-color: #795cf2;
  }

  .track__card:hover .track__card__name, .track__card:hover .track__card__member-count, .track__card:hover .track__card__member-count span {
    color: white;
  }

  .track__card:hover .track__card__link {
    background: white;
    color: #795cf2;
  }


</style>
