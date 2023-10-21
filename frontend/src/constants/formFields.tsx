/* eslint-disable @typescript-eslint/no-unused-vars */
const loginFields = [
  {
    labelText: "Email Address",
    labelFor: "emailaddress",
    id: "emailaddress",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email Address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "currentpassword",
    isRequired: "true",
    placeholder: "Password",
  },
];

const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Email address",
    labelFor: "emailaddress",
    id: "emailaddress",
    name: "email",
    type: "email",
    autoComplete: "email",
    isRequired: true,
    placeholder: "Email Address",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "currentpassword",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirmpassword",
    id: "confirmpassword",
    name: "confirmpassword",
    type: "password",
    autoComplete: "confirmpassword",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

export { loginFields, signupFields };
