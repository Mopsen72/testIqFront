import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: {
      value: '',
      logo: `<path
    d="M18.78 17.7197L13.6613 12.601C14.6529 11.3763 15.2498 9.82 15.2498 8.12503C15.2498 4.19657 12.0534 1.00009 8.1249 1.00009C4.19644 1.00009 1 4.19654 1 8.125C1 12.0535 4.19648 15.2499 8.12493 15.2499C9.8199 15.2499 11.3761 14.653 12.6009 13.6615L17.7196 18.7802C17.8658 18.9264 18.0578 18.9999 18.2498 18.9999C18.4418 18.9999 18.6338 18.9264 18.7801 18.7802C19.0733 18.4869 19.0733 18.0129 18.78 17.7197ZM8.12493 13.7499C5.02296 13.7499 2.5 11.227 2.5 8.125C2.5 5.02302 5.02296 2.50005 8.12493 2.50005C11.2269 2.50005 13.7499 5.02302 13.7499 8.125C13.7499 11.227 11.2269 13.7499 8.12493 13.7499Z"
    fill="#CFCFCF"
      /> ` ,
      id: 'search',
    },
    month: [{
      title: 'Октябрь 2021', weaks: [
        {
          weak: [
            { day: new Date(2021, 8, 27), id: 'sept27', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 8, 28), id: 'sept28', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 8, 29), id: 'sept29', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 8, 30), id: 'sept30', dayEvent: { title: 'Шашлыки', people: 'Филипп Коров, Дмитрий Табасков', discription: 'lorem lorem lorem lorem' } },
            { day: new Date(2021, 9, 1), id: 'oct1', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 2), id: 'oct2', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 3), id: 'oct3', dayEvent: { title: '', people: '', discription: '' } },
          ],
          id: 'weak1'
        },
        {
          weak: [
            { day: new Date(2021, 9, 4), id: 'oct4', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 5), id: 'oct5', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 6), id: 'oct6', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 7), id: 'oct7', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 8), id: 'oct8', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 9), id: 'oct9', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 10), id: 'oct10', dayEvent: { title: '', people: '', discription: '' } },
          ],
          id: 'weak2'
        },
        {
          weak: [
            { day: new Date(2021, 9, 11), id: 'oct11', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 12), id: 'oct12', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 13), id: 'oct13', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 14), id: 'oct14', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 15), id: 'oct15', dayEvent: { title: 'Летний лагерь', people: 'Алексей Маральный', discription: '' } },
            { day: new Date(2021, 9, 16), id: 'oct16', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 17), id: 'oct17', dayEvent: { title: '', people: '', discription: '' } },
          ],
          id: 'weak3'
        },
        {
          weak: [
            { day: new Date(2021, 9, 18), id: 'oct18', dayEvent: { title: 'Аква кутеж', people: 'Владимир Пупкин, Дмитрий Медев', discription: '' } },
            { day: new Date(2021, 9, 19), id: 'oct19', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 20), id: 'oct20', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 21), id: 'oct21', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 22), id: 'oct22', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 23), id: 'oct23', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 24), id: 'oct24', dayEvent: { title: '', people: '', discription: '' } },
          ],
          id: 'weak4'
        },
        {
          weak: [
            { day: new Date(2021, 9, 25), id: 'oct25', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 26), id: 'oct26', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 27), id: 'oct27', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 28), id: 'oct28', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 29), id: 'oct29', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 30), id: 'oct30', dayEvent: { title: '', people: '', discription: '' } },
            { day: new Date(2021, 9, 31), id: 'oct31', dayEvent: { title: '', people: '', discription: '' } },
          ],
          id: 'weak5'
        },
      ]
    }]
  },
  getters: {
    getSearch(state) {
      return state.search
    },
    getMonth(state) {
      return state.month
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
