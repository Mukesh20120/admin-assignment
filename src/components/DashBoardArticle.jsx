import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function DashBoardArticle() {
  const products = [
    {
      id: 1,
      title: 'Apple MacBook Pro 17"',
      image: "Silver",
      description: "Laptop",
    },
    {
      id: 2,
      title: "Microsoft Surface Pro",
      image: "White",
      description: "Laptop PC",
    },
    {
      id: 3,
      title: "Magic Mouse 2",
      image: "Black",
      description: "Accessories",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-4xl font-semibold">Article</h1>
        <div className="flex gap-2 items-center">
          <button className="bg-[var(--hover-btn)] text-white px-3 py-2 rounded-2xl">
            <span className="text-xl">+</span> Add new article
          </button>
          <div className="bg-red-200 rounded">
            <RiDeleteBinLine color="red" style={{ margin: "5px" }} size={25} />
          </div>
        </div>
      </div>
      <div className=" bg-gray-300 rounded-xl">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-white shadow-xl border-b-3 border-gray-300">
            <tr>
              <th className=" text-start">
                <input type="checkbox" className="ml-4 w-4 h-4" />
              </th>
              <th className="text-left px-4 py-2">Image</th>
              <th className="text-left px-4 py-2">Title</th>
              <th className="text-left px-4 py-2">Description</th>
              <th className="text-left px-4 py-2">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product.id} className="bg-white hover:bg-gray-50">
                <td className="p-4">
                  <input type="checkbox" className="w-4 h-4" />
                </td>
                <td>image</td>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {product.title}
                </td>
                <td className="px-4 py-2">{product.description}</td>
                <td className="px-4 py-2 text-cyan-600  hover:underline cursor-pointer">
                  <button className="mx-1 bg-green-200 text-[var(--btn-edit-text)] px-3 py-1 rounded-lg cursor-pointer">Edit</button>
                  <button className="mx-1 bg-red-200 text-[var(--btn-del-text)] px-2 py-1 rounded-xl cursor-pointer">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="flex justify-between items-center my-2 ">
        <p className="block">Showing 1 - 12 of 1239</p>
        <div className="flex justify-center items-center gap-1">
          <button className="p-2 bg-white text-gray-600  hover:bg-gray-300 focus:outline-none">
            <FaAngleLeft />
          </button>
          <button className="p-2 bg-white text-gray-600  hover:bg-gray-300 focus:outline-none">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </>
  );
}
