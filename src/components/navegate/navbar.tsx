import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom"

const NavbarSito = () => {
    return (
        <>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
            <a href="#" className="navbar-brand"><i className="fas fa-capsules me-2"></i> Healty-Traker</a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#obatin-nav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="obatin-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item pe-2">
                  <Link to="/SignUp"><button className="btn btn-white">Sign Up</button></Link>
                </li>
                <li className="nav-item ps-2">
                  <Link to="/SignIn"><button className="btn btn-primary">Sign In</button></Link>
                </li>
              </ul>
            </div>
          </div>
        </Navbar>
        <section>
            <Outlet>
            </Outlet>
        </section>
        </>
    )
}

export default NavbarSito