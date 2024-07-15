import React from 'react';
import { IoEllipsisVertical } from 'react-icons/io5';
import { BsPlus } from 'react-icons/bs';
import GreenCheckmark from './GreenCheckmark';
 
export default function AssignmentHeader() {
  return (
    <div className="float-end">
      <BsPlus className="fs-4" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}