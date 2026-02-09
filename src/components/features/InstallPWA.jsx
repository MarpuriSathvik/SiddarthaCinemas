import React, { useEffect, useState } from 'react';
import { X, Download } from 'lucide-react';

const InstallPWA = () => {
    const [installPrompt, setInstallPrompt] = useState(null);
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Save the event so it can be triggered later
            setInstallPrompt(e);
            // Show the custom install banner
            setShowBanner(true);
        };

        window.addEventListener('beforeinstallprompt', handler);

        return () => window.removeEventListener('beforeinstallprompt', handler);
    }, []);

    const handleInstallClick = async () => {
        if (!installPrompt) {
            return;
        }

        // Show the install prompt
        installPrompt.prompt();

        // Wait for the user to respond to the prompt
        const { outcome } = await installPrompt.userChoice;

        if (outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }

        // Clear the saved prompt since it can't be used again
        setInstallPrompt(null);
        setShowBanner(false);
    };

    const handleDismiss = () => {
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-surface border border-primary/20 rounded-lg shadow-2xl z-50 animate-fade-in-up">
            <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                            <Download className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Install Siddartha Cinemas</h3>
                            <p className="text-gray-400 text-xs">Get quick access from your home screen</p>
                        </div>
                    </div>
                    <button
                        onClick={handleDismiss}
                        className="text-gray-400 hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleInstallClick}
                        className="flex-1 bg-primary text-black font-bold py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                        Install
                    </button>
                    <button
                        onClick={handleDismiss}
                        className="px-4 py-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        Not Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InstallPWA;
