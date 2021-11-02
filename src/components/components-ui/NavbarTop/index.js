import {Container, Nav, Navbar} from "react-bootstrap";

export const NavbarTop = () => {
    return (<Navbar variant="dark" expand="lg" className={'header-bg'}>
        <Container>
            {/*<Navbar.Brand href="#home"><Logo /></Navbar.Brand>*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/creatures">Creatures</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}