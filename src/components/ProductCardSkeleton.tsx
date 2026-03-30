import React from "react";

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col animate-pulse max-w-[209.6px] mx-auto">
      <div className="aspect-[4/5] bg-gray-200 rounded-lg h-[210px] w-full" />
      <div className="pt-4">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-8 bg-gray-200 rounded w-1/2" />
      </div>
    </div>
  );
};
