import { FaTrash } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";

export default function AssignmentControlButtons({
  assignmentId,
  deleteAssignment,
}: {
  assignmentId: string;
  deleteAssignment: (assignmentId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaTrash
        className="text-danger me-2 mb-1"
        onClick={() => deleteAssignment(assignmentId)}
      />
      <GreenCheckmark />
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
