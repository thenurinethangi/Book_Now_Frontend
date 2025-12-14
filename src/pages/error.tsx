import React from 'react';
import { X, Home, RotateCcw } from 'lucide-react';
import arrow from '../assets/images/play (5).png';

function BookingFailure({ showtimeDetails, errorMessage, setActiveTab }: any) {
  
  function formatToTime12h(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
  }

  function formatShowDate(dateStr) {
    const slDate = new Date(
      new Date(dateStr).toLocaleString("en-US", { timeZone: "Asia/Colombo" })
    );

    return slDate.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short"
    }).replace(",", "");
  }

  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleTryAgain = () => {
    setActiveTab('Seats');
  };

  return (
    <div>
      {/* Progress Tabs */}
      <div className='w-full h-[45px] bg-[#E0E0E0] flex items-center -translate-y-1'>
        <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
          <p className='w-[80%] text-center text-[14px] font-medium text-black'>Seats</p>
        </div>
        <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
          <p className='w-[80%] text-center text-[14px] font-medium text-black'>Tickets</p>
        </div>
        <div className='bg-[#E0E0E0] w-[25%] flex items-center justify-end'>
          <p className='w-[80%] text-center text-[14px] font-medium text-black'>Payment</p>
        </div>
        <div className='bg-[#1e1e1e] w-[25%] flex items-center justify-end'>
          <p className='w-[80%] text-center text-[14px] font-medium'>Confirmation</p>
          <img src={arrow} width={'45px'} className='translate-x-9'></img>
        </div>
      </div>

      {/* Content */}
      <div className='px-15 mt-15 flex flex-col items-center'>
        
        {/* Error Icon */}
        <div className='mb-5'>
          <div className='w-[80px] h-[80px] rounded-full bg-red-500/20 flex items-center justify-center'>
            <X className='w-[45px] h-[45px] text-red-500' strokeWidth={3} />
          </div>
        </div>

        <h2 className='text-[24px] font-semibold mb-2'>Booking Failed</h2>
        <p className='text-[13px] text-gray-400 mb-8'>We couldn't process your payment</p>

        {/* Error Card */}
        <div className='bg-[#1e1e1e] rounded-md p-6 w-[600px] border border-gray-800'>
          
          {/* Movie Info (Dimmed) */}
          <div className='flex gap-4 mb-5 opacity-50'>
            <img src={showtimeDetails?.movieId?.posterImageUrl} className='w-[80px] h-[110px] rounded-xs object-cover grayscale' alt="poster" />
            <div className='flex-1'>
              <p className='text-[18px] font-semibold mb-1'>{showtimeDetails?.movieId?.title}</p>
              <div className='space-y-1.5 text-[13px]'>
                <p className='text-gray-400'><span className='text-gray-300'>{showtimeDetails?.cinemaId?.cinemaName}</span></p>
                <p className='text-gray-400'>{showtimeDetails?.screenId?.screenName}</p>
                <p className='text-gray-400'>{formatShowDate(showtimeDetails?.date)} • {formatToTime12h(showtimeDetails?.time)}</p>
              </div>
            </div>
          </div>

          {/* Error Message */}
          <div className='bg-red-500/10 border border-red-500/30 rounded-xs p-4 mb-5'>
            <p className='text-[13px] text-red-400 text-center'>
              {errorMessage || "Payment processing failed. Your card was not charged."}
            </p>
          </div>

          {/* Possible Reasons */}
          <div className='bg-[#151515] rounded-xs p-4 mb-5'>
            <p className='text-[12px] font-medium mb-3'>Common Issues:</p>
            <ul className='space-y-2 text-[11px] text-gray-400'>
              <li className='flex gap-2'><span className='text-yellow-500'>•</span> Insufficient funds</li>
              <li className='flex gap-2'><span className='text-yellow-500'>•</span> Incorrect card details</li>
              <li className='flex gap-2'><span className='text-yellow-500'>•</span> Bank declined transaction</li>
              <li className='flex gap-2'><span className='text-yellow-500'>•</span> Network timeout</li>
            </ul>
          </div>

          {/* Help Text */}
          <p className='text-[11px] text-center text-gray-500 mb-5'>
            Please check your payment details and try again
          </p>

          {/* Buttons */}
          <div className='flex gap-3'>
            <button 
              onClick={handleTryAgain}
              className='flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-sm text-[14px] flex items-center justify-center gap-2 transition-all'
            >
              <RotateCcw className='w-4 h-4' />
              Try Again
            </button>
            <button 
              onClick={handleGoHome}
              className='flex-1 bg-[#2a2a2a] hover:bg-[#333333] text-white font-medium py-2.5 rounded-sm text-[14px] flex items-center justify-center gap-2 transition-all border border-gray-700'
            >
              <Home className='w-4 h-4' />
              Go Home
            </button>
          </div>
        </div>

        {/* Support */}
        <div className='mt-6 text-center'>
          <p className='text-[11px] text-gray-500 mb-2'>Need help?</p>
          <div className='flex items-center justify-center gap-4 text-[11px]'>
            <a href="mailto:support@cinema.com" className='text-red-500 hover:text-red-400'>support@cinema.com</a>
            <span className='text-gray-700'>|</span>
            <a href="tel:+94112345678" className='text-red-500 hover:text-red-400'>+94 11 234 5678</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingFailure;