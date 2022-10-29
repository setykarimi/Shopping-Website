import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signupUser } from "../../services/signupService";
import { useAuth, useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";


const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(4, 'Name length is not valid'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]{11}/, 'Invalid Phone Number').nullable(),
    password: Yup.string().required('Passsword is required'),
    passwordConfirm: Yup.string().required('Password confirmation is reauired').oneOf([Yup.ref('password')], 'Your passwords do not match.')
})


const SignupForm = () => {
    // Query
    const query = useQuery();
    const redirect = query.get('redirect') || "/";
    // Navigate
    const navigate = useNavigate();
    // Authentication
    const setAuth = useAuthActions();
    const auth = useAuth()

    useEffect(() => {
        if(auth) navigate(`/${redirect}`)
    },[redirect,auth])


   
    // Submit Function
    const onSubmit = async (values) => {
        const {name, email, phoneNumber, password} = values
        const userData = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        };

        try {
            const { data } = await signupUser(userData);
            setAuth(data);
            // localStorage.setItem('authState',JSON.stringify(data))
            navigate(redirect);
        } catch (error) {
            if(error.response && error.response.data.message){
                toast.error(error.response.data.message)
            }
        }
    }


    // Formik Object
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })

    return (
        <div className="bg-white w-max m-auto py-4 px-8 rounded-md shadow-md">
            <h3 className="text-2xl font-black text-blue-500 mb-3">Signup Form</h3>

            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label="Name" name="name" />
                <Input formik={formik} label="Email" name="email" type="email" />
                <Input formik={formik} label="Phone Number" name="phoneNumber" type="tel" />
                <Input formik={formik} label="Password" name="password" type="password" />
                <Input formik={formik} label="Password Confirmation" name="passwordConfirm" type="password" />
                <button
                 type="submit" 
                 disabled={!formik.isValid}
                 className="w-full py-2 rounded-md font-black border border-blue-300 text-blue-300 transition-all ease-in-out hover:bg-blue-400 hover:text-white disabled:text-white disabled:bg-gray-400 disabled:border-none">Signup</button>
            </form>
            <Link to={`/login?redirect=${redirect}`} className="mt-4 flex justify-center">
            Already have an account? <b className="font-black text-md text-blue-400 underline ml-1">Login</b></Link>
        </div>
        );
}

export default SignupForm;