import { useAuth } from "../Providers/AuthProvider";

const ProfilePage = () => {
    const userdata = useAuth()
    return ( <div>
        Profile
    </div> );
}
 
export default ProfilePage;