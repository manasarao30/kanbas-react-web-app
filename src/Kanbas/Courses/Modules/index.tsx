export default function Modules() {
  return (
    <div>
      {/* Collapse All button, View Progress button, etc. */}

      <button id="wd-collapse-all">Collapse All</button>
      <button id="wd-view-progress">View Progress</button>
      <select id="wd-publish">
              <option selected value="Publish All">
                Publish All
              </option>
              <option value="Publish Selected">Publish Selected</option>
            </select>
      <button id="wd-add-module">+ Module</button>


      <button id="wd-add-assignment">+ Assignment</button>
      <input id="wd-search-assignment" placeholder="Search for Assignments" />

      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn how to create user interfaces with HTML
                </li>
                <li className="wd-content-item">
                  Keep working on Assignment 1
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
