import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signupUser } from "../../services/signupService";
import { useAuthActions } from "../../Providers/AuthProvider";
import { useQuery } from "../../hooks/useQuery";


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


const SignupForm = (props) => {
    const navigate = useNavigate();
    const setAuth = useAuthActions();
    const query = useQuery();
    const redirect = query.get('redirect') || "/";
    console.log(redirect);

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

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })

    return (
        <div className="form">
            <h3>Signup Form</h3>

            <form onSubmit={formik.handleSubmit}>
                <Input formik={formik} label="Name" name="name" />
                <Input formik={formik} label="Email" name="email" type="email" />
                <Input formik={formik} label="Phone Number" name="phoneNumber" type="tel" />
                <Input formik={formik} label="Password" name="password" type="password" />
                <Input formik={formik} label="Password Confirmation" name="passwordConfirm" type="password" />
                <button type="submit" disabled={!formik.isValid} className="btn-orange">Signup</button>
            </form>
            <Link to={`/login?redirect=${redirect}`} style={{ marginTop: "1em", display: "block" }}>Already have an account? <b className="orange">Login</b></Link>
        </div>);
}

export default SignupForm;