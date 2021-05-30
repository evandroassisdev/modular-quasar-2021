import info from './serverinfo'
import { LocalStorage } from 'quasar'

var UserLogado = () => {
  if (LocalStorage.getItem('token')) return true
  return false
}

export default { info, UserLogado }
