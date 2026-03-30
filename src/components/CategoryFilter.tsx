import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8" aria-label="Category filter">
      <button
        onClick={() => onSelectCategory('')}
        className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${
          selectedCategory === ''
            ? 'bg-[#1a2b3c] border-[#1a2b3c] text-white'
            : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300'
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 border-2 ${
            selectedCategory === category
              ? 'bg-[#1a2b3c] border-[#1a2b3c] text-white'
              : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
