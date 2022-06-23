import React from "react";
import { Formik } from "formik";
import { LoginInput, PasswordInput } from "../dataEntry/Input/Input";
import Button from "../interaction/Button"
import {LoginFormRequest} from "../../pages/LoginPage/LoginPage";

interface LoginFormProps {
    onSubmit: (values: LoginFormRequest) => void;
}

const initialValues: LoginFormRequest = {
    login: "",
    password: "",
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
}) => {
    const handleClick = () => {
        console.log("Click");
    }

    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}>
           {({values, handleSubmit, handleChange}) => (
                <form className="loginForm" onSubmit={handleSubmit}>
                        <LoginInput 
                            name="login" 
                            labelText="Login" 
                            onChange={handleChange}
                            defaultValue={values.login}
                        />
                    <PasswordInput name="password" labelText="Password" visibilityToggle />
                    <Button 
                        buttonType="button"  
                        className="button"
                        label="Sign In" 
                        type="primary"
                        onClick={handleClick}
                    >
                    </Button>
                </form>
            )}
        </Formik>
    )
}

export default LoginForm;
