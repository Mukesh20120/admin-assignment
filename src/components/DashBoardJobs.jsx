import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import useModal from "../customHooks/useModal";
import { FiCamera } from "react-icons/fi";
import { Modal } from "./Modal";
import {
  useGetJobsQuery,
 useUpdateJobMutation,
 useDeleteJobMutation
} from "../store/features/jobApi";
import Pagination from "./Pagination";
import { getLpaRange } from "../utils/helperFunctions";

export default function DashBoardJobs() {
  const [page, setPage] = useState(1);
  // Single form state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    serviceCategoryId: "",
  });
  const [singleId, setSingleId] = useState(null);
  const [checkedIds, setCheckedIds] = useState([]);
  const limit = 12;

  const { data, isLoading } = useGetJobsQuery();
  const [updateJob] = useUpdateJobMutation();
  const [deleteJob] = useDeleteJobMutation();
  const {
    hasNextPage = false,
    hasPrevPage = false,
    totalDocs: totalArticles = 0,
    docs: jobArray = [],
  } = data?.data || {};
  const [isOpen, setOpen, setClose] = useModal();

  // Generic input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //handle delete selected article
  const handleDeleteSelectedArticle = async () => {
    try {
      await Promise.all(
        checkedIds.map((id) => deleteJob(id).unwrap())
      );
      // console.log("delete selected successfully");
      setCheckedIds([]);
    } catch (error) {
      console.log("delete selected failed", error);
    }
  };

  //handle select/deselect article
  const handleSelectDeselectArticle = (id) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((preId) => preId != id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (checkedIds.length == jobArray.length) {
      setCheckedIds([]);
    } else {
      setCheckedIds(jobArray.map((article) => article._id));
    }
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Please fill all fields!");
      return;
    }

    try {
      if (singleId) {
        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("serviceCategoryId", formData.serviceCategoryId);
        await updateJob({ id: singleId, data: formDataToSend });
        console.log("update successfully");
      }
    } catch (error) {
      console.log("update fail", error);
    } finally {
      handleOnclose();
    }
  };

  //delete handler
  const handleDelete = async (id) => {
    try {
      await deleteJob(id).unwrap();
      console.log("delete successfully");
    } catch (error) {
      console.log("Delete fail", error);
    }
  };

  //handle edit
  const handleEdit = (article) => {
    const { _id, title = "", description = "", image = "" } = article;
    setSingleId(_id);
    setFormData({ title, description, image, previewImage: image });
    setOpen();
  };

  const handleOnclose = () => {
    setFormData({
      title: "",
      description: "",
      image: null,
      previewImage: null,
    });
    setSingleId(null);
    setClose();
  };

  return (
    <>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-4xl font-semibold">Jobs</h1>

        <div
          className="bg-red-200 rounded"
          onClick={() => handleDeleteSelectedArticle()}
        >
          <RiDeleteBinLine color="red" style={{ margin: "5px" }} size={25} />
        </div>
      </div>
      {/* update & add modal */}
      <Modal isOpen={isOpen} onClose={handleOnclose} header={"Jobs"}>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Service Category Id */}
          <div>
            <label className="block font-medium mb-1">Service Category ID</label>
            <input
              type="text"
              name="serviceCategoryId"
              value={formData.serviceCategoryId}
              onChange={handleInputChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter service category id"
            />
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
                <input
                  type="checkbox"
                  className="ml-4 w-4 h-4"
                  checked={
                    !isLoading && jobArray.length === checkedIds.length
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th className="text-left w-[5%] px-4 py-2">Id</th>
              <th className="text-left w-[20%] px-4 py-2">Title</th>
              <th className="text-left w-[20%] px-4 py-2">Description</th>
              <th className="text-left w-[10%] px-4 py-2">Salary</th>
              <th className="text-left w-[10%] px-4 py-2">Location</th>
              <th className="text-left w-[10%] px-4 py-2">Type of Job</th>
              <th className="text-left w-[10%] px-4 py-2">Status</th>
              <th className="text-center w-[15%] px-4 py-2">Operations</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobArray.map((job) => (
              <tr key={job._id} className="bg-white hover:bg-gray-50">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={checkedIds.includes(job._id)}
                    onChange={() => handleSelectDeselectArticle(job._id)}
                  />
                </td>
                <td>
                  {job._id && job._id.slice(0,6)}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {job.title}
                </td>
                <td className="px-4 py-2">
                  {job.description.length > 20
                    ? job.description.slice(0, 12) + "..."
                    : job.description}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {job?.salary && getLpaRange(job.salary) }
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {job?.location && job.location.split(",")[0]}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {job.typeOfJob}
                </td>
                <td className="px-4 py-2 font-medium text-gray-900">
                  {job.status}
                </td>
                <td className="px-4 py-2 text-cyan-600 hover:underline cursor-pointer">
                  <button
                    className="mx-1 bg-green-200 text-[var(--btn-edit-text)] px-3 py-1 rounded-lg"
                    onClick={() => {
                      handleEdit(job);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(job._id);
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
