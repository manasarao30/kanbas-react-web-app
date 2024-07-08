export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/*Course 1 */}
        <div className="wd-dashboard-course">
          <img src="/images/htmlcss.jpg" width={200} alt="HTML/CSS course" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home"
            >
              CS1234 HTML/CSS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        {/*Course 2 */}
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/bootstrap.jpg" width={200} alt="Bootstrap course" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1235/Home"
            >
              CS1235 Bootstrap
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1235/Home"> Go </a>
          </div>
        </div>

        {/*Course 3 */}
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/react.jpg" width={200} alt="React course" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1236/Home"
            >
              CS1236 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1236/Home"> Go </a>
          </div>
        </div>

        {/*Course 4 */}
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/node.jpg" width={200} alt="Node course" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1237/Home"
            >
              CS1237 Node JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1237/Home"> Go </a>
          </div>
        </div>

        {/*Course 5 */}
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/redux.jpg" width={200} alt="Redux course" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1238/Home"
            >
              CS1238 Redux
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1238/Home"> Go </a>
          </div>
        </div>

        {/*Course 6 */}
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/mongoDB.jpg" width={200} alt="MongoDB course" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1239/Home"
            >
              CS1239 MongoDB
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1239/Home"> Go </a>
          </div>
        </div>

        {/*Course 7 */}
        <div className="wd-dashboard-course">
          {" "}
          <img src="/images/api.jpg" width={200} alt="API course" />
          <div>
            <a
              className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1240/Home"
            >
              CS1240 API
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1240/Home"> Go </a>
          </div>
        </div>
      </div>
    </div>
  );
}
