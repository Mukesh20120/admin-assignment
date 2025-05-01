import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Pagination({
  currentPage = 1,
  limit = 10,
  totalItems = 0,
  hasNextPage = false,
  hasPrevPage = false,
  onPageChange,
}) {
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, totalItems);

  return (
    <div className="flex justify-between items-center my-4">
      <p className="text-sm text-gray-700">
        {totalItems === 0
          ? "No items found"
          : `Showing ${start} - ${end} of ${totalItems}`}
      </p>

      <div className="flex gap-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPrevPage}
          className={`p-2 rounded bg-white border text-gray-600 hover:bg-gray-200 ${
            !hasPrevPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage}
          className={`p-2 rounded bg-white border text-gray-600 hover:bg-gray-200 ${
            !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
