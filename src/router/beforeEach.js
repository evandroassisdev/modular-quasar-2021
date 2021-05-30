import store from '../store'

export default (to, from, next) => {
  var auth = false
  console.log(store().state.storeDefault.storeMBR.isAuth)
  if (to.matched.some(record => record.meta.auth)) {
    if (!auth) {
      next('/login')
    } else {
      next()
    }
  } else if (!auth) {
    next()
  } else {
    next('/')
  }
}
