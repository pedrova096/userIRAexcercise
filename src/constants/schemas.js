import {string, object} from 'yup';

const errors = {
  required: 'Field Required',
  emailBadFormatted: 'Email bad formatted',
};

export const createValidationSchema = data => object().shape(data);

export const REQUIRED_STRING = string().nullable().required(errors.required);
export const REQUIRED_EMAIL = string()
  .email(errors.emailBadFormatted)
  .required(errors.required)
  .lowercase();
