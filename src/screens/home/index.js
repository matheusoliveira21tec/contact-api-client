import React, { Fragment } from 'react';
import Header from "../../components/header";
import { Column, Section, Container, Card} from "rbx";
import "../../styles/home.scss";
import Home from "../../components/home";
const Login = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="auth">
            <Container>
                <Column.Group centered>
                    <Column size={3}>
                        <Card>
                            <Card.Content>
                                 <Home/>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
);

export default Login;