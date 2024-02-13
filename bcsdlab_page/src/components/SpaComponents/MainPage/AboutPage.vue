<template>
  <!--topnav 배경부-->
  <div class="about-section">
    <div class="topnav"></div>
    <section__about></section__about>
    <section__rewards></section__rewards>
    <section__track></section__track>
    <section__activity></section__activity>
    <section__mentor></section__mentor>
    <section__submit></section__submit>
  </div>
</template>

<script>

import MainBannerComponent from './Components/MainBannerComponent'
import AboutSection from './Components/AboutSection'
import RewardsSection from './Components/RewardsSection'
import TrackSection from './Components/TrackSection'
import ActivitySection from './Components/ActivitySection'
import MenotrSection from './Components/MentorSection'
import SubmitSection from './Components/SubmitSection'
import VueAgile from '../../SharedComponents/SlideComponent/Agile'

export default {
  name: 'AboutPage',
  components: {
    'main-banner': MainBannerComponent,
    'section__about': AboutSection,
    'section__rewards': RewardsSection,
    'section__track': TrackSection,
    'section__activity': ActivitySection,
    'section__mentor': MenotrSection,
    'section__submit': SubmitSection,
    'agile': VueAgile
  }
}
</script>

<style scoped>
  .topnav {
    height: 70px;
    width: 100%;
    background-color: #795cf2;
  }

</style>
