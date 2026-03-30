import React from "react";
import { motion } from "framer-motion";
import type { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Format price with BDT symbol
  const formattedPrice = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex max-w-[209.6px] mx-auto flex-col bg-white rounded-lg overflow-hidden cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative max-w-[209.6px] max-h-[210px] aspect-[4/5] bg-gray-100 overflow-hidden rounded-lg">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col pt-4 p-2">
        <span className="text-[#5A6573] text-sm font-normal mb-1">
          {product.brand}
        </span>
        <h3 className="text-[#1A2B3D] text-[16px] font-[525] leading-[22px] mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center">
          <span className="text-[#1882FF] text-xl font-[475] leading-[22px]">
            {formattedPrice.replace("BDT", "৳")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
