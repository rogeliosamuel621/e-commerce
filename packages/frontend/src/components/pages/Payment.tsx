import React from 'react';
import '../../styles/pages/payment.css';
import '../../styles/toastify.css';

import { Nav } from '../containers';
import { productsData } from '../../products';
import { ProductForBuy } from '../molecules';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../hooks';
import Cookies from 'universal-cookie';
import { Loader } from '../atoms';

const Payment = () => {
  const cookies = new Cookies();
  const { finished, isAuth, token } = useAuth(cookies.get('token'));
  const params = useParams<RouterParams>();
  const product = [productsData[params.productID - 1]];

  if (!finished) {
    return <Loader border="5px" width="30px" height="30px" />;
  }

  return (
    <>
      <Nav isAuth={isAuth} />
      <section className="Payment-info">
        <ProductForBuy products={product} />
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
    </>
  );
};

interface RouterParams {
  productID: any;
}

export default Payment;
