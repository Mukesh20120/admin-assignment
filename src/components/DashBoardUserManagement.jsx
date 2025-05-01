import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  useGetUsersQuery,
 useDeleteUserMutation
} from "../store/features/userManagementApi";
import Pagination from "./Pagination";

export default function DashBoardUserManagement() {
  const [page, setPage] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState([]);
  const limit = 12;

  const { data, isLoading } = useGetUsersQuery({
    page,
    limit,
  });
 
  const [deleteUser] = useDeleteUserMutation();
  const {
    hasNextPage = false,
    hasPrevPage = false,
    totalDocs: totalArticles = 0,
    docs: userArray = [],
  } = data?.data || {};

  //handle delete selected article
  const handleDeleteSelectedArticle = async () => {
    try {
      await Promise.all(
        selectedUserId.map((id) => deleteUser(id).unwrap())
      );
      // console.log("delete selected successfully");
      setSelectedUserId([]);
    } catch (error) {
      console.log("delete selected failed", error);
    }
  };
  //handle select/deselect article
  const handleSelectDeselectArticle = (id) => {
    setSelectedUserId((prev) =>
      prev.includes(id) ? prev.filter((preId) => preId != id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedUserId.length == userArray.length) {
      setSelectedUserId([]);
    } else {
      setSelectedUserId(userArray.map((article) => article._id));
    }
  };
  //delete handler
  const handleDelete = async (id) => {
    try {
      await deleteUser(id).unwrap();
      console.log("delete successfully");
    } catch (error) {
      console.log("Delete fail", error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-4xl font-semibold">User Management</h1>
          <div className="bg-red-200 rounded" onClick={()=>handleDeleteSelectedArticle()}>
            <RiDeleteBinLine color="red" style={{ margin: "5px" }} size={25} />
          </div>
      </div>
     
      {/* Product Table */}
      <div className="bg-gray-300 rounded-xl">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-white shadow-xl border-b-3 border-gray-300">
            <tr>
              <th className="text-start w-[5%]">
                <input
                  type="checkbox"
                  className="ml-4 w-4 h-4"
                  checked={!isLoading && userArray.length === selectedUserId.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="text-left w-[5%] px-4 py-2">Image</th>
              <th className="text-left w-[20%] px-4 py-2">name</th>
              <th className="text-left w-[15%] px-4 py-2">status</th>
              <th className="text-left w-[15%] px-4 py-2">Type</th>
              <th className="text-left w-[15%] px-4 py-2">location</th>
              <th className="text-center w-[15%] px-4 py-2">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userArray.map((user) => (
              <tr key={user._id} className="bg-white hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectedUserId.includes(user._id)}
                    onChange={()=>handleSelectDeselectArticle(user._id)}
                  />
                </td>
                <td>
                  <img
                    src={user?.image || null}
                    alt=""
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {user?.fullName}
                </td>
                <td className="px-4 py-2">
                  {user?.status}
                </td>
                <td className="px-4 py-2">
                  {user?.userType}
                </td>
                <td className="px-4 py-2">
                  {user?.country}
                </td>
                <td className="px-4 py-2 text-cyan-600 hover:underline cursor-pointer">
                  <button
                    className="mx-1 bg-green-200 text-[var(--btn-edit-text)] px-3 py-1 rounded-lg"
                    onClick={() => {
                      console.log('Post & Put api not in backend for user management.')
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(user._id);
                    }}
                    className="mx-1 bg-red-200 text-[var(--btn-del-text)] px-2 py-1 rounded-xl"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
