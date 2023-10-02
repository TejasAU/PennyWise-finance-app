import { ProfilePic } from '/src/components/profile/ProfilePic.jsx';
import { UserDetails } from '/src/components/profile/UserDetails.jsx'


export function ProfileDetails() {
    return(
        <main className="bg-rich-black text-off-white h-full">
            <div class = "profile-pic mt-20 flex justify-center">
                <ProfilePic/>
            </div>
            <div class = "user-info grid">
                <UserDetails/> 
            </div>
        </main>
    )
}