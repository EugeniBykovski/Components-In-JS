import 'bootstrap/dist/css/bootstrap.min.css';
import App from "../components/App";
import '../styles/main.css';

function Render({ root, app }) {
  this.render = () => {
    document.querySelector(root).insertAdjacentHTML('beforeend', app)
  }
}

const root = new Render({
  root: '#app',
  app: App()
})

root.render()