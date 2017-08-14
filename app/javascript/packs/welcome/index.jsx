

const Welcome = {}
import Home from './home'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home name="Welcome" />,
    document.body.appendChild(document.createElement('div')),
  )
})