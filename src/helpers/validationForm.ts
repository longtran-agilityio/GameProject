export const EmailRequired = {
  required: 'Email is required',
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: 'Invalid Email',
  },
}

export const PasswordRequired = {
  required: 'Password is required',
  minLength: { value: 8, message: 'min length is 8' },
}

export const FieldEmpty = {
  required: 'This field is required',
}
