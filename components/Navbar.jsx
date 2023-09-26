import { Link } from 'react-router-dom'

export default function Navbar(){
  return(
    <div id="navbar">
      <Link to="/">All Puppies</Link>
      <Link to="/newplayerform">New Player Form</Link>
    </div>
  )
}