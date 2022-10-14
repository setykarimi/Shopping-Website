import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const initialValues = {
    email: "",
    password: "",
}

const onSubmit = (values) => {
    console.log(values);
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Passsword is required'),
})

const Login = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })
    return (
        <div className="form">
            <h3>Login Form</h3>
            <form onSubmit={onSubmit}>
                <Input formik={formik} label="Email" name="email" type="email" />
                <Input formik={formik} label="Password" name="password" type="password" />
                <button type="submit" disabled={!formik.isValid} className="btn-orange">Login</button>
            </form>
            <Link to="/signup" style={{marginTop: "1em", display: "block"}}>Dont have an account? <b className="orange">Signup</b></Link>
        </div>
    );
}

export default Login;