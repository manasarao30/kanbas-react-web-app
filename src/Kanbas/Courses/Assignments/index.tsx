import React from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import LessonControlButtons from "./LessonControlButtons";
import AssignmentHeader from "./AssignmentHeader";

export default function Assignments() {
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
          <button className="btn btn-light me-2" id="wd-add-assignment-group">
            <FaPlus className="me-2" />
            Group
          </button>
          <button className="btn btn-danger" id="wd-add-assignment">
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
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <IoNewspaperSharp className="me-2 fs-4" />
                <div>
                  <a
                    className="wd-assignment-link d-block"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A1 
                  </a>
                  <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00 am | <b>Due</b> May
                  13 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <IoNewspaperSharp className="me-2 fs-4" />
                <div>
                  <a
                    className="wd-assignment-link d-block"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A2 
                  </a>
                  <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00 am | <b>Due</b> May
                  20 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1 d-flex align-items-start justify-content-between">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <IoNewspaperSharp className="me-2 fs-4" />
                <div>
                  <a
                    className="wd-assignment-link d-block"
                    href="#/Kanbas/Courses/1234/Assignments/123"
                  >
                    A3 
                  </a>
                  <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00 am | <b>Due</b> May
                  27 at 11:59pm | 100 pts
                </div>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
