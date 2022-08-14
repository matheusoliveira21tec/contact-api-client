import React, { useState } from 'react';
import { Button } from "rbx";
import PeopleService from '../../services/people';
import { Navigate, useParams } from "react-router-dom";
import "../../styles/form.scss";

function Delete() {
    const {id}= useParams();
    const [redirectToHome, setRedirectToHome] = useState(false);

    const deleteUser = async () => {
        if (window.confirm('Tem certeza que deseja excluir essa pessoa?')) {
            await PeopleService.delete(id);
            setRedirectToHome(true);
        }
    }

    if (redirectToHome)
        return <Navigate replace to={{ pathname: "/" }} />

    return (
        <Button color="danger" onClick={() => deleteUser()}>
            Excluir pessoa
        </Button>
    )
}

export default Delete;