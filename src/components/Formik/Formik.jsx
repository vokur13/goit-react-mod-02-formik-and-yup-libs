import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Input } from './Formik.styled';
import * as yup from 'yup';

let schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(18).required(),
});

const initialValues = {
  login: '',
  password: '',
};

export const LoginFormFormik = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage component="div" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <Input type="password" name="password" id="" />
          <ErrorMessage component="div" name="password" />
        </label>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
