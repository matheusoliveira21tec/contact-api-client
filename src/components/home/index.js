import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Column } from "rbx";
import { Navigate } from "react-router-dom";
function Home() {
    const [redirectToNew, setRedirectToNew] = useState(false);
    const [redirectToView, setRedirectToView] = useState(false);
    if (redirectToNew)
    return <Navigate replace to={{ pathname: "/new" }} />
else if (redirectToView)
    return <Navigate replace to={{ pathname: "/list" }} />
    return (
        <Fragment>
            <Column.Group centered>
                <form>
                    <Column size={12}>
                        
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <a onClick={e => setRedirectToNew(true)} className="button is-white has-text-custom-purple">New</a>
                                    </Column>
                                    <Column>
                                    <a onClick={e => setRedirectToView(true)} className="button is-white has-text-custom-purple">View</a>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default Home;