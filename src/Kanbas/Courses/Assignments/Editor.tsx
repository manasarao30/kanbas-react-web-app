// export default function AssignmentEditor() {
//     return (
//       <div id="wd-assignments-editor">
//         <label htmlFor="wd-name">Assignment Name</label> <br></br>
//         <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
//         <textarea id="wd-description" rows={10} cols={80}>
//         The assignment is available online.Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section
//         Links to each of the lab assignments
//         Link to the Kanbas application
//         Links to all relevant source code repositories
//         The Kanbas application should include a link to navigate back to the landing page.
//         </textarea>
//         <br />
//         <table>

//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-points">Points</label>
//             </td>
//             <td>
//               <input id="wd-points" value={100} />
//             </td>
//           </tr>


//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-group">Assignment Group</label>
//             </td>
//             <td>
//             <select id="wd-group">
//             <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
//             <option value="QUIZZES">QUIZZES</option>
//             <option value="EXAMS">EXAMS</option>
//             <option value="PROJECTS">PROJECTS</option>
//             </select>
//             </td>
//           </tr>

//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-display-grade-as">Display Grade as</label>
//             </td>
//             <td>
//             <select id="wd-display-grade-as">
//             <option selected value="Percentage">Percentage</option>
//             <option value="Score">Score</option>
//             </select>
//             </td>
//           </tr>

//           <tr>
//             <td align="right" valign="top">
//               <label htmlFor="wd-submission-type">Submission Type</label>
//             </td>

//             <td>
//             <select id="wd-submission-type">
//             <option selected value="Online">Online</option>
//             <option value="Offline">Offline</option>
//             </select><br/>
//             <p></p>
//             <label>Online Entry Options</label><br/>
//                 <input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
//                 <label htmlFor="wd-text-entry">Text Entry</label><br/>

//                 <input type="checkbox" name="wd-website-url" id="wd-website-url"/>
//                 <label htmlFor="wd-website-url">Website URL</label><br/>

//                 <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
//                 <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

//                 <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
//                 <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

//                 <input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
//                 <label htmlFor="wd-file-upload">File Uploads</label><br/>
//             </td>
//           </tr>

//           <tr>
//             <td align="right" valign="top">
//               <label>Assign</label>
//             </td>

//             <td>
//             <label htmlFor="wd-assign-to">Assign to</label><br/>
//             <select id="wd-name">
//             <option selected value="Everyone">Everyone</option>
//             <option value="Manasa">Manasa</option>
//             </select><br/>
            
//             <label htmlFor="wd-due-date"> Due </label><br/>
//             <input type="date" id="wd-due-date" value="2024-05-13"/><br/>

//             <table>
//                 <tr>
//                   <td><label htmlFor="wd-available-from">Available from</label></td>
//                   <td><label htmlFor="wd-available-until">Until</label></td>
//                 </tr>
//                 <tr>
//                   <td><input type="date" id="wd-available-from" value="2024-05-06"/></td>
//                   <td><input type="date" id="wd-available-until" value="2024-05-20"/></td>
//                 </tr>
//               </table>
//             </td>
//           </tr>
//         </table>
//         <hr />
//         <div style={{textAlign: "right", marginTop: "20px"}} id="wd-assignment-editor-footer">
//         <button id="wd-cancel" onClick={() => alert("Cancelled")} type="button">Cancel</button>
//         <button id="wd-save" onClick={() => alert("Saved")} type="button">Save</button>
//         </div>
//       </div>

//   );}
  
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> <br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <label htmlFor="wd-description">Description</label><br />
        <textarea id="wd-description" rows={10} cols={80}>
        The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section
        Links to each of the lab assignments
        Link to the Kanbas application
        Links to all relevant source code repositories
        The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECTS">PROJECTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option selected value="Percentage">Percentage</option>
                <option value="Score">Score</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option selected value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select><br />
              
              <label>Online Entry Options</label><br />
              <input type="checkbox" name="wd-text-entry" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label><br />

              <input type="checkbox" name="wd-website-url" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label><br />

              <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label><br />

              <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label><br />

              <input type="checkbox" name="wd-file-upload" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label><br />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label><br />
              <select id="wd-assign-to">
                <option selected value="Everyone">Everyone</option>
                <option value="Manasa">Manasa</option>
              </select><br />
              
              <label htmlFor="wd-due-date"> Due </label><br />
              <input type="date" id="wd-due-date" value="2024-05-13" /><br />

              <table>
                <tr>
                  <td><label htmlFor="wd-available-from">Available from</label></td>
                  <td><label htmlFor="wd-available-until">Until</label></td>
                </tr>
                <tr>
                  <td><input type="date" id="wd-available-from" value="2024-05-06" /></td>
                  <td><input type="date" id="wd-available-until" value="2024-05-20" /></td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <hr />
        <div style={{textAlign: "right", marginTop: "20px"}} id="wd-assignment-editor-footer">
          <button id="wd-cancel" onClick={() => alert("Cancelled")} type="button">Cancel</button>
          <button id="wd-save" onClick={() => alert("Saved")} type="button">Save</button>
        </div>
      </div>
  );
}
 