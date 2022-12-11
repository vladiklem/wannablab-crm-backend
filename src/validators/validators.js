const isUsernameValid = (username) => {
  return (
    typeof username === "string" && username.length >= 3 && username.length
  );
};

const isEmailValid = (email) => {
  return (
    typeof email === "string" &&
    /[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+/.test(email)
  );
};

const isPasswordValid = (password) => {
  return (
    typeof password === "string" &&
    password.length >= 8 &&
    password.length <= 36
  );
};
