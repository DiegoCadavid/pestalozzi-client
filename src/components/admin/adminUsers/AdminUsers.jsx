import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useAxios from "../../../hooks/useAxios";
import Loading from "../../loading/Loading";
import "./adminUsers.css";
import AdminUsersForm from "./AdminUsersForm";
import AdminUsersItem from "./AdminUsersItem";

const AdminUsers = () => {
  const [students, setStudents] = useState([]);

  const { setFetch, response, loading, error } = useAxios();

  useEffect(() => {
    setFetch("/user", "get");
  }, []);

  useEffect(() => {
    if (!loading) {
      setStudents(
        response.sort((a, b) => {
          if (a.role < b.role) return -1;
          if (a.role > b.role) return 1;
          return 0;
        })
      );
    }
  }, [response]);

  useEffect(() => {
    if (error != "") {
      alert(error);
    }
  }, [error]);

  const userRemove = (id) => {
    setStudents(
      students.filter((e) => {
        if (e.id != id) {
          return e;
        }
      })
    );
  };

  const userCreate = (user) => {
    setStudents([user, ...students]);
  };

  return (
    <div className="admin_users section_app">
      <h2> Administrar usuarios </h2>
      <AdminUsersForm userCreate={userCreate} />
      <div className="admin_users__container">
        {loading && <div className="admin_users__loading">
          <Loading  weight={3} />
        </div>}
        {!loading &&
          students.map((e) => {
            return (
              <AdminUsersItem
                key={e.id}
                userRemove={userRemove}
                name={e.username}
                role={e.role}
                id={e.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default AdminUsers;
