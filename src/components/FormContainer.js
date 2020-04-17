// src/StudentList.js
import React from 'react';
import AuthContext from './AuthContext';
export default () => (
    <section>
        <h1>Formulaire de connection</h1>
        <ul>
        <AuthContext.Consumer>
            {
                value => (
                    <p>{value.isAuth ? "OK" : "KO"}</p>
                )
            }
        </AuthContext.Consumer>
        </ul>
    </section>
);