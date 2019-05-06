const apps = []

export const rerender = () => {
  const { pathname } = window.location
  const app = apps.find(app => app.route === pathname)
  app.render(document.getElementById('root'))
}

const { pushState } = window.history

window.history.pushState = function () {
  pushState.apply(history, arguments)
  rerender()
}

export const addApplication = (render, route) => {
  apps.push({ route, render })
}