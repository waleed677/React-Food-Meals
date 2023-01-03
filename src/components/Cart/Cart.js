import React from "react";
import MealsItem from "../Meals/MealsItem";
import Modals from "../UI/Modals";

function Cart(props) {
  const dummyData = [
    { id: "m1", name: "Chicken Burrito", amount: 2, price: 975 },
    { id: "m2", name: "Steak Burrito", amount: 3, price: 945 },
  ];

  return (
    <>
      <Modals>
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-2xl font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Cart Items
                    </h3>
                    <div className="mt-5">
                      <ul>
                        {dummyData.map((meal) => (
                          <li key={meal.id} className="p-2 text-lg">{meal.name}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t flex justify-between mt-5">
                        <h2 className="text-2xl font-bold py-4">Total</h2>
                        <h2 className="text-2xl font-bold py-4">$8.50</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Order
                </button>
                <button
                  type="button"
                  onClick={props.onClickClose}
                  className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modals>
    </>
  );
}

export default Cart;
