import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginService } from "../../services/loginService";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";

const initialValues = {
    email: "",
    password: "",
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Passsword is required'),
})

const LoginForm = () => {
    const navigate = useNavigate();
    const setAuth = useAuthActions();
    const auth = useAuth();

    const query = useQuery(); 
    const redirect = query.get('redirect') || "/";

    useEffect(() => {
        if(auth) navigate(`/${redirect}`)
        
    },[redirect,auth])

    const onSubmit = async (values) => {
        try{
            const {data} = await loginService(values);
            setAuth(data);
            // localStorage.setItem('authState',JSON.stringify(data))
            navigate(`/${redirect}`);
        }catch(error){
          toast.error(error.response.data.message)
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })


    return (
        <div className="form">
            <h3>Login Form</h3>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label="Email" name="email" type="email" />
                <Input formik={formik} label="Password" name="password" type="password" />
                <button type="submit" disabled={!formik.isValid} className="btn-orange">Login</button>
            </form>
            <Link to={`/signup?redirect=${redirect}`} style={{ marginTop: "1em", display: "block" }}>Dont have an account? <b className="orange">Signup</b></Link>
        </div>
        );
}

export default LoginForm;