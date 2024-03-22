<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="topnav__container">
    <div class="topnav__logo">
      <img
        @click="goUrl('/')"
        src="../../../assets/logo.png" alt="bcsdlab logo">
    </div>

    <div class="topnav__menu__container">
      <div
        v-for="menu in menus"
        class="topnav__menu"
        @click="goUrl(menu.link)">
        {{ menu.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Topnav',
  data () {
    return {
      menus: [
        {
          name: 'ABOUT',
          link: '/about'
        },
        {
          name: 'TRACKS',
          link: '/track/frontend'
        },
        {
          name: 'ACTIVITY',
          link: '/activity'
        },
        {
          name: 'TECH',
          link: '/tech'
        },
        {
          name: 'RECRUIT',
          link: '/recruit'
        }
      ]
    }
  },
  methods: {
    goUrl: function (link) {
      if (link === '/tech') {
        window.open('https://blog.bcsdlab.com/', '_blank')
      } else {
        this.$router.push(link)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topnav__container {
    width: 100%;
    min-width: 1400px;
    float: left;
    height: 70px;
    background: transparent;
    line-height: 70px;
    z-index: 2;
    position: absolute;
    user-select: none;
    font-family: AppleSDGothicNeoM00;
  }

  .topnav__logo {
    float:left;
    width: 200px;
    height: 70px;
    line-height: 70px;
  }

  .topnav__logo img{
    float:left;
    margin-top: 5px;
    cursor: pointer;
    width: 280px;
  }

  .topnav__menu__container {
    float:right;
  }

  .topnav__menu {
    float: left;
    margin-right: 50px;
    color: white;
    cursor: pointer;
  }
</style>
