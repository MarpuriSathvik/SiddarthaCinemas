import React from 'react';
import Skeleton from './Skeleton';

const MovieCardSkeleton = () => {
    return (
        <div className="bg-surface rounded-xl overflow-hidden shadow-lg border border-white/5">
            {/* Image Skeleton */}
            <div className="aspect-[2/3]">
                <Skeleton className="w-full h-full" />
            </div>

            {/* Content Skeleton */}
            <div className="p-3 md:p-4 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />

                <div className="flex gap-2 mb-4">
                    <Skeleton className="h-4 w-12" />
                    <Skeleton className="h-4 w-16" />
                </div>

                <Skeleton className="h-10 w-full rounded-lg" />
            </div>
        </div>
    );
};

export default MovieCardSkeleton;
