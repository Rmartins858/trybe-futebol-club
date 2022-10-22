const validateEmail = (email: string) => {
  const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (!reg.test(email)) throw new Error('Incorrect email or password');
};

export default validateEmail;
