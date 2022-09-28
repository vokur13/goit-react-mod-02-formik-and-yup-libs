export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { login, password } = e.target.elements;
    console.log(login.value, password.value);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="login">
        Login
        <input type="text" name="login" />
      </label>
      <label htmlFor="password">
        Password
        <input type="password" name="password" id="" />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import styled from 'styled-components';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   login: yup.string().required(),
//   password: yup.string().min(6).max(16).required(),
// });

// const initialValues = {
//   login: '',
//   password: '',
// };

// const Input = styled(Field)`
//   color: #2a2a2a;
// `;

// export const LoginForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <Form autoComplete="off">
//         <label htmlFor="login">
//           Login
//           <Input type="text" name="login" />
//           <ErrorMessage name="login" component="div" />
//         </label>
//         <br />
//         <label htmlFor="password">
//           Password
//           <Input type="password" name="password" />
//           <ErrorMessage name="password" component="div" />
//         </label>
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   );
// };
