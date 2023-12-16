
export const formValidators = {
    firstName: /^[a-zA-Z\s]*$/,
    lastName:   /^[a-zA-Z\s]*$/, 
    mail: '^[a-zA-Z0-9._]+@[a-zA-Z]+\\.[a-zA-Z.]{2,6}$',
    phone: /^\+\d{2,3}-\d{10}$/,/*except +, not allow letter */
}