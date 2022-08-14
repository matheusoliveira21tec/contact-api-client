import React, { Fragment, useEffect, useState } from 'react';
import { Column, List, Card, Label, Section } from "rbx";
import "../../styles/list.scss";
import PeopleService from '../../services/people';
import { Navigate } from "react-router-dom";
async function fetchPeople() {
    const response = await PeopleService.index();
    if (response.data.length >= 1) {
        return response.data;
    }
}
const Lista = () => {
    const [people, setPeople] = useState([]);
    const [current_people, setCurrentPeople] = useState({ nome: "", email: "", id: "", telefone: "", celular: "" });
    const [redirectToEdit, setRedirectToEdit] = useState(false);

    useEffect(() => {
        fetchPeople().then(data => {
            setPeople(data.reverse())
            setCurrentPeople(data[0])
        })
    }, []
    )
    if (redirectToEdit)
        return <Navigate replace to={{ pathname: `/edit/${current_people.id}` }} />

    async function select(item) {
        setCurrentPeople(item);
        setRedirectToEdit(true);
    }
    return (

        <Fragment>

            <List className="list">
                {people.map((item, key) =>
                    <List.Item key={key} onClick={() => select(item)}>
                        <Section>
                            <Card>
                                <Card.Content >
                                    <Label className="has-text-white">Nome: {item.nome}</Label>
                                    <Label className="has-text-white">Email: {item.email}</Label>
                                    <Label className="has-text-white">Telefone: {item.telefone}</Label>
                                    <Label className="has-text-white">Celular: {item.celular}</Label>
                                </Card.Content>
                            </Card>
                        </Section>
                    </List.Item>
                )}
            </List>
        </Fragment>
    )
}

export default Lista;