import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
      <img src="../images/logo.png" alt="logo" height={50} width={100} />

      <div className="header">
        <NavLink to='/home'>Home</NavLink>
      </div>
    </div>
  )
}

export default Navbar

