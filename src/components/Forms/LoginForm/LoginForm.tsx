import React from "react";
import { Formik } from "formik";
import { LoginInput, PasswordInput } from "../../dataEntry/Input/Input";
import Button from "../../interaction/Button"
import {LoginFormRequest} from "../../../pages/LoginPage/LoginPage";
import { LoginFormValidationSchema } from "../../../validationSchemas/validations";

interface LoginFormProps {
    onSubmit: (values: LoginFormRequest) => void;
}

const initialValues: LoginFormRequest = {
    email: "",
    password: "",
}

const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
}) => {
    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={LoginFormValidationSchema}
        >
           {({values, handleSubmit, handleChange, touched, errors}) => (
                <form className="loginForm" onSubmit={handleSubmit}>
                        <LoginInput 
                            name="email" 
                            labelText="Email" 
                            onChange={handleChange}
                            defaultValue={values.email}
                            error={touched.email ? errors.email : ""}
                        />
                    <PasswordInput name="password" labelText="Password" visibilityToggle />
                    <Button 
                        buttonType="submit"  
                        className="button"
                        label="Sign In" 
                        type="primary"
                    >
                    </Button>
                </form>
            )}
        </Formik>
    )
}

export default LoginForm;
