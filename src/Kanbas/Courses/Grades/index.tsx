import React from "react";
import { useParams } from "react-router";
import { FaSearch, FaCog } from "react-icons/fa";
import {
  LiaFilterSolid,
  LiaFileExportSolid,
  LiaFileImportSolid,
} from "react-icons/lia";
import "bootstrap/dist/css/bootstrap.min.css";
import * as db from "../../Database";

export default function Grades() {
  const { cid } = useParams();

  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === cid
  );

  const students = enrollments
    .map((enrollment) => db.users.find((user) => user._id === enrollment.user))
    .filter((student) => student !== undefined);

  const assignments = db.assignments.filter(
    (assignment) => assignment.course === cid
  );

  const grades = db.grades.filter((grade) =>
    students.some((student) => student && student._id === grade.student)
  );

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col text-end">
          <button className="btn btn-light me-2">
            <LiaFileImportSolid /> Import
          </button>
          <div className="btn-group me-2">
            <button
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <LiaFileExportSolid /> Export
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Export as CSV
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-light">
            <FaCog />
          </button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="student-search" className="form-label">
            Student Names
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              id="student-search"
              placeholder="Search Students"
            />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="assignment-search" className="form-label">
            Assignment Names
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              id="assignment-search"
              placeholder="Search Assignments"
            />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-light">
            <LiaFilterSolid /> Apply Filters
          </button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment) => (
                <th key={assignment._id}>
                  {assignment.title}
                  <br />
                  Out of 100
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map(
              (student) =>
                student && (
                  <tr key={student._id}>
                    <td>
                      {student.firstName} {student.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = grades.find(
                        (g) =>
                          g.student === student._id &&
                          g.assignment === assignment._id
                      );
                      return (
                        <td key={assignment._id}>
                          {grade ? `${grade.grade}%` : "N/A"}
                        </td>
                      );
                    })}
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
