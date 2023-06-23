"use client";

import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {

    const pathname = usePathname();

    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} href="/">
                        ChoreWise
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" />
                    <Navbar.Collapse id="main-navbar">
                        <Nav>
                            <Nav.Link as={Link} href={"/login"} active={pathname === "/login"}>
                                Login
                            </Nav.Link>
                            <Nav.Link as={Link} href={"/signup"} active={pathname === "/signup"}>
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}