import React from "react";
import { RouteProps, useHistory } from "react-router";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import { LoginRegisterLayout } from "../../layouts/LoginRegisterLayout";

export interface LoginFormRequest {
    email: string;
    password: string;
}

export const LoginPage: React.FC<RouteProps> =  () => {
    const history = useHistory();

    const handleSubmit = () => {
        console.log("Submit");
        history.push("/dashboard");
    };
    
    return (
        <LoginRegisterLayout>
            <div className="loginPage">
                <div className="login">
                    <h3 className="signIntoAccount">Sign In:</h3>
                    <LoginForm onSubmit={handleSubmit} />
                </div>
            </div>
        </LoginRegisterLayout>
    )
}
