export class Auth {
    //Related to the session
    sessionId: string;
    tokenSession: string;
    expirationDateToken: Date;
    //Related to the user
    username: string;
    userId: string;
    userRole: string;
    isAuthenticated: boolean;
    //Related to the device
    kindOfDevice: string;
    modelOfDevice: string;
    os: string;
    webBrowser: string;
    ipAddress: string;
    timeZone: string;

}