import { useAuth } from '../../Providers/AuthProvider'
const Checkout = () => {
    const auth = useAuth()
    return (
        <div>
        {auth ? <><p>name: {auth.name}</p>
            <p>name: {auth.email}</p>
            <p>name: {auth.phoneNumber}</p> </> : <p>please login</p>}
            
        </div>
    );
}

export default Checkout;