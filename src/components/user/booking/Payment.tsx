import { useState } from 'react'
import { CreditCard, Smartphone, Lock, CheckCircle2, AlertCircle } from 'lucide-react'
import arrow from '../../../assets/images/play (5).png'
import stripeIcon from '../../../assets/images/Stripe_Logo,_revised_2016.svg.png'
import payhereIcon from '../../../assets/images/PayHere-Logo.png'
import { checkoutWithStripe } from '../../../services/user/paymentService'

interface PaymentProps {
    setActiveTab: (tab: string) => void;
    totalPayable: string;
    choosedTicketTypesCount: any;
    showtimeDeatils: any;
    selectedSeats: any[];
}

function UserPayment(props: PaymentProps) {

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'stripe' | 'payhere' | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async () => {
        if (!selectedPaymentMethod) {
            alert('Please select a payment method');
            return;
        }

        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);
            // props.setActiveTab('Confirmation');
        }, 2000);
    };

    function formatSriLankaDate(dateStr: string): string {
        const slDate = new Date(
            new Date(dateStr).toLocaleString("en-US", {
                timeZone: "Asia/Colombo"
            })
        );

        return slDate.toLocaleDateString("en-GB", {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric"
        }).replace(",", "");
    }

    function formatToTime12h(dateString: string) {
        const date = new Date(dateString);

        return date.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    }

    async function handleStripePayment() {
        setSelectedPaymentMethod('stripe')

        const data = {
            choosedTicketTypesCount: props.choosedTicketTypesCount,
            showtimeDeatils: props.showtimeDeatils,
            selectedSeats: props.selectedSeats,
            totalPayable: props.totalPayable
        }
        console.log(data);

        try {
            const res = await checkoutWithStripe(data);
            console.log(res.data.data);

            if (res.data.data.success) {
                window.location.href = res.data.data.url
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    return (
        <div className='bg-[#121212] font-[Poppins] text-white overflow-x-hidden relative pb-7'>

            <div className='w-full h-[45px] bg-[#E0E0E0] flex items-center -translate-y-1'>
                <div onClick={() => props.setActiveTab('Seats')} className='bg-[#E0E0E0] w-[25%] flex items-center justify-end cursor-pointer'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Seats</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>

                <div onClick={() => props.setActiveTab('Tickets')} className='bg-[#E0E0E0] w-[25%] flex items-center justify-end cursor-pointer'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Tickets</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>

                <div className='bg-[#1e1e1e] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-white'>Payment</p>
                    <img src={arrow} width={'45px'} className='translate-x-9'></img>
                </div>

                <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
                    <p className='w-[80%] text-center text-[14px] font-medium text-black'>Confirmation</p>
                    <img src={arrow} width={'45px'} className='translate-x-9 hidden'></img>
                </div>
            </div>

            {/* Main Content */}
            <div className='px-25 mx-auto mt-17 flex gap-8'>
                {/* Payment Methods Section */}
                <div className='flex-1'>
                    <div className='bg-[#181818] rounded-sm overflow-hidden mb-6'>
                        {/* Header */}
                        <div className='px-5 pt-4 pb-2'>
                            <div className='flex items-center gap-4'>
                                <Lock className='w-4.5 h-4.5 text-white/90' />
                                <div>
                                    <h3 className='text-[15px] mb-0.5 font-light text-white tracking-[3.5px]'>PAYMENT METHOD</h3>
                                    {/* <p className='text-[11px] text-gray-500'>Select your preferred payment gateway</p> */}
                                </div>
                            </div>
                        </div>

                        {/* Payment Methods */}
                        <div className='py-6 px-3.5 space-y-3'>
                            {/* Stripe */}
                            <button
                                onClick={handleStripePayment}
                                className={`w-full h-[55px] bg-black/90 rounded-sm p-4 cursor-pointer transition-all border-2}`}>
                                <div className='flex items-center justify-center gap-3'>
                                    <img src={stripeIcon} width={'37px'}></img>
                                </div>
                            </button>

                            {/* PayHere */}
                            <button
                                onClick={() => setSelectedPaymentMethod('payhere')}
                                className={`w-full h-[55px] bg-black/90 rounded-sm p-4 cursor-pointer transition-all border-2}`}>
                                <div className='flex items-center justify-center gap-3'>
                                    <img src={payhereIcon} width={'60px'}></img>
                                </div>
                            </button>
                        </div>

                        {/* Security Notice */}
                        <div className='rounded-b-sm p-4 pt-2'>
                            <div className='flex items-start gap-3'>
                                <Lock className='w-3.5 h-3.5 text-gray-400 mt-0.5' />
                                <div>
                                    <p className='text-[11.7px] text-gray-400 leading-relaxed'>
                                        Your payment information is encrypted and secure. We don't store your card details.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Summary */}
                <div className='w-[350px]'>
                    <div className='bg-[#181818] rounded-md overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] sticky top-24'>
                        {/* Header */}
                        <div className='px-6 pt-5 pb-3.5'>
                            <h2 className='text-[15px] font-light text-white tracking-[3.5px]'>
                                ORDER SUMMARY
                            </h2>
                        </div>

                        {/* Booking Details */}
                        <div className='px-6 py-5 space-y-4 border-dashed border-b border-gray-700'>
                            <div>
                                <p className='text-[13.5px] text-white font-light tracking-wide mb-1'>{props.showtimeDeatils.movieId.title}</p>
                                <p className='text-[11px] text-gray-500'>{props.showtimeDeatils.movieId.originalLanguage}</p>
                            </div>
                            <div className='mt-1'>
                                <p className='text-[11.7px] text-gray-500 mb-0.5'>{props.showtimeDeatils.cinemaId.cinemaName}: {props.showtimeDeatils.cinemaId.address}</p>
                                <p className='text-[11.7px] text-gray-500'>{props.showtimeDeatils.screenId.screenName}</p>
                            </div>
                            <div className='-mt-[1px]'>
                                <p className='text-[11.7px] text-white/90 font-light mb-[1px]'>{props.showtimeDeatils.screenId.screenName}: {props.selectedSeats.join(', ')}</p>
                                <p className='text-[11.7px] text-white/90 font-light mb-[1px]'>{formatSriLankaDate(props.showtimeDeatils.date)}</p>
                                <p className='text-[11.7px] text-white/90 font-light'>{formatToTime12h(props.showtimeDeatils.time)}</p>
                            </div>
                            {/* <div className='flex gap-4'>
                                <div className='flex-1'>
                                    <p className='text-[11px] text-gray-500 mb-1'>Date</p>
                                    <p className='text-[13px] text-white'>{formatSriLankaDate(props.showtimeDeatils.date)}</p>
                                </div>
                                <div className='flex-1'>
                                    <p className='text-[11px] text-gray-500 mb-1'>Time</p>
                                    <p className='text-[13px] text-white'>{formatToTime12h(props.showtimeDeatils.time)}</p>
                                </div>
                            </div> */}
                        </div>

                        {/* Ticket Breakdown */}
                        <div className='px-6 py-5 space-y-3 border-dashed border-b border-gray-700'>
                            {Object.entries(props.choosedTicketTypesCount).map(([ticketType, count]: [string, any]) => (
                                count > 0 && (
                                    <div key={ticketType} className='flex justify-between items-center text-[12px]'>
                                        <span className='text-gray-400'>{count} × {ticketType}</span>
                                        <span className='text-gray-200 font-serif font-medium tracking-wider text-[13px]'>
                                            {((props.showtimeDeatils?.ticketPrices?.[ticketType] || 0) * count).toFixed(2)} LKR
                                        </span>
                                    </div>
                                )
                            ))}
                            <div className='flex justify-between items-center text-[12px] pt-2 border-t border-gray-800'>
                                <span className='text-gray-500'>Booking Fee</span>
                                <span className='text-gray-300 font-serif font-medium tracking-wider text-[13px]'>
                                    {(props.selectedSeats.length * 50).toFixed(2)} LKR
                                </span>
                            </div>
                        </div>

                        {/* Total */}
                        <div className='px-6 py-3.5 border-t border-dashed border-gray-700 bg-white/90'>
                            <div className='flex justify-between items-center mt-1'>
                                <span className='text-[13px] text-gray-400'>Total Payable</span>
                                <span className='text-[18px] text-black font-serif font-medium tracking-wider'>
                                    {props.totalPayable.toFixed(2)} LKR
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPayment