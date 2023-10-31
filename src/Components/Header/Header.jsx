import Robot from '../Robot/Robot'
import './Header.css'

// eslint-disable-next-line react/prop-types
function Header({ scroll }) {
  return (
    <div className='headerDiv' style={{
        backgroundPosition: `0 -${ (window.innerWidth < 800 ? scroll - 20 : scroll + 120) * 1.5 }px`,
        borderBottom: `solid 4px rgb(${ (scroll + 20) * 20 }, ${ (scroll + 20) * 10 }, ${ (scroll + 10) * 10 })`,
      }}>
        <h1>WELC</h1>
        <Robot scroll={scroll} />
        <h2>ME</h2>
      </div>
  )
}

export default Header