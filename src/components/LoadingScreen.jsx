import { useEffect, useState } from 'react';

export const LoadingScreen = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(timer);
                    onLoadingComplete();
                    return 100;
                }
                return prevProgress + 1;
            });
        }, 30); // Adjust speed of loading here (lower number = faster)

        return () => clearInterval(timer);
    }, [onLoadingComplete]);

    return (
        <div className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Outer loading circle */}
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                    {/* Background circle */}
                    <circle
                        className="stroke-primary/20"
                        strokeWidth="4"
                        fill="none"
                        cx="128"
                        cy="128"
                        r="120"
                    />
                    {/* Progress circle */}
                    <circle
                        className="stroke-primary transition-all duration-300 ease-in-out"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                        cx="128"
                        cy="128"
                        r="120"
                        strokeDasharray={`${progress * 7.54} 753.6`}
                    />
                </svg>

                {/* Logo container */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden bg-card border-2 border-primary/20 flex items-center justify-center">
                    <img 
                        src="/logo-light.png" 
                        alt="Logo" 
                        className="w-44 h-44 object-cover rounded-full scale-110 animate-pulse-subtle"
                    />
                </div>

                {/* Percentage text */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-8">
                    <span className="text-2xl font-bold text-primary">
                        {progress}%
                    </span>
                </div>
            </div>

            {/* Name */}
            <div className="mt-16 text-center space-y-2">
                <h1 className="text-3xl font-bold text-primary animate-fade-in">
                    Geethanjali Rambarika
                </h1>
                <p className="text-xl text-muted-foreground animate-pulse">
                    Loading Portfolio...
                </p>
            </div>
        </div>
    );
}; 
