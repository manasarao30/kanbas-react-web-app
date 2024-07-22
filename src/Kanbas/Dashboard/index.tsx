import { Link } from "react-router-dom";
import * as db from "../Database";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="row row-cols-1 row-cols-md-5 g-4"
      >
        {courses.map((course) => (
          <div
            key={course._id}
            className="wd-dashboard-course col"
            style={{ width: "300px" }}
          >
            <Link
              to={`/Kanbas/Courses/${course._id}/Home`}
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
                  <div className="mt-auto">
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-primary"
                    >
                      Go
                    </Link>
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
