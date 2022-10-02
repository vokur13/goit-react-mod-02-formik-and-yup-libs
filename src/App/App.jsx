import { Component } from 'react';
import { GlobalStyle } from '../components/GlobalStyle';
import { ProductReviewForm } from '../components/ProductReviewForm';
// import { LoginForm } from '../components/LoginForm';
import { LoginFormFormik } from '../components/Formik';

export class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        {/* <LoginForm /> */}
        <LoginFormFormik />
        {/* <ProductReviewForm /> */}
      </>
    );
  }
}
