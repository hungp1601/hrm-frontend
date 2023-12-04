import { throttle } from '@/utils/lodash'

export default function ({ store }, inject) {
  const device = {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ),
    isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    screen: '',
    windowWidth: window.innerWidth,
    breakpoint: 0,
  }
  store.registerModule('device', {
    namespaced: true,
    state: () => device,
    mutations: {
      SET_DEVICE (state, value) {
        Object.assign(state, value)
      },
    },
  })
  if (device.isMobile) {
    store.commit('toggleMenu', false)
    document.body.classList.add('is-mobile')
  }
  if (device.isIOS) {
    document.body.classList.add('is-ios')
  }
  const onWindowResize = () => {
    let screen
    const breakpoints = ['xs', 'sm', 'md', 'lg', 'hd', 'hdp', 'xl']
    const ww = window.innerWidth
    if (ww < 786) screen = 'xs'
    if (ww >= 786) screen = 'sm'
    if (ww >= 992) screen = 'md'
    if (ww >= 1200) screen = 'lg'
    if (ww >= 1366) screen = 'hd'
    if (ww >= 1600) screen = 'hdp'
    if (ww >= 1920) screen = 'xl'
    document.body.classList.remove(...breakpoints)
    document.body.classList.add(screen)
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight / 100 + 'px'
    )
    store.commit('device/SET_DEVICE', {
      windowWidth: ww,
      isMobile: ww <= 786,
      screen,
      breakpoint: breakpoints.indexOf(screen),
    })
  }
  // @ts-ignore
  if (!process.server) onWindowResize()
  window.addEventListener('load', onWindowResize)
  window.addEventListener('resize', throttle(onWindowResize, 100))
  inject('device', store.state.device)
}
