import React, { useEffect } from 'react';
import api from '../../services/api';
import { logout } from '../../services/auth';


export default function Home({ history }) {

    useEffect(() => {
        document.title = "Home | My App";
    },[]);

    async function handleLogout() {
        const { data } = await api.get('/logout');
        logout();
        history.push('/', data);
    }

    return(
        <div>
            <h1>Welcome Home!</h1>
            <button type="button" onClick={handleLogout}>Logout</button>
        </div>
    );
}