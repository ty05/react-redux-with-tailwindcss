import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../features/Cart/cartSlice'


const CartItem = ({item}) => {

  const dispatch = useDispatch()


  
  return (
    <>
        <div className='container max-w-4xl relative'>
            <div className='mt-10 flex flex-col items-center justify-center md:justify-start md:flex-row m-auto  space-y-8 md:space-y-0 md:space-x-12 md:p-12 md:p-18'>
                <img src={item.img} className="max-w-lg md:max-w-3xl w-64 h-64"></img>
                <div className='items-center justify-center md:justify-start text-center md:text-left space-y-5'>
                    <p className="max-w-lg text-2xl text-center md:text-left m-auto">{item.title}</p>
                    <div className='text-left justify-start'>
                        <p className='text-center md:text-left md:justify-start text-lg'>$ {item.price}</p>    
                    </div>
                    <button onClick={() => dispatch(removeItem(item.id))} className="border border-red-800 rounded-lg text-white text-center bg-red-700 p-2">Delete</button>
                </div>
                <div className="md:absolute md:top-28 md:right-2 flex flex-row md:flex-col items-center justify-center space-y-0 space-x-5 md:space-x-0 md:space-y-5">
                    <button onClick={()=>dispatch(increment(item.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                    <p className=''>{item.amount}</p>
                    <button onClick={() => 
                        {if(item.amount === 1){
                            dispatch(removeItem(item.id))
                        } else {
                            dispatch(decrement(item.id))
                        }}}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </>

  )
}

export default CartItem
