import { useParams } from "react-router";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import ModuleControlButtons from "./ModuleControlButtons";
import React, { useState, useEffect } from "react";
import * as client from "./client";

import {setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();  
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const createModule = async (module: any) => {
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  const fetchModules = async () => {
    try {
      const modules = await client.findModulesForCourse(cid as string);
      dispatch(setModules(modules));
    } catch (error) {
      console.error("Failed to fetch modules:", error);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div id="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          createModule({ name: moduleName, course: cid });
          setModuleName("");
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li
              key={module.id}
              className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                <div>
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                    <input className="form-control w-50 d-inline-block" value={module.name}
                    onChange={(e) => saveModule({ ...module, name: e.target.value }) }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }} />
           
                  )}

                  {/* {module.name} */}
                </div>
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => { removeModule(moduleId); }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson.id}
                      className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <BsGripVertical className="me-2 fs-3" />
                        {lesson.name}
                      </div>
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

// import { useParams } from "react-router";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import ModulesControls from "./ModulesControls";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import * as client from "./client";
// import { setModules, addModule, updateModule, deleteModule, editModule } from "./reducer";

// export default function Modules() {
//   const { cid } = useParams();  
//   const [module, setModule] = useState<any>({
//     name: "New Module",
//     description: "New Module Description",
//     course: cid, // Associate the module with the course
//   });

//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const dispatch = useDispatch();

//   const fetchModules = async () => {
//     try {
//       const fetchedModules = await client.findModulesForCourse(cid as string);
//       dispatch(setModules(fetchedModules));
//     } catch (error) {
//       console.error("Failed to fetch modules:", error);
//     }
//   };

//   const addNewModule = async () => {
//     try {
//       const newModule = await client.createModule(cid as string, module);
//       dispatch(addModule(newModule));
//     } catch (error) {
//       console.error("Failed to add module:", error);
//     }
//   };

//   const saveModule = async (module: any) => {
//     try {
//       const updatedModule = await client.updateModule(module);
//       dispatch(updateModule(updatedModule));
//     } catch (error) {
//       console.error("Failed to update module:", error);
//     }
//   };

//   const removeModule = async (moduleId: string) => {
//     try {
//       await client.deleteModule(moduleId);
//       dispatch(deleteModule(moduleId));
//     } catch (error) {
//       console.error("Failed to delete module:", error);
//     }
//   };

//   useEffect(() => {
//     fetchModules();
//   }, [cid]);

//   return (
//     <div id="wd-modules">
//       <ModulesControls
//         moduleName={module.name}
//         setModuleName={(name) => setModule({ ...module, name })}
//         addModule={addNewModule}
//       />
//       <div>
//         <input
//           type="text"
//           value={module.description}
//           onChange={(e) => setModule({ ...module, description: e.target.value })}
//           placeholder="Module Description"
//           className="form-control mb-2"
//         />
//       </div>
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules.map((module: any) => (
//           <li
//             key={module._id}
//             className="wd-module list-group-item p-0 mb-5 fs-5 border-gray"
//           >
//             <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
//               <div>
//                 <BsGripVertical className="me-2 fs-3" />
//                 {!module.editing && module.name}
//                 {module.editing && (
//                   <input
//                     className="form-control w-50 d-inline-block"
//                     value={module.name}
//                     onChange={(e) => saveModule({ ...module, name: e.target.value })}
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         saveModule({ ...module, editing: false });
//                       }
//                     }}
//                   />
//                 )}
//               </div>
//               <ModuleControlButtons
//                 moduleId={module._id}
//                 deleteModule={() => removeModule(module._id)}
//                 editModule={() => dispatch(editModule(module._id))}
//               />
//             </div>
//             {module.lessons && (
//               <ul className="wd-lessons list-group rounded-0">
//                 {module.lessons.map((lesson: any) => (
//                   <li
//                     key={lesson.id}
//                     className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between"
//                   >
//                     <div>
//                       <BsGripVertical className="me-2 fs-3" />
//                       {lesson.name}
//                     </div>
//                     <LessonControlButtons />
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
