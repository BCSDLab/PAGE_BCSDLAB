<template>
  <div class="submit__wrapper">
    <div class="CONTENT__CONTAINER">
      <div class="submit__title">
        BCSD Lab과 함께 하실 준비가 되었나요?
      </div>

      <div class="submit__desc">
        BCSD Lab과 함께 할 코리아텍 학우 여러분들을 환영합니다.<br>
        함께 프로젝트를 이어나가고, 자신의 능력을 향상시키고 싶은 분들은 많은 지원바랍니다.
      </div>

      <div class="submit__btns">
        <span
          @click="clickBtn('https://forms.gle/Yc532QgUHETc7eez7')"
          class="submit__btn-submit">지원하기</span>

        <span
          @click="clickBtn('https://www.facebook.com/BCSD-Lab-1727922507422214/')"
          class="submit__btn-ask">문의하기</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Submit',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      clickBtn: function(url) {
        window.open(url)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div {
    user-select: none;
  }
  .submit__wrapper {
    height: 480px;
    background-color: #f2f5f8;
  }

  .submit__title {
    padding-top: 82px;
    height: 48px;
    font-family: AppleSDGothicNeoM00;
    font-size: 40px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: -1.2px;
    text-align: center;
    color: #3d4551;
  }

  .submit__desc {
    margin-top: 30px;
    height: 54px;
    font-family: AppleSDGothicNeoL00;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #778391;
  }

  .submit__btns {
    margin-top:72px;
    text-align: center;
    width: 1160px;
    height: 83.9px;
  }

  .submit__btn-submit {
    cursor: pointer;
    width: 231px;
    height: 83.9px;
    border-radius: 4px;
    background-color: #795cf2;
    font-family: AppleSDGothicNeoM00;
    font-size: 22px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 83.9px;
    letter-spacing: -0.66px;
    text-align: center;
    color: #f2f5f8;
    float: left;
    margin-right: 30px;
    margin-left: 336px;
    border: solid 2px #795cf2;
  }

  .submit__btn-ask {
    cursor: pointer;
    width: 231px;
    height: 83.9px;
    border-radius: 4px;
    font-family: AppleSDGothicNeoM00;
    font-size: 22px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 83.9px;
    letter-spacing: -0.66px;
    text-align: center;
    float: left;
    border: solid 2px #795cf2;
    background-color: #f2f5f8;
    color: #795cf2;

  }
</style>
