export default function validateInfo(values) {
  let errors = {};
  const re = /\S+@\S+\.\S+/;

  if (!values.email) {
    errors.email = 'This field is required';
  } else if (!re.test(values.email)) {
    errors.email = 'Invalid email format';
  }

  if (!values.password) {
    errors.password = 'This field is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 characters or more';
  }
  return errors;
}
