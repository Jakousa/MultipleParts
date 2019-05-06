import { render } from 'react-dom'

const apps = []

export const rerender = () => {
  const { pathname } = window.location
  const application = apps.find(app => app.route === pathname)
  render(application.app(), document.getElementById('root'))
}

const { pushState } = window.history

window.history.pushState = function () {
  pushState.apply(history, arguments)
  rerender()
}

export const addApplication = (app, route) => {
  apps.push({ app, route })
}