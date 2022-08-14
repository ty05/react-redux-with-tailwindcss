import './index.css';
import Nav from './component/Nav';
import CartMain from './component/CartMain';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { calculateByAmount } from './features/Cart/cartSlice';
import Modal from './component/Modal';
import { check } from './features/modals/modalSlice';


function App() {
  const dispatch = useDispatch()
  const { items } = useSelector((state) => state.cart)
  const { modalOpen } = useSelector((state) => state.modal)

  useEffect(() => {
    dispatch(calculateByAmount())
  },[items])



  return (
    <div>
       { modalOpen && <Modal />}
       <Nav />
       <CartMain />
    </div>
  );
}


export default App;
