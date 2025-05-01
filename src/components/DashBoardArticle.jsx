import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import useModal from "../customHooks/useModal";
import { FiCamera } from "react-icons/fi";
import { Modal } from "./Modal";
import { useGetArticlesQuery } from "../store/features/articleApi";
import Pagination from "./Pagination";
// import { dummyArticleData } from "../utils/dummyData";

export default function DashBoardArticle() {
  const [page, setPage] = useState(1);
  const limit = 12;

  const { data } = useGetArticlesQuery({
    page,
    limit,
  });

  const {
    hasNextPage = false,
    hasPrevPage = false,
    totalDocs: totalArticles = 0,
    docs: articles = [],
  } = data?.data || {};

  // const start = (page - 1) * limit + 1;
  // const end = Math.min(page * limit, totalArticles);

  // console.log(data?.data,isLoading,error,articles);

  const [isOpen, setOpen, setClose] = useModal();

  // Single form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    previewImage: null,
  });

  // Generic input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image file handler
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
        previewImage: URL.createObjectURL(file),
      }));
    }
  };

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.image) {
      alert("Please fill all fields!");
      return;
    }

    console.log(formData);

    // Reset form
    setFormData({
      title: "",
      description: "",
      image: null,
      previewImage: null,
    });

    setClose();
  };

  return (
    <>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-4xl font-semibold">Article</h1>
        <div className="flex gap-2 items-center">
          <button
            className="bg-[var(--hover-btn)] text-white px-3 py-2 rounded-2xl"
            onClick={setOpen}
          >
            <span className="text-xl">+</span> Add new article
          </button>
          <div className="bg-red-200 rounded">
            <RiDeleteBinLine color="red" style={{ margin: "5px" }} size={25} />
          </div>
        </div>
      </div>
      {/* update & add modal */}
      <Modal isOpen={isOpen} onClose={setClose} header={"Article"}>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col items-center space-y-3">
            {/* Hidden file input */}
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Camera icon and text as label */}
            <label
              htmlFor="image-upload"
              className="flex flex-col items-center cursor-pointer text-blue-700 hover:text-blue-900"
            >
              <div className="text-4xl bg-gray-200 rounded-full">
                <div className="p-8 ">
                  <FiCamera color="black" />
                </div>
              </div>
              <span className="mt-1 text-sm font-semibold">Upload Image</span>
            </label>

            {/* Image preview */}
            {formData.previewImage && (
              <img
                src={formData.previewImage}
                alt="Preview"
                className="mt-2 w-32 h-32 object-cover rounded border"
              />
            )}
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter title"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter description"
              rows={3}
            />
          </div>

          {/* Submit & Cancel */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="px-15 py-2 bg-[var(--hover-btn)] text-white rounded cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>

      {/* Product Table */}
      <div className="bg-gray-300 rounded-xl">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-white shadow-xl border-b-3 border-gray-300">
            <tr>
              <th className="text-start w-[5%]">
                <input type="checkbox" className="ml-4 w-4 h-4" />
              </th>
              <th className="text-left w-[5%] px-4 py-2">Image</th>
              <th className="text-left w-[20%] px-4 py-2">Title</th>
              <th className="text-left w-[50%] px-4 py-2">Description</th>
              <th className="text-center w-[15%] px-4 py-2">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {articles.map((article) => (
              <tr key={article._id} className="bg-white hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td>
                  <img
                    src={article.image}
                    alt=""
                    className="w-16 h-16 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {article.title}
                </td>
                <td className="px-4 py-2">
                  {article.description.length > 200
                    ? article.description.slice(0, 120) + "..."
                    : article.description}
                </td>
                <td className="px-4 py-2 text-cyan-600 hover:underline cursor-pointer">
                  <button className="mx-1 bg-green-200 text-[var(--btn-edit-text)] px-3 py-1 rounded-lg">
                    Edit
                  </button>
                  <button className="mx-1 bg-red-200 text-[var(--btn-del-text)] px-2 py-1 rounded-xl">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* <div className="flex justify-between items-center my-4">
        <p className="block text-sm text-gray-700">
          Showing {totalArticles === 0 ? 0 : `${start} - ${end}`} of {totalArticles}
        </p>

        <div className="flex justify-center items-center gap-1">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={!hasPrevPage}
            className={`p-2 rounded bg-white border text-gray-600 hover:bg-gray-200 ${
              !hasPrevPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaAngleLeft />
          </button>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!hasNextPage}
            className={`p-2 rounded bg-white border text-gray-600 hover:bg-gray-200 ${
              !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaAngleRight />
          </button>
        </div>
      </div> */}
      <Pagination
        currentPage={page}
        limit={limit}
        totalItems={totalArticles}
        hasNextPage={hasNextPage}
        hasPrevPage={hasPrevPage}
        onPageChange={setPage}
      />
    </>
  );
}
