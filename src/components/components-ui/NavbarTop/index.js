import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export const NavbarTop = () => {
    return (<Navbar variant="dark" expand="lg" className={'header-bg'}>
        <Container>
            {/*<Navbar.Brand href="#home"><Logo /></Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className={'text-decoration-none'}>
                        <Link className={'text-decoration-none text-white-50'} to={'/creatures'}>
                            Creatures
                        </Link>
                    </Nav.Link>
                    <Nav.Link >
                        <Link className={'text-decoration-none text-white-50'} to={'/profile'}>
                            Profile
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}