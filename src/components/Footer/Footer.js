import Navbar from '../Navbar/Navbar'

function Footer() {
  return (
    `
      <footer class="footer">
        ${Navbar(['About', 'Contact'])}
      </footer>
    `
  )
}

export default Footer