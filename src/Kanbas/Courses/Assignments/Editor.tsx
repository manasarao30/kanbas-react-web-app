import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { RootState } from "../../store";

export default function AssignmentEditor() {
  const { cid, id } = useParams<{ cid: string; id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state: RootState) => state.assignmentsReducer.assignments
  );
  const foundAssignment = assignments.find((a) => a._id === id);

  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  });

  useEffect(() => {
    if (foundAssignment) {
      setAssignment(foundAssignment);
    }
  }, [foundAssignment]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setAssignment({ ...assignment, [id]: value });
  };

  const handleSave = () => {
    if (id === "new") {
      dispatch(addAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(updateAssignment({ ...assignment, _id: id, course: cid }));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Assignment Name
        </label>
        <input
          id="title"
          className="form-control"
          value={assignment.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          id="description"
          className="form-control"
          rows={8}
          value={assignment.description}
          onChange={handleChange}
        />
      </div>
      <div className="row mb-3">
        <label htmlFor="points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            type="number"
            id="points"
            className="form-control"
            value={assignment.points}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="dueDate" className="col-sm-2 col-form-label text-end">
          Due Date
        </label>
        <div className="col-sm-10">
          <input
            type="datetime-local"
            id="dueDate"
            className="form-control"
            value={assignment.dueDate}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="availableFrom"
          className="col-sm-2 col-form-label text-end"
        >
          Available From
        </label>
        <div className="col-sm-10">
          <input
            type="datetime-local"
            id="availableFrom"
            className="form-control"
            value={assignment.availableFrom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="availableUntil"
          className="col-sm-2 col-form-label text-end"
        >
          Available Until
        </label>
        <div className="col-sm-10">
          <input
            type="datetime-local"
            id="availableUntil"
            className="form-control"
            value={assignment.availableUntil}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-light me-2"
        >
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
