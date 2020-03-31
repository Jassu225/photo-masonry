import { Validator } from 'simple-vue-validator';

export function passwordValidator (value) {
  return Validator.custom(() => {
    if (Validator.isEmpty(value)) {
      return 'Password is required';
    } else if (value.length < 6) {
      return 'Password should not be less than 6 characters';
    } else if (value.length > 16) {
      return 'Password should not be greater than 16 characters';
    }
  });
}

export function emailValidator (value) {
  return Validator.custom(() => {
    const emailValidatorRegex = new RegExp('^\\w+([.-]?\\w+)*@\\w+([.-]?\\w+)*(\\.\\w{2,3})+$');
    if (Validator.isEmpty(value)) {
      return 'E-mail is required';
    } else if (!emailValidatorRegex.test(value)) {
      return 'E-mail must be valid';
    }
  });
}