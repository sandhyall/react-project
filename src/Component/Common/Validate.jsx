const validate = (form) => {
  const errors = {};

  if (!form.name || form.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters';
  }

  if (
    !form.email ||
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(form.email)
  ) {
    errors.email = 'Enter a valid email';
  }


  if (!form.age || form.age < 10 || form.age > 100) {
    errors.age = 'Age must be between 10 and 50';
  }

  if (!form.password) {
    errors.password = 'Password is required';
  } else if (form.password.length < 8) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (form.password !== form.confirmPassword) {
    
    
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};

export default validate;
