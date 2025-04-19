"use client";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

function Complain() {
  const [department, setDepartment] = useState("");
  const [title, setTitle] = useState("");
  const [complainDescription, setComplainDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/sendComplaint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          department,
          title,
          description: complainDescription,
        }),
      });

      if (response.ok) {
        setMessage("Complaint submitted successfully!");
        toast.success("Complaint submitted!");
      } else {
        setMessage("Failed to submit complaint. Please try again.");
        toast.error("Failed to submit complaint");
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-full max-w-lg shadow-lg bg-base-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Submit a Complaint</h2>
        <form onSubmit={formSubmitHandler} className="space-y-4">
          {/* Dropdown for Department */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Department</span>
            </label>
            <select
              className="select select-bordered w-full"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Department
              </option>
              <option value="Hostel">Hostel</option>
              <option value="Administration">Administration</option>
              <option value="Mess">Mess</option>
              <option value="Warden">Warden</option>
            </select>
          </div>

          {/* Input for Title */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter the title of your complaint"
              className="input input-bordered w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Textarea for Complaint Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <textarea
              placeholder="Describe your complaint"
              className="textarea textarea-bordered w-full"
              value={complainDescription}
              onChange={(e) => setComplainDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        {message && <p className="text-center mt-4 text-white">{message}</p>}
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Complain;