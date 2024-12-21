import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  state: () => ({ 
    count: Number(localStorage.getItem('count')),
    country: 'china'
  }),
  actions: {
    modifyCountry() {
      // console.log(this);
      this.country = '中国'
    }
  },
  getters: {
    upper() {
      return this.country.toUpperCase()
    }
  }
});
