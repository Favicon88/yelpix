export const state = () => ({
  activeSection: 0
})

export const getters = {
  getActiveSection(state) {
    return state.activeSection
  }
}

export const mutations = {
  changeActiveSection(state, numb) {
    state.activeSection = numb
  }
}
