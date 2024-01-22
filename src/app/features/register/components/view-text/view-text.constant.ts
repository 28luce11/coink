import { registerUser } from "src/app/shared/constants/register-user";

export interface ViewText {
    type: 'police' | 'medium' | 'small';
    imageUrl: string;
    title?: string;
    subtitle: string
    alt: string;
}

export const viewTextOptions: Record<number, ViewText> = {
    [registerUser.viewPag.one]: {
        type: 'small',
        imageUrl: '/assets/images/Oink.svg',
        subtitle: 'Para comenzar, por favor ingresa <b>tu número celular.</b>',
        alt: 'Logo Coink'
    },
    [registerUser.viewPag.two]: {
        type: 'medium',
        imageUrl: '/assets/images/Oink-M.svg',
        title: '¿CUÁLES SON TUS DATOS?',
        subtitle: 'Ahora necesitamos saber algunos datos tuyos',
        alt: 'Logo Coink Medium'
    },
    [registerUser.viewPag.three]: {
        type: 'police',
        imageUrl: '/assets/images/OinkPolicia.svg',
        title: 'ESTAS MUY CERCA DE SER PARTE DE COINK.',
        subtitle: 'Solo es necesario que leas detenidamente el contrato que se encuentra al final de esta pantalla y lo aceptes.',
        alt: 'Logo Coink policia'
    }
}
