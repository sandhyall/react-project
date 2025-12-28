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
  if (!form.fullname.trim())
     errors.fullname = "Full Name is required";
  if (!form.address.trim())
     errors.address = "Address is required";
  if (!form.city.trim()) 
    errors.city = "City is required";
  if (!form.postcode.trim())
     errors.postcode = "Post Code is required";
  if (!form.country.trim()) 
    errors.country = "Country is required";
  if (!form.phone.trim()) 
    errors.phone = "Phone Number is required";
  

  return errors;
};

export default validate;
