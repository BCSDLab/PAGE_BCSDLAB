<template>
  <div class="footer">
    <div class="CONTENT__CONTAINER">
      <div class="footer__logo">
        <img
          @click="goUrl('')"
          src="https://static.koreatech.in/assets/bcsdlab_img/topnav__bcsdlab__logo.png" alt="">

      </div>
      <div class="footer__copyright">
        COPYRIGHT © {{ new Date().getFullYear()}} BCSD LAB. ALL RIGHTS RESERVED.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {

      }
    },
    methods: {
      goUrl: function(link) {
        this.$router.push(link)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    height: 179px;
    background-color: #778391;
  }

  .footer__logo img{
    margin-top: 59px;
    height: 22.7px;
    cursor: pointer;
  }

  .footer__copyright {
    margin-top: 20px;
    float: left;
    font-family: AppleSDGothicNeoL00;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.48px;
    text-align: left;
    color: #ffffff;
  }
</style>
