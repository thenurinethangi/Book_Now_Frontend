import { useState, useEffect } from 'react'
import arrow from '../assets/images/play (5).png'
import CountdownTimer from '../components/user/booking/CountdownTimer';

interface TicketCounts {
    [key: string]: number;
}

function UserTicketSelect(props: any) {

    useEffect(() => {
        console.log(props);
    });

    const ticketPrices = props.showtimeDeatils.ticketPrices;

    const bookingFeePerTicket = 50;

    const [ticketCounts, setTicketCounts] = useState<TicketCounts>(() => {
        const counts: TicketCounts = {};

        props.selectedSeatsTypes.forEach((seatType: string) => {
            if (seatType.toUpperCase() === 'BOX') {
                counts['Box'] = (counts['Box'] || 0) + 1;
            } else {
                const halfKey = `${seatType}-Half`;
                const fullKey = `${seatType}-Full`;
                if (!counts[halfKey]) counts[halfKey] = 0;
                if (!counts[fullKey]) counts[fullKey] = 0;
                counts[fullKey] = (counts[fullKey] || 0) + 1;
            }
        });

        return counts;
    });
    useEffect(() => {
        console.log(ticketCounts);
    });

    const maxTickets = props.selectedSeats.length;
    const totalTickets = Object.values(ticketCounts).reduce((a, b) => a + b, 0);
    const remainingTickets = maxTickets - totalTickets;

    const getSubtotal = () => {
        return Object.entries(ticketCounts).reduce((sum, [type, count]) => {
            return sum + (ticketPrices[type] || 0) * count;
        }, 0);
    };

    const subtotal = getSubtotal();
    const totalBookingFees = totalTickets * bookingFeePerTicket;
    const totalPrice = subtotal + totalBookingFees;

    const handleIncrease = (ticketType: string) => {
        if (ticketType === 'Box') return;
        if (remainingTickets <= 0) return;

        setTicketCounts(prev => ({
            ...prev,
            [ticketType]: (prev[ticketType] || 0) + 1
        }));
    };

    const handleDecrease = (ticketType: string) => {
        if (ticketType === 'Box') return;
        if ((ticketCounts[ticketType] || 0) === 0) return;

        setTicketCounts(prev => ({
            ...prev,
            [ticketType]: prev[ticketType] - 1
        }));
    };

    function handleProceedToPayment() {
        props.setChoosedTicketTypesCount(ticketCounts);
        props.setTotalPayable(totalPrice);
        props.setActiveTab('Payment');
    }


    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative pb-7'>

            <div className='w-full h-[45px] bg-[#E0E0E0] flex items-center -translate-y-1'>
                <div onClick={(e) => props.setActiveTab('Seats')} className='bg-[#E0E0E0] w-[25%] flex items-center justify-end cursor-pointer'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Seats</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>

                <div className='bg-[#1e1e1e] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-white'>Tickets</p>
                    <img src={arrow} width={'45px'} className='translate-x-9'></img>
                </div>

                <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Payment</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>

                <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Confirmation</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>
            </div>

            {/* Main Content */}
            <div className='px-10 lg:px-25 mx-auto mt-17 flex flex-wrap gap-8'>
                {/* Tickets Section */}
                <div className='flex-1'>
                    <div className='bg-[#1e1e1e] rounded-sm overflow-hidden'>
                        {/* Header */}
                        <div className='flex justify-between items-center px-5 pt-4 pb-6'>
                            <div>
                                <h3 className='text-[15px] font-light text-white mb-1 tracking-[3.5px]'>TICKET SELECTION</h3>
                                {/* <p className='text-[11px] text-gray-500'>Select ticket types for your {props.selectedSeats.length} selected seats</p> */}
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-[11px] text-gray-500 tracking-wider'>Total Selected:</span>
                                <span className='text-[14px] font-medium text-white'>{totalTickets}/{props.selectedSeats.length}</span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className='overflow-x-auto'>
                            <table className='w-full'>
                                {/* <thead>
                                    <tr className='border-b border-gray-800'>
                                        <th className='p-4 text-left text-[11px] font-medium text-gray-500'>Ticket Type</th>
                                        <th className='p-4 text-left text-[11px] font-medium text-gray-500'>Price</th>
                                        <th className='p-4 text-left text-[11px] font-medium text-gray-500'>Quantity</th>
                                        <th className='p-4 text-right text-[11px] font-medium text-gray-500'>Subtotal</th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {Object.entries(ticketCounts).map(([ticketType, count]) => (
                                        <tr key={ticketType} className='border-b border-gray-800 hover:bg-[#252525] transition-colors'>
                                            <td className='p-4'>
                                                <span className='text-[12px] text-gray-300 tracking-widest'>{ticketType}</span>
                                            </td>
                                            <td className='p-4'>
                                                <span className='text-[12px] text-gray-400 font-serif font-medium tracking-wider'>{ticketPrices[ticketType]} LKR</span>
                                            </td>
                                            <td className='p-4'>
                                                <div className='flex items-center gap-2'>
                                                    <button
                                                        onClick={() => handleDecrease(ticketType)}
                                                        disabled={ticketType === 'Box' || count === 0}
                                                        className='w-6 h-6 rounded border border-gray-700 hover:border-gray-600 flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
                                                    >
                                                        <span className='text-[14px]'>−</span>
                                                    </button>
                                                    <span className='text-[12px] w-8 text-center font-medium text-white/85 font-sans tracking-wider'>{count}</span>
                                                    <button
                                                        onClick={() => handleIncrease(ticketType)}
                                                        disabled={ticketType === 'Box' || remainingTickets === 0}
                                                        className='w-6 h-6 rounded border border-gray-700 hover:border-gray-600 flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed'
                                                    >
                                                        <span className='text-[14px]'>+</span>
                                                    </button>
                                                </div>
                                            </td>
                                            <td className='p-4 text-right'>
                                                <span className='text-[12.7px] text-white/90 font-serif font-medium tracking-wider'>{(ticketPrices[ticketType] * count).toFixed(2)} LKR</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Booking Summary */}
                <div className='w-[350px]'>
                    <div className='bg-[#181818] rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] sticky top-24'>

                        {/* Header */}
                        <div className='px-6 py-5 pb-2'>
                            <h2 className='text-[15px] font-light text-white tracking-[3.5px]'>
                                BOOKING SUMMERY
                            </h2>
                            <div className='w-full flex flex-col justify-start items-end -translate-y-1.5'>
                                <p className='text-[18px] text-white text-center w-[50px]'>
                                    {props.selectedSeats.length}
                                </p>
                                <p className='text-[10px] font-light text-white/90 mt-0.5 text-center w-[50px]'>
                                    Tickets
                                </p>
                            </div>
                        </div>

                        {/* Ticket Items */}
                        <div className='px-6 py-5 space-y-3 min-h-[180px]'>
                            {Object.entries(ticketCounts).map(([ticketType, count]) => (
                                count > 0 && (
                                    <div
                                        key={ticketType}
                                        className='flex justify-between items-center text-[12px]'
                                    >
                                        <span className='text-gray-400'>
                                            {count} × {ticketType}
                                        </span>
                                        <span className=' text-[12.5px] text-gray-200 font-serif font-medium tracking-wider'>
                                            {(ticketPrices[ticketType] * count).toFixed(2)} LKR
                                        </span>
                                    </div>
                                )
                            ))}

                            {totalTickets > 0 && (
                                <div className='pt-3 mt-2 border-t border-gray-800 flex justify-between items-center text-[13px]'>
                                    <span className='text-gray-500'>
                                        {totalTickets} × Booking Fee
                                    </span>
                                    <span className='text-[13.5px] text-gray-300 font-serif font-medium tracking-wider'>
                                        {totalBookingFees.toFixed(2)} LKR
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Total */}
                        <div className='px-6 py-4 border-t border-dashed border-gray-700 bg-white/90'>
                            <div className='flex justify-between items-center'>
                                <span className='text-[13px] text-gray-500'>
                                    Total Payable
                                </span>
                                <span className='text-[18px] text-black font-serif font-medium tracking-wider'>
                                    {totalPrice.toFixed(2)} LKR
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4.5'>
                        {/* Proceed Button */}
                        <button onClick={handleProceedToPayment} className='w-full py-3 mt-1 rounded-br-3xl text-[14.5px] bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300'>
                            Proceed to Payment
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default UserTicketSelect