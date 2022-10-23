import { useAuth } from "../Providers/AuthProvider";

const ProfilePage = () => {
    const userData = useAuth();
    console.log(userData);
    return (
        <div>
           <p>{userData.name}</p>
           <p>{userData.email}</p>
           <p>{userData.phoneNumber}</p>
           <p>{userData.isAdmin}</p>
        </div>
    );
}

export default ProfilePage;