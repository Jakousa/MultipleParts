import App0 from './App'
import App1 from './App1'
import App2 from './App2'

import { addApplication, rerender } from './router'

addApplication(App0, '/')
addApplication(App1, '/app1')
addApplication(App2, '/app2')

rerender()