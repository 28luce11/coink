interface RegisterConstant {
  emailPattern: string,
  viewPag: {
    one: number,
    two: number,
    three: number
  },
  titles: Record<number, string>
}

export const registerUser: RegisterConstant = {
  emailPattern: '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$',
  viewPag: {
    one: 1,
    two: 2,
    three: 3
  },
  titles: {
    1: 'NÚMERO CELULAR',
    2: 'DATOS DE CUENTA',
    3: 'FINALIZAR'
  }
};
