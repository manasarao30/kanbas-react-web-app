import React from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, id } = useParams<{ cid: string; id: string }>();

  console.log("Course ID:", cid);
  console.log("Assignment ID:", id);

  const assignment = db.assignments.find((a) => a._id === id);

  console.log("Found Assignment:", assignment);

  if (!assignment) {
    return (
      <div className="container mt-4">
        <div className="alert alert-danger" role="alert">
          Assignment not found.
        </div>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-primary"
        >
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input id="wd-name" className="form-control" value={assignment.title} />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea id="wd-description" className="form-control" rows={8}>
          {
            "The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following:\n • Your full name and section.\n • Links to each of the lab assignments.\n • Link to the Kanbas application.\n • Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."
          }
        </textarea>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            id="wd-points"
            className="form-control"
            value={assignment.points}
          />
        </div>
      </div>
      <br />

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select
            id="wd-group"
            className="form-control"
            defaultValue="ASSIGNMENTS"
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECTS">PROJECTS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label text-end"
        >
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select
            id="wd-display-grade-as"
            className="form-control"
            defaultValue="Percentage"
          >
            <option value="Percentage">Percentage</option>
            <option value="Score">Score</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-2 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border p-3">
            <select
              id="wd-submission-type"
              className="form-control mb-3"
              defaultValue="Online"
            >
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <label className="form-label">Online Entry Options</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-text-entry"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-website-url"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-media-recordings"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-student-annotation"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="wd-file-upload"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-assign" className="col-sm-2 col-form-label text-end">
          Assign
        </label>
        <div className="col-sm-10">
          <div className="border p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label">
                Assign to
              </label>
              <input
                type="text"
                id="wd-assign-to"
                className="form-control"
                value="Everyone"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label">
                Due
              </label>
              <input
                type="datetime-local"
                id="wd-due-date"
                className="form-control"
                value={"2024-05-13T23:59"}
              />
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from" className="form-label">
                  Available from
                </label>
                <input
                  type="datetime-local"
                  id="wd-available-from"
                  className="form-control"
                  value={"2024-05-06T00:00"}
                />
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="form-label">
                  Until
                </label>
                <input
                  type="datetime-local"
                  id="wd-available-until"
                  className="form-control"
                  value={"2024-05-20T00:00"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          id="wd-cancel"
          className="btn btn-light me-2"
        >
          Cancel
        </Link>
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          id="wd-save"
          className="btn btn-danger"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
