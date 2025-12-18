import { useEffect, useState } from "react";

export default function CountdownTimer(props: any) {
    const minutes = Math.floor(props.timeLeft / 60);
    const seconds = props.timeLeft % 60;
    
    // Calculate percentage for circular progress
    const totalTime = 600; // Assuming 10 minutes (600 seconds) as max time
    const percentage = ((totalTime - props.timeLeft) / totalTime) * 100;
    const circumference = 2 * Math.PI * 40; // radius = 40
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Determine urgency state
    const isUrgent = props.timeLeft <= 60; // Last minute
    const isWarning = props.timeLeft <= 180 && props.timeLeft > 60; // Last 3 minutes

    return (
        <div className="relative font-[Poppins] w-[97px] h-[97px]">
            {/* SVG Circle Progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="rgba(229, 231, 235, 0.3)"
                    strokeWidth="6"
                    fill="none"
                />
                {/* Progress circle */}
                <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke={isUrgent ? "#ef4444" : isWarning ? "#f59e0b" : "#22c55e"}
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-500"
                />
            </svg>

            {/* Content */}
            <div className={`absolute inset-0 rounded-full flex flex-col justify-center items-center backdrop-blur-sm ${
                isUrgent 
                    ? 'bg-red-500/20 animate-pulse-urgent' 
                    : isWarning 
                    ? 'bg-gray-200/30' 
                    : 'bg-gray-200/30'
            }`}>
                <p className={`text-[10px] font-medium ${
                    isUrgent || isWarning ? 'text-white' : 'text-black/60'
                }`}>
                    Time left
                </p>
                <p className={`text-[22px] font-bold tabular-nums ${
                    isUrgent 
                        ? 'text-red-500' 
                        : isWarning 
                        ? 'text-black/80' 
                        : 'text-black/80'
                }`}>
                    {minutes}:{seconds.toString().padStart(2, "0")}
                </p>
            </div>

            {/* Urgent indicator */}
            {isUrgent && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            )}

            <style>{`
                @keyframes pulse-urgent {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }
                .animate-pulse-urgent {
                    animation: pulse-urgent 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
}

// Demo component to test the timer
function CountdownTimerDemo() {
    const [timeLeft, setTimeLeft] = useState(180); // Start with 3 minutes

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center gap-8 p-8">
            <div className="text-center">
                <CountdownTimer timeLeft={timeLeft} />
                <p className="text-white mt-4 text-sm">Live Timer</p>
                <button 
                    onClick={() => setTimeLeft(180)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
                >
                    Reset to 3:00
                </button>
            </div>

            <div className="text-center">
                <CountdownTimer timeLeft={120} />
                <p className="text-white mt-4 text-sm">2:00 - Normal</p>
            </div>

            <div className="text-center">
                <CountdownTimer timeLeft={150} />
                <p className="text-white mt-4 text-sm">2:30 - Warning</p>
            </div>

            <div className="text-center">
                <CountdownTimer timeLeft={45} />
                <p className="text-white mt-4 text-sm">0:45 - Urgent</p>
            </div>

            <div className="text-center">
                <CountdownTimer timeLeft={5} />
                <p className="text-white mt-4 text-sm">0:05 - Critical</p>
            </div>
        </div>
    );
}