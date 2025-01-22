"use client"

import Image from "next/image";

const CartModel = () => {

  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0px_3px_10px_rgba(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {
        !cartItems
        ? 
        (
          <div>Cart is Empty</div>
        )
        :
        (
          <>
          <h2 className="text-xl">Shopping Cart</h2>
            {/* list */}
            <div className="flex flex-col gap-8">

              {/* ITEM */}
              <div className="flex gap-4">
                <Image 
                  src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  width={72}
                  height={96}
                  className="object-cover rounded"
                />
                <div className="flex flex-col justify-between w-full">
                  {/* top section */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">product Name</h3>
                    <div className="p-1 br-gray-50 rounded-sm">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    available
                  </div>
                  {/* bottom section */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>

              {/* ITEM */}
              <div className="flex gap-4">
                <Image 
                  src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt=""
                  width={72}
                  height={96}
                  className="object-cover rounded"
                />
                <div className="flex flex-col justify-between w-full">
                  {/* top section */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">product Name</h3>
                    <div className="p-1 br-gray-50 rounded-sm">$49</div>
                  </div>
                  <div className="text-sm text-gray-500">
                    available
                  </div>
                  {/* bottom section */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Qty. 2</span>
                    <span className="text-blue-500">Remove</span>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom */}
            <div className="">
              <div className="flex items-center font-semibold justify-between">
                <span className="">Subtotal</span>
                <span className="">$49</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-2">Lorem ipsum dolor sit amet.</p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 roing-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default CartModel