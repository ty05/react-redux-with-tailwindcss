import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openButton } from '../features/Cart/cartSlice'
import navToggle from '../script'


const Nav = () => {
  const {amount, open} = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  return (
    <div>
        <section id='hero'>
            <div className="px-16 py-16 text-white">
                <nav className="flex flex-row items-center justify-between">
                    <h2 className="text-2xl md:text-4xl p-2 px-6 font-sans font-bold shadow rounded-md bg-cyan-600 shadow-slate-50">Test Cart</h2>
                    <div className="hidden md:flex space-x-5 p-2 md:text-2xl">
                    <div className="group">
                        <a href="#" className="">About</a>
                        <div className="group-hover:border-b-2 group-hover:border-b-red-600"></div>
                    </div>
                    <div className="group">
                        <a href="#" className="">Products</a>
                        <div className="group-hover:border-b-2 group-hover:border-b-red-600"></div>
                    </div>
                    <div className="group">
                        <a href="#" className="">Events</a>
                        <div className="group-hover:border-b-2 group-hover:border-b-red-600"></div>
                    </div>
                    <div className="group">
                        <a href="#" className="">Services</a>
                        <div className="group-hover:border-b-2 group-hover:border-b-red-600"></div>
                    </div>
                    <div className="group">
                        <a className="">Support</a>
                        <div className="group-hover:border-b-2 group-hover:border-b-red-600"></div>
                    </div>
                    <div className="group">
                        <a href="#" className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                        <div className="w-5 h-5 text-center items-center justify-center text-sm m-auto text-white bg-red-600 rounded-full absolute -top-2 right-1">{amount}</div>
                        </a>
                    </div>
                    </div>
                    <div class="md:hidden">
                        <button onClick={() => dispatch(openButton())} id="menu-btn" type="button" class={open ? "open z-40 block hamburger md:hidden focus:outline-none":"z-40 block hamburger md:hidden focus:outline-none"}>
                            <span className="hamburger-top"></span>
                            <span className="hamburger-middle"></span>
                            <span className="hamburger-bottom"></span>
                        </button>
                    </div>
                </nav>
                <div id="menu" className={ open ? "absolute z-10 top-0 bottom-0 left-0 md:hidden flex flex-col self-end w-full h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black" :"absolute top-0 bottom-0 left-0 z-40 hidden md:hidden flex-col self-end w-full h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black"}>
                    <a href="#" className="hover:text-pink-500">Products</a>
                    <a href="#" className="hover:text-pink-500">Careers</a>
                    <a href="#" className="hover:text-pink-500">Events</a>
                    <a href="#" className="hover:text-pink-500">Support</a>
                </div>
            
            </div>
        </section>
      
    </div>
  )
}

export default Nav
