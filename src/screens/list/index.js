import React, { Fragment } from 'react';
import {Section} from "rbx";
import "../../styles/form.scss";
import List from "../../components/list";
import Header from "../../components/header";


const Lista = () => (
    <Fragment>
        <Header/>
        <Section size="medium" className="list">
                <List/>
        </Section>
    </Fragment>
);
export default Lista;