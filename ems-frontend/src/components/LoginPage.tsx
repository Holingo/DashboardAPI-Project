// src/components/LoginPage.tsx
import React from 'react';

const LoginPage: React.FC = () => {

    return (
        <div>
            <a href="http://localhost:8080/oauth2/authorization/discord">
                <button className="btn">Zaloguj przez Discord</button>
            </a>
        </div>
    );
};

export default LoginPage;