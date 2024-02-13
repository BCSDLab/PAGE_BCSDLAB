import Vue from 'vue'
import Router from 'vue-router'

import MainPage from '@/components/SpaComponents/MainPage/MainPage'
import ActivityPage from '@/components/SpaComponents/ActivityPage/ActivityPage'
import TrackPage from '@/components/SpaComponents/TrackPage/TrackPage'
import RecruitPage from '@/components/SpaComponents/RecruitPage/RecruitPage'
import RecruitDetailPage from '@/components/SpaComponents/RecruitPage/RecruitDetailPage'
import AboutPage from '@/components/SpaComponents/MainPage/AboutPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/about',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/activity',
      name: 'ActivityPage',
      component: ActivityPage
    },
    {
      path: '/track',
      name: 'TrackPage',
      component: TrackPage,
      children: [
        {
          path: 'frontend',
          component: TrackPage
        },
        {
          path: 'backend',
          component: TrackPage
        },
        {
          path: 'android',
          component: TrackPage
        },
        {
          path: 'uiux',
          component: TrackPage
        },
        {
          path: 'game',
          component: TrackPage
        },
        {
          path: 'ios',
          component: TrackPage
        }
      ]

    },
    {
      path: '/recruit',
      name: 'RecruitPage',
      component: RecruitPage
    },
    {
      path: '/recruit/:id',
      name: 'RecruitDetailPage',
      component: RecruitDetailPage,
      props: true
    }
  ]
})
