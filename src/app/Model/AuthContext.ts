import { UserProfile } from './UserProfile';

export class AuthContext {
    userProfile: UserProfile;

    
    get isClientAdmin(){
        console.log(this.userProfile.authorities);
        return !!this.userProfile.authorities!=null && !!this.userProfile.authorities.find(a=>a=='manage-users');
    }

    get isPMSadmin(){
        return !!this.userProfile.authorities!=null && !!this.userProfile.authorities.find(a=>a=='manage-clients');
    }
}