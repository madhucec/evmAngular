
export class AuthConstants{

    //public static clientRoot='http://cecpms.com.s3-website.us-east-2.amazonaws.com/';
    //public static clientRoot='http://evm-dev.rcm-cec.com/';
    public static clientRoot='http://localhost:4200/';
    public static apiRoot='http://localhost:8300/gateway-service/';
    //public static apiRoot= 'http://gateway-service-lb-536453444.us-east-1.elb.amazonaws.com/';
    public static stsAuthority='https://keycloak-dev.rcm-cec.com/realms/dental';
    public static patientService='patient-registration/';
    public static addUserUrl= 'http://localhost:8300/gateway-service/user-service/dental/createuser';
    public static userprofileUrl= 'http://gateway-service-lb-536453444.us-east-1.elb.amazonaws.com/gateway-service/user-service/userprofile';
    public static clientId='dental-frontend';
    
        
    //public static response_type: 'id_token token';
    public static response_type: 'code';
    public static scope: 'openid profile';
    public static filterProtocolClaims: true;
    public static loadUserInfo: true;
}