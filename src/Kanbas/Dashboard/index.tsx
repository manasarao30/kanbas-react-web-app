import { Link } from "react-router-dom";
import * as db from "../Database";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          {" "}
          Add{" "}
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />

      <textarea
        value={course.description}
        className="form-control"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />

      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-5 g-4"
      >
        {courses.map((course) => (
          <div
            // key={course._id}
            key={course.number}

            className="wd-dashboard-course col"
            style={{ width: "300px" }}
          >
            <Link
              // to={`/Kanbas/Courses/${course._id}/Home`}
              to={`/Kanbas/Courses/${course.number}/Home`}

              className="text-decoration-none"
            >
              <div className="card h-100">
                <img
                  src={course.image}
                  alt={`${course.name} course image`}
                  className="card-img-top"
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="wd-dashboard-course-link card-title text-primary">
                    {course.name}
                  </h5>
                  <p
                    className="wd-dashboard-course-title card-text"
                    style={{
                      flex: "1 1 auto",
                      maxHeight: "70px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {course.description}
                  </p>
                  <div className="mt-auto d-flex justify-content-between">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>
                    <div>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
