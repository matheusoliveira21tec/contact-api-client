import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card } from "rbx";
import "../../styles/form.scss";
import NewForm from "../../components/new";
import Header from "../../components/header";


const New = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="users">
            <Container>
                <Column.Group centered className="users-edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Nova Pessoa
                        </Title>
                        <Card>
                            <Card.Content>
                                <NewForm />
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

            </Container>
        </Section>
    </Fragment>
);
export default New;