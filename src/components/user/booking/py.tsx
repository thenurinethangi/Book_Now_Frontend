import React from 'react'

function PaymentTwo() {

    return (

        <div className="px-25 mx-auto mt-17 flex gap-8 font-[Poppins]">

            {/* Left – Payment Methods */}
            <div className="flex-1">
                <div className="bg-[#1e1e1e] border border-gray-800 rounded-sm overflow-hidden">

                    {/* Header */}
                    <div className="px-6 py-5 border-b border-gray-800">
                        <h2 className="text-[15px] font-medium text-white mb-1">
                            Payment Method
                        </h2>
                        <p className="text-[12px] text-gray-500">
                            Choose your preferred payment option
                        </p>
                    </div>

                    {/* Payment Options */}
                    <div className="p-6 space-y-4">

                        {/* Stripe */}
                        <div className="border border-gray-700 rounded-md p-5 hover:border-white/40 transition cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[14px] text-white font-medium">
                                    Credit / Debit Card
                                </span>
                                <span className="text-[11px] text-gray-400">
                                    Stripe
                                </span>
                            </div>
                            <p className="text-[12px] text-gray-500 leading-relaxed">
                                Pay securely using Visa, MasterCard, or international cards.
                            </p>
                        </div>

                        {/* PayHere */}
                        <div className="border border-gray-700 rounded-md p-5 hover:border-white/40 transition cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[14px] text-white font-medium">
                                    Local Payment
                                </span>
                                <span className="text-[11px] text-gray-400">
                                    PayHere
                                </span>
                            </div>
                            <p className="text-[12px] text-gray-500 leading-relaxed">
                                Pay using Sri Lankan cards, mobile wallets, or online banking.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right – Booking Summary */}
            <div className="w-[350px]">
                <div className="bg-[#1e1e1e] border border-gray-800 rounded-sm shadow-2xl sticky top-24">

                    {/* Header */}
                    <div className="px-6 py-5 border-b border-gray-800">
                        <h2 className="text-[15px] font-medium text-white">
                            Booking Summary
                        </h2>
                    </div>

                    {/* Summary Items */}
                    <div className="px-6 py-5 space-y-3">
                        <div className="flex justify-between text-[12px] text-gray-400">
                            <span>2x ODC Full</span>
                            <span>1200.00 LKR</span>
                        </div>
                        <div className="flex justify-between text-[12px] text-gray-400">
                            <span>1x Box</span>
                            <span>700.00 LKR</span>
                        </div>

                        <div className="flex justify-between text-[12px] text-gray-400 pt-2 border-t border-gray-800">
                            <span>Booking Fees</span>
                            <span>150.00 LKR</span>
                        </div>
                    </div>

                    {/* Total */}
                    <div className="px-6 py-5 border-t border-gray-800">
                        <div className="flex justify-between items-center mb-5">
                            <span className="text-[13px] text-gray-400">
                                Total Amount
                            </span>
                            <span className="text-[18px] font-medium text-white">
                                2050.00 LKR
                            </span>
                        </div>

                        {/* Pay Button */}
                        <button className="w-full border-[1.5px] border-white/90 text-white py-3 rounded-br-3xl text-[14.5px] hover:bg-white/5 transition-all">
                            Pay Now
                        </button>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default PaymentTwo