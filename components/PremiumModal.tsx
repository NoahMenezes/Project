'use client';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type?: 'confirm' | 'success';
    onConfirm?: () => void;
}

export default function PremiumModal({ isOpen, onClose, title, message, type = 'success', onConfirm }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-lg bg-white/5 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden"
                    >
                        {/* Glassmorphism Highlight */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl font-serif font-bold text-white mb-4 italic tracking-tight">{title}</h2>
                            <p className="text-gray-300 font-light leading-relaxed mb-10">
                                {message}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {type === 'confirm' ? (
                                    <>
                                        <button
                                            onClick={onClose}
                                            className="px-8 py-3 border border-white/20 hover:bg-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => {
                                                if (onConfirm) onConfirm();
                                                onClose();
                                            }}
                                            className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-lg shadow-amber-600/20"
                                        >
                                            Confirm Submission
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={onClose}
                                        className="px-12 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 rounded-sm shadow-lg shadow-amber-600/20"
                                    >
                                        Dismiss
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
