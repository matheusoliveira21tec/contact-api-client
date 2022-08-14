import React, { Fragment } from 'react';
import { Column, Section, Title, Container, Card } from "rbx";
import "../../styles/form.scss";
import EditForm from "../../components/edit";
import Header from "../../components/header";
import DeleteForm from "../../components/delete";

const Edit = () => (
    <Fragment>
        <Header />
        <Section size="medium" className="edit">
            <Container>
                <Column.Group centered className="edit">
                    <Column size={4}>
                        <Title size={5} className="has-text-grey has-text-left">
                            Editar Pessoa
                        </Title>
                        <Card>
                            <Card.Content>
                                <EditForm />
                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <DeleteForm/>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>

            </Container>
        </Section>
    </Fragment>
);
export default Edit;