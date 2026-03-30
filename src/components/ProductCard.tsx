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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-2xl">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col pt-4 pb-2">
        <span className="text-gray-500 text-sm font-medium mb-1">
          {product.brand}
        </span>
        <h3 className="text-[#1a2b3c] text-lg font-bold leading-tight mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center">
          <span className="text-[#0070f3] text-2xl font-bold">
            {formattedPrice.replace("BDT", "৳")}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
