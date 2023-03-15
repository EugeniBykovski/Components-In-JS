function Navbar(props) {
  const element = props
    .map(item => `<li class="nav-item"><a class="nav-link" id="link-${item}" key="${item}" href="#">${item}</a></li>`)
    .join('')

  return (
    `
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">Navbar</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            ${element}
          </ul>
        </div>
      </nav>
    `
  )
}

export default Navbar