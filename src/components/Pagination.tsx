import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  // Show a subset of pages if there are too many
  const visiblePages = pages.filter(p => 
    p === 1 || 
    p === totalPages || 
    (p >= currentPage - 1 && p <= currentPage + 1)
  );

  const renderPageButtons = () => {
    const buttons = [];
    let lastPage = 0;

    for (const p of visiblePages) {
      if (lastPage !== 0 && p - lastPage > 1) {
        buttons.push(<span key={`ellipsis-${p}`} className="px-2 text-gray-400">...</span>);
      }
      buttons.push(
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`w-10 h-10 rounded-xl font-semibold transition-all duration-200 ${
            currentPage === p
              ? 'bg-[#0070f3] text-white shadow-lg shadow-blue-200'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
          aria-current={currentPage === p ? 'page' : undefined}
        >
          {p}
        </button>
      );
      lastPage = p;
    }
    return buttons;
  };

  return (
    <nav className="flex items-center justify-center gap-2 mt-12 mb-8" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-xl bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Previous page"
      >
        <ChevronLeft size={24} />
      </button>

      <div className="flex items-center gap-2">
        {renderPageButtons()}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-xl bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        aria-label="Next page"
      >
        <ChevronRight size={24} />
      </button>
    </nav>
  );
};
