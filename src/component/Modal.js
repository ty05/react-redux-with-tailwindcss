import React from 'react'
import { removeAll } from '../features/Cart/cartSlice'
import { useDispatch } from 'react-redux'
import { check } from '../features/modals/modalSlice'

const Modal = () => {
  
  const dispatch = useDispatch()

  return (
    <div className="pt-32 fixed inset-0 z-10 m-auto bg-slate-700 text-white">
        <h2 className="font-medium text-2xl md:text-4xl text-center">Are you sure to remove all items?</h2>
        <div className="flex flex-col md:flex-row items-center justify-center mt-5 space-y-5 md:space-y-0 md:space-x-4">
            <button onClick={() => {dispatch(removeAll()) && dispatch(check())}} className="w-64 rounded-full px-10 py-5 md:px-5 md:py-3 bg-amber-800">Yes, remove all</button>
            <button onClick={() => dispatch(check())} className="w-64 rounded-full px-10 py-5 md:px-5 md:py-3 bg-purple-600">No, go back</button>
        </div>  
    </div>
  )
}

export default Modal
