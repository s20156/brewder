import React, { useState } from "react";
import { RouteProps, useHistory } from "react-router";
import { LoginRegisterLayout } from "../../layouts/LoginRegisterLayout";

export interface LoginFormRequest {
    login: string;
    password: string;
}

export const LoginPage: React.FC<RouteProps> =  () => {
    const history = useHistory();
    const [alert] = useState<boolean>(false);
    
    return (
        <LoginRegisterLayout>
            <div className="loginPage">
                <div className="login">
                    <h3 className="signIntoAccount">Sign In using your LDAP credentials</h3>
                </div>
            </div>
        </LoginRegisterLayout>
    )
}
