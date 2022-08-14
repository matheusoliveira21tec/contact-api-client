import React, { Fragment, useState, useEffect} from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import PeopleService from '../../services/people';
import "../../styles/form.scss";
import { useParams } from 'react-router-dom';
const New = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [status, setStatus] = useState(null);
    const {id}= useParams();
    const initializePeople = async () => {
        const people = await PeopleService.list(id);
        setName(people.data.nome);
        setEmail(people.data.email);
        setTelefone(people.data.telefone);
        setCelular(people.data.celular);
    };

    useEffect(() => {
        initializePeople()
    }, []);
    
    const handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            await PeopleService.update(id,{ nome: name, email: email, telefone: telefone, celular: celular});
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
                            name="celular"
                        />
                    </Control>
                </Field>
                <Field>
                    <Control>
                        <Column.Group>
                            <Column className="has-text-right">
                                <Button color="white" outlined>Update</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {status == "error" &&
                    <Help color="danger">Problema ao editar</Help>
                }
                {status == "success" &&
                    <Help color="primary">Editado com sucesso.</Help>
                }
            </form>
        </Fragment>
    )


}

export default New;