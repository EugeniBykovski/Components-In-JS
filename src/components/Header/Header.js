import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    `
      <header class="header">
        ${Navbar(['Home', 'Features', 'Pricing'])}
      </header>
    `
  )
}

export default Header