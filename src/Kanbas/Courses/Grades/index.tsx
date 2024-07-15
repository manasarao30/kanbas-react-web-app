import React from "react";
import { FaSearch, FaFileImport, FaFileExport, FaCog } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { LiaFilterSolid, LiaFileExportSolid, LiaFileImportSolid } from "react-icons/lia";

export default function Grades() {
  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col text-end">
          <button className="btn btn-light me-2"><LiaFileImportSolid /> Import</button>
          <div className="btn-group me-2">
            <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><LiaFileExportSolid /> Export</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Export as CSV</a></li>
              <li><a className="dropdown-item" href="#">Export as Excel</a></li>
            </ul>
          </div>
          <button className="btn btn-light"><FaCog /></button>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-6 mb-3">
          <label htmlFor="student-search" className="form-label">Student Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" className="form-control" id="student-search" placeholder="Search Students" />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="assignment-search" className="form-label">Assignment Names</label>
          <div className="input-group">
            <span className="input-group-text"><FaSearch /></span>
            <input type="text" className="form-control" id="assignment-search" placeholder="Search Assignments" />
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col">
          <button className="btn btn-light"><LiaFilterSolid /> Apply Filters</button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>A1 SETUP <br />Out of 100</th>
              <th>A2 HTML <br />Out of 100</th>
              <th>A3 CSS <br />Out of 100</th>
              <th>A4 BOOTSTRAP <br />Out of 100</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td>Christina Allen</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Sameera Ansari</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td><input type="text" className="form-control" defaultValue="88.03%" /></td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td>Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
