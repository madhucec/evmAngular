
export class AuthConstants{

    public static clientRoot='http://cecpms.com.s3-website.us-east-2.amazonaws.com/';
    //public static clientRoot='http://localhost:4200/';
    public static apiRoot='';
    public static stsAuthority='https://users.cecpms.be/auth/realms/dental';
        
    //public static response_type: 'id_token token';
    public static response_type: 'code';
    public static scope: 'profile';
    public static filterProtocolClaims: true;
    public static loadUserInfo: true;
}