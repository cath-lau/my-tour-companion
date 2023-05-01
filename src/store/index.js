import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activities: [],
    activityTypes: [
      {
        id: 'gastronomy',
        label: 'Gastronomie',
        icon_class: 'silverware-fork-knife'
      },
      {
        id: 'culture',
        label: 'Culture',
        icon_class: 'bank-outline'
      }
    ],
    currentType: {
      id: 'gastronomy',
      label: 'Gastronomie'
    }
  },
  getters: {
    activities: state => {
      return state.activities
    },
    currentType: state => {
      return state.currentType
    }
  },
  mutations: {
    SET_ACTIVITIES(state, activities) {
      state.activities = activities
    },
    SET_TYPE(state, type) {
      state.currentType = type
    }
  },
  actions: {
    loadActivities(context) {
      axios
        .get('api.json', { baseURL: window.location.origin })
        .then(response => response.data)
        .then(activities =>
          {
            context.commit('SET_ACTIVITIES', activities)
          })
    },
    setCurrentType(context, type) {
      context.commit('SET_TYPE', type)
    }
  },
  modules: {
  }
})
