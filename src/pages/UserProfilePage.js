import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
    return ( 
        <Navbar>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">My Profile</h1>
            <UserProfile></UserProfile>
        </Navbar>
    );
}

export default UserProfilePage;