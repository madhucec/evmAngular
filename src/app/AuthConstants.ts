
export class AuthConstants{

    //public static clientRoot='http://cecpms.com.s3-website.us-east-2.amazonaws.com/';
    public static clientRoot='http://localhost:4200/';
    public static apiRoot='http://localhost:8300/pms-gateway/';
    public static stsAuthority='https://users.cecpms.be/auth/realms/dental';
    public static patientService='patient-service/';
    public static addUserUrl= 'http://localhost:8300/pms-gateway/user-services/dental/createuser';
    public static userprofileUrl= 'http://localhost:8300/pms-gateway/user-services/userprofile';
    
        
    //public static response_type: 'id_token token';
    public static response_type: 'code';
    public static scope: 'openid profile';
    public static filterProtocolClaims: true;
    public static loadUserInfo: true;
}