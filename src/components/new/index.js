import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import PeopleService from '../../services/people';
import "../../styles/form.scss";
function New() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [status, setStatus] = useState(null);
    const handleSubmit = async (evt) => {
        evt.preventDefault();

        try {
            await PeopleService.create({ nome: name, email: email, celular: celular, telefone: telefone });
            setStatus("success")
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <Field>
                    <Control>
                        <Label className="has-text-white">Nome</Label>
                        <Input
                            type="name"
                            value={name || ""}
                            onChange={e => setName(e.target.value)}
                            required
                            name="name"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-white">Email</Label>
                        <Input
                            type="email"
                            value={email || ""}
                            onChange={e => setEmail(e.target.value)}
                            required
                            name="email"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-white">Telefone</Label>
                        <Input
                            type="telefone"
                            value={telefone || ""}
                            onChange={e => setTelefone(e.target.value)}
                            required
                            name="telefoene"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Label className="has-text-white">Celular</Label>
                        <Input
                            type="celular"
                            value={celular || ""}
                            onChange={e => setCelular(e.target.value)}
                            required
                            name="celular"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="white" outlined>Create</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status == "error" &&
                    <Help color="danger">Problema ao criar</Help>
                }
                {status == "success" &&
                    <Help color="primary">Criado com sucesso.</Help>
                }
            </form>
        </Fragment>
    )


}

export default New;