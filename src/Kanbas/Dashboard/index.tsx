import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="container mt-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-5 g-4">
        {/* Course 1 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1231/Home">
              <img src="/images/htmlcss.jpg" className="card-img-top fixed-size-image" alt="HTML/CSS course" />
              <div className="card-body d-flex flex-column">
                <h5 className="wd-dashboard-course-title card-title">CS1231 HTML/CSS</h5>
                <p className="card-text flex-grow-1">Full Stack software developer</p>
                <div className="d-flex justify-content-start">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </a>
          </div>
        </div>
        
        {/* Course 2 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1232/Home">
              <img src="/images/bootstrap.jpg" className="card-img-top fixed-size-image" alt="BOOTSTRAP course" />
              <div className="card-body d-flex flex-column">
                <h5 className="wd-dashboard-course-title card-title">CS1232 BOOTSTRAP</h5>
                <p className="card-text flex-grow-1">Full Stack software developer</p>
                <div className="d-flex justify-content-start">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Course 3 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1233/Home">
              <img src="/images/react.jpg" className="card-img-top fixed-size-image" alt="REACT course" />
              <div className="card-body d-flex flex-column">
                <h5 className="wd-dashboard-course-title card-title">CS1233 REACT JS</h5>
                <p className="card-text flex-grow-1">Full Stack software developer</p>
                <div className="d-flex justify-content-start">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Course 4 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1234/Home">
              <img src="/images/node.png" className="card-img-top fixed-size-image" alt="NODE course" />
              <div className="card-body d-flex flex-column">
                <h5 className="wd-dashboard-course-title card-title">CS1234 NODE JS</h5>
                <p className="card-text flex-grow-1">Full Stack software developer</p>
                <div className="d-flex justify-content-start">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Course 5 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1235/Home">
              <img src="/images/redux.jpg" className="card-img-top fixed-size-image" alt="REDUX course" />
              <div className="card-body d-flex flex-column">
                <h5 className="wd-dashboard-course-title card-title">CS1235 REDUX</h5>
                <p className="card-text flex-grow-1">Full Stack software developer</p>
                <div className="d-flex justify-content-start">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Course 6 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1236/Home">
              <img src="/images/mongoDB.jpg" className="card-img-top fixed-size-image" alt="MONGODB course" />
              <div className="card-body d-flex flex-column">
                <h5 className="wd-dashboard-course-title card-title">CS1236 MongoDB</h5>
                <p className="card-text flex-grow-1">Full Stack software developer</p>
                <div className="d-flex justify-content-start">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Course 7 */}
        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card h-100">
            <a className="wd-dashboard-course-link text-decoration-none text-dark" href="#/Kanbas/Courses/1237/Home">
              <img src="/images/api.jpg" className="card-img-top fixed-size-image" alt="API course" />
              <div className="card-body d-flex flex-column">
                <h5 className="wd-dashboard-course-title card-title">CS1237 API</h5>
                <p className="card-text flex-grow-1">Full Stack software developer</p>
                <div className="d-flex justify-content-start">
                  <button className="btn btn-primary">Go</button>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
