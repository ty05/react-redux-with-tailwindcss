import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { check } from '../features/modals/modalSlice'

const CartMain = () => {
  
  const {items, amount, total} = useSelector((state)=>state.cart)
  const dispatch = useDispatch()

  if(amount < 1) {
    return(
        <div className="items-center justify-center min-h-screen p-10">
            <h1 className="text-center text-lg md:text-4xl">There is no items in your cart</h1>
        </div>
    )
  } 
    
  return (
    <div className="m-auto flex flex-col">
        <div className='m-10'>
            {items.map((item) => {
                return <CartItem key={item.id} item={item} />
            })}
        </div>
        <div className="justify-center object-right p-11 relative">
            <button onClick={() => dispatch(check())} className="text-white p-4 bg-amber-800 absolute top-0 right-5 md:right-64 mb-12 rounded-lg">Remove All</button>
        </div>
        <div className="pt-14 pb-4 border-t-2 border-b-slate-200"></div>
        <div className="flex flex-row items-center justify-center md:justify-between px-64 pb-20 space-x-16">
            <div>
                <p className="text-2xl md:text-4xl">Total</p>
            </div>
            <div>
                <p className="text-2xl md:text-4xl">${total}</p>
            </div>
        </div>
    </div>
  )
}

export default CartMain
