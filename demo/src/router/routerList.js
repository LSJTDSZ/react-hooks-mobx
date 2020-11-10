import Home from "../view/Home/Home"
import Hooks from "../view/Hooks/Hooks"
let RouterList = [{
      path: '/home',
      component: Home
    }, {
      path: '/hooks',
      component: Hooks
    }, {
      path: '/',
      redirect: '/home'
    }]
export default RouterList