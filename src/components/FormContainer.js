// src/StudentList.js
import React from 'react';
import AuthContext from './AuthContext';
export default () => (
    <section>
        <h1>Formulaire de connection</h1>
        <ul>
        <AuthContext.Consumer>
        {
            value => 
            (
                value.map( s => <li> s.name </li> )
            )
        }
        </AuthContext.Consumer>
        </ul>
    </section>
);