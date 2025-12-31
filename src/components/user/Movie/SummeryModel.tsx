import React, { useEffect, useState } from 'react';
import { X, Download, Volume2, Copy, Share2, LoaderCircle } from 'lucide-react';
import { generateMovieSummery } from '../../../services/user/aiService';
import { toast } from 'react-toastify';

interface SummeryModalProps {
    movie: any;
    isVisible: boolean;
    onClose: () => void;
}

function SummeryModal({ movie, isVisible, onClose }: SummeryModalProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [summery, setSummery] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (movie && isVisible) {
            generateSummery();
        }
    }, [movie, isVisible]);

    async function generateSummery() {
        if (!movie) return;

        setIsLoading(true);
        try {
            if (localStorage.getItem('movieId') === movie._id && localStorage.getItem('movieSummary')) {
                setSummery(localStorage.getItem('movieSummary'));
                return;
            }

            const res = await generateMovieSummery({ movieTitle: movie?.title });
            console.log(res.data.data);
            setSummery(res.data.data);

            localStorage.setItem("movieId", movie._id);
            localStorage.setItem("movieSummary", res.data.data);

            //             const demoSummary = `Sixteen years after the Na'vi successfully repelled the human invaders from Pandora, Jake Sully lives as the chief of the Omatikaya clan alongside his mate Neytiri. They raise a family consisting of their eldest son Neteyam, younger son Lo'ak, youngest daughter Tuktirey or Tuk, and adopted daughter Kiri, who was miraculously born from the inert avatar of the late scientist Dr. Grace Augustine.

            // The peace shatters when the Resources Development Administration (RDA) returns in force, driven by Earth's environmental collapse and intent on colonizing Pandora. Leading them is Colonel Quaritch, resurrected in a Na'vi avatar body enhanced for combat, along with a squad of recombinant marines.

            // Initially wary of outsiders, the Metkayina accept the Sullys after Tonowari recognizes Jake's status as a mighty warrior. The family must adapt to marine life, learning to breathe underwater longer, ride ilu sea mounts, and bond with tulkun—the intelligent, whale-like creatures central to Metkayina culture.

            // Quaritch's forces escalate their campaign, establishing a coastal base and harvesting tulkun for amrita, a youth-extending substance from their brains. The RDA whalers begin a ruthless cull, and Lo'ak races to warn his friend Payakan, but they stumble into an ambush.

            // In the aftermath, the Sullys mourn Neteyam with a poignant sea burial, honoring Metkayina traditions. Jake vows unyielding resistance against the RDA, as humanity's full-scale invasion looms.`;

            //             setSummery(demoSummary);
        } catch (e) {
            console.error(e);
            setSummery('Failed to generate summary. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

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

    const handleDownload = () => {
        const element = document.createElement('a');
        const file = new Blob([summery], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${movie?.title || 'movie'}_summary.txt`;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    const handleListen = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(summery);
            utterance.rate = 0.9;
            utterance.pitch = 1;
            window.speechSynthesis.speak(utterance);
        } else {
            toast.error('Text-to-speech is not supported in your browser.');
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(summery);
            toast.info('Summary copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: `${movie?.title || 'Movie'} Summary`,
                    text: summery,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            handleCopy();
        }
    };

    // Format summary into paragraphs
    const formatSummary = (text: string) => {
        return text.split('\n\n').filter(para => para.trim());
    };

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[250] flex items-center justify-center font-[Poppins] transition-all duration-300 ${isAnimating ? 'bg-black/90' : 'bg-black/0'
                }`}
            onClick={handleClose}
        >
            <div
                className={`relative w-[90%] max-w-[1100px] transition-all duration-500 ease-out ${isAnimating ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
                    }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className={`absolute -top-12 right-0 text-white/80 hover:text-white transition-all duration-300 ${isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                        }`}
                >
                    <X size={23} strokeWidth={2} />
                </button>

                {/* Summary Container */}
                <div
                    className={`relative font-[Poppins] bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-lg overflow-hidden shadow-2xl transition-all duration-500 delay-100 border border-white/5`}
                >
                    {/* Header */}
                    {/* <div className="bg-gradient-to-r from-black/30 to-black/30 px-8 py-4 border-b border-white/10">
                        <h2 className="text-[25px] font-medium text-white">
                            {movie?.title || 'Movie Summary'}
                        </h2>
                        <p className="text-white/60 text-[13px]">AI-Generated Synopsis</p>
                    </div> */}

                    {/* Content */}
                    <div className="px-8 py-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {isLoading ? (
                            <div className="flex items-center justify-center py-20">
                                <LoaderCircle className="animate-spin rounded-full h-10 w-10 text-white/90" />
                                {/* <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-400"></div> */}
                            </div>
                        ) : (
                            <div className="space-y-5">
                                {formatSummary(summery).map((paragraph, index) => (
                                    <p
                                        key={index}
                                        className="text-white/80 text-base leading-relaxed tracking-wide"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="px-8 py-3 bg-black/30 border-t border-white/10 flex items-center justify-end gap-5">
                        <button
                            onClick={handleDownload}
                            className="flex items-center gap-2 py-3 text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                            title="Download Summary"
                        >
                            <Download size={20} className='hover:text-[#F44336] transition-all duration-100' />
                            {/* <span className="text-sm font-medium">Download</span> */}
                        </button>

                        <button
                            onClick={handleListen}
                            className="flex items-center gap-2 py-3 text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                            title="Listen to Summary"
                        >
                            <Volume2 size={20} className='hover:text-[#F44336] transition-all duration-100' />
                            {/* <span className="text-sm font-medium">Listen</span> */}
                        </button>

                        <button
                            onClick={handleCopy}
                            className="flex items-center gap-2 py-3 text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                            title="Copy Summary"
                        >
                            <Copy size={20} className='hover:text-[#F44336] transition-all duration-100' />
                            {/* <span className="text-sm font-medium">Copy</span> */}
                        </button>

                        <button
                            onClick={handleShare}
                            className="flex items-center gap-2 py-3 text-white rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
                            title="Share Summary"
                        >
                            <Share2 size={20} className='hover:text-[#F44336] transition-all duration-100' />
                            {/* <span className="text-sm font-medium">Share</span> */}
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
}

export default SummeryModal;