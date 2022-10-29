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
        if (auth) navigate(`/${redirect}`)

    }, [redirect, auth])

    const onSubmit = async (values) => {
        try {
            const { data } = await loginService(values);
            setAuth(data);
            // localStorage.setItem('authState',JSON.stringify(data))
            navigate(`/${redirect}`);
        } catch (error) {
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
        <div className="bg-white w-max m-auto py-4 px-8 rounded-md shadow-md">
            <h3 className="text-2xl font-black text-blue-500 mb-3">Login Form</h3>
            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label="Email" name="email" type="email" />
                <Input formik={formik} label="Password" name="password" type="password" />
                <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="w-full py-2 rounded-md font-black border border-blue-300 text-blue-300 transition-all ease-in-out hover:bg-blue-400 hover:text-white disabled:text-white disabled:bg-gray-400 disabled:border-none">Login</button>
            </form>
            <Link
                to={`/signup?redirect=${redirect}`}
                className="mt-4 flex justify-center" >
                Don't have an account?
                <b className="font-black text-md text-blue-400 underline ml-1">Signup</b>
            </Link>
        </div>
    );
}

export default LoginForm;