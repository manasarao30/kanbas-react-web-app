import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { deleteAssignment } from "./reducer";
import { BsGripVertical } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentHeader from "./AssignmentHeader";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state: RootState) =>
    state.assignmentsReducer.assignments.filter(
      (assignment) => assignment.course === cid
    )
  );
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(id));
    }
  };

  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <div className="input-group w-50">
          <span className="input-group-text">
            <CiSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            id="wd-search-assignment"
          />
        </div>
        <div>
          <button
            className="btn btn-danger"
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)}
          >
            <FaPlus className="me-2" />
            Assignment
          </button>
        </div>
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div
            id="wd-assignments-title"
            className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center"
          >
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <button
              className="btn btn-light ms-auto"
              style={{ borderRadius: "1rem" }}
            >
              40% of Total
            </button>
            <AssignmentHeader />
          </div>

          <ul id="wd-assignment-list" className="list-group rounded-0">
            {assignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <IoNewspaperSharp className="me-2 fs-4" />
                  <div>
                    <Link
                      className="wd-assignment-link d-block"
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      {assignment.title}
                    </Link>
                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <b>Not available until</b> {assignment.availableUntil} |{" "}
                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                  </div>
                </div>
                <ModuleControlButtons
                  assignmentId={assignment._id}
                  deleteAssignment={handleDelete}
                />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
