import React, { useState, useEffect } from "react";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import * as client from "./client";
import PeopleDetails from "./Details";
import { Link, useNavigate, useParams } from "react-router-dom";
export default function PeopleTable() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const createUser = async () => {
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `newuser${Date.now()}`,
      password: "password123",
      section: "S101",
      role: "STUDENT",
      loginId: `00123456${new Date().getTime().toString()}S`,
      lastActivity: new Date().getTime().toString(),
      totalActivity: "00:00:00",
      email: "",
    });
    setUsers([...users, user]);
    navigate(`/Kanbas/Courses/${cid}/People/${user._id}`);
  };
  const { cid } = useParams();
  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };
  const filterUsersByNameAndRole = async (name: string, role: string) => {
    setName(name);
    setRole(role);
    if (name && role) {
      const users = await client.findUsersByNameAndRole(name, role);
      setUsers(users);
    }
    else if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    }
    else if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div id="wd-people-table">
      <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        People
      </button>
      <PeopleDetails fetchUsers={fetchUsers} />
      <input type="text" onChange={(e) => filterUsersByNameAndRole(e.target.value, role)} placeholder="Search people"
        className="form-control float-start w-25 me-2 wd-filter-by-name" />
      <select value={role} onChange={(e) => filterUsersByNameAndRole(name, e.target.value)}
        className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>
        <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option>
        <option value="FACULTY">Faculty</option>
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <Link className="text-decoration-none enable-button-pointers" to={`/Kanbas/Courses/${cid}/People/${user._id}`}>
                  <FaUserCircle className="fs-1 text-secondary me-2" />
                  <span className="wd-first-name text-danger">{user.firstName} </span>
                  <span className="wd-last-name text-danger">{user.lastName}</span>
                </Link>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
