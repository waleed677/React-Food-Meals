import React from 'react'

function MealsSummary() {
  return (
    <>
        <div className="lg:flex lg:justify-center lg:items-center bg-main-img lg:h-96 bg-no-repeat bg-cover">
            <div className='bg-gray-700 py-10 px-10 rounded-3xl w-2/4 mt-96'>
                <h2 className='text-3xl text-center text-white font-bold'>Delicious Food, Delivered To You</h2>
                <p className='p-5 text-2xl text-white text-center'>Choose your favourite meal from our board selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p className='p-5 text-2xl text-white text-center'>All our meals are cooked with high-quality ingrdients, just-in-time and of course by experienced chefs.</p>
            </div>
        </div>
    </>
  )
}

export default MealsSummary