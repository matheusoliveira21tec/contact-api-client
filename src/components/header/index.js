import React from 'react';
import { Navbar, Container, Title } from 'rbx';
import { Link } from 'react-router-dom';
import "../../styles/header.scss";

function Header() {

    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                <Link to="/"><Title size={2} spaced className="has-text-purple">
                        People Api
                    </Title></Link>
                    
                </Navbar.Brand>


            </Container>
        </Navbar>
    )
}

export default Header;
