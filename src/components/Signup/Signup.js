import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link } from "react-router-dom";

const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirm: ""
}

const onSubmit = (values) => {
    console.log(values);
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required').min(4, 'Name length is not valid'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone number is required').matches(/^[0-9]{11}/, 'Invalid Phone Number').nullable(),
    password: Yup.string().required('Passsword is required'),
    passwordConfirm: Yup.string().required('Password confirmation is reauired').oneOf([Yup.ref('password')], 'Your passwords do not match.')
})



const SignupForm = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })
    return (
        <div className="form">
        <h3>Signup Form</h3>
            <form onSubmit={onSubmit}>
                <Input formik={formik} label="Name" name="name" />
                <Input formik={formik} label="Email" name="email" type="email" />
                <Input formik={formik} label="Phone Number" name="phoneNumber" type="tel" />
                <Input formik={formik} label="Password" name="password" type="password" />
                <Input formik={formik} label="Password Confirmation" name="passwordConfirm" type="password" />
                <button type="submit" disabled={!formik.isValid} className="btn-orange">Signup</button>
            </form>

            <Link to="/login" style={{marginTop: "1em", display: "block"}}>Already have an account? <b className="orange">Login</b></Link>
        </div>);
}

export default SignupForm;