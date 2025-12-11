import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface TrailerModalProps {
    trailerUrl: string;
    isVisible: boolean;
    onClose: () => void;
}

function TrailerModal({ trailerUrl, isVisible, onClose }: TrailerModalProps) {
    
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => setIsAnimating(true), 10);
            document.body.style.overflow = 'hidden';
        } else {
            setIsAnimating(false);
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isVisible]);

    const handleClose = () => {
        setIsAnimating(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const getYouTubeEmbedUrl = (url: string) => {
        // Extract video ID from various YouTube URL formats
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        const videoId = match && match[2].length === 11 ? match[2] : null;
        return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : '';
    };

    if (!isVisible) return null;

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center font-[Poppins] transition-all duration-300 ${
                isAnimating ? 'bg-black/90' : 'bg-black/0'
            }`}
            onClick={handleClose}
        >
            {/* Modal Content */}
            <div 
                className={`relative w-[90%] max-w-[1100px] transition-all duration-500 ease-out ${
                    isAnimating 
                        ? 'scale-100 opacity-100' 
                        : 'scale-50 opacity-0'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className={`absolute -top-12 right-0 text-white/80 hover:text-white transition-all duration-300 ${
                        isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
                >
                    <X size={32} strokeWidth={2} />
                </button>

                {/* Video Container */}
                <div 
                    className={`relative bg-[#1a1a1a] rounded-sm overflow-hidden shadow-2xl transition-all duration-500 delay-100 ${
                        isAnimating 
                            ? 'shadow-none' 
                            : 'shadow-none'
                    }`}
                    style={{ paddingBottom: '56.25%' }}
                >
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={getYouTubeEmbedUrl(trailerUrl)}
                        title="Movie Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Decorative Border Effect */}
                {/* <div 
                    className={`absolute inset-0 pointer-events-none rounded-sm transition-all duration-500 delay-200 ${
                        isAnimating 
                            ? 'opacity-100 ring-2 ring-red-500/30' 
                            : 'opacity-0'
                    }`}
                ></div> */}
            </div>
        </div>
    );
}

export default TrailerModal;