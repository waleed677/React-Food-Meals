import React from 'react'

function CartIcons() {
    return (
        <>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                <a
                    href="#"
                    className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-orange-900 px-4 py-2 text-base font-medium text-white shadow-sm "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg> &nbsp;
                    Cart
                <span className='ml-4 px-4 p-2 bg-orange-600 rounded-3xl'>3</span>
                </a>
            </div>
        </>
    )
}

export default CartIcons