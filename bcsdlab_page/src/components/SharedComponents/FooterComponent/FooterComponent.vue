<template>
  <div class="footer">
    <div class="CONTENT__CONTAINER">
      <div class="footer__logo">
        <img
          @click="goUrl('')"
          src="../../../assets/logo.svg" alt="bcadlab logo">

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
    goUrl: function (link) {
      this.$router.push(link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer {
    position: relative;
    height: 160px;
    background-color: #778391;
    z-index:1;
  }

  .footer__logo img{
    margin-top: 59px;
    height: 37px;
    cursor: pointer;
  }

  .footer__copyright {
    margin-top: 11px;
    float: left;
    font-family: AppleSDGothicNeoL00;
    font-size: 13px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: -0.48px;
    text-align: left;
    color: #ffffff;
  }
</style>
