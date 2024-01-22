export interface RegisterUser {
    numberMobile: string;
    documentType: string;
    document: string;
    documentDate: string;
    birthDate: string;
    gender: string;
    email: string;
    emailConfirm: string;
    pin: string;
    pinConfirm: string;
    checkContract: boolean;
}