import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import AdminGaleryForm from "./AdminGaleryForm";
import AdminGaleryItem from "./AdminGaleryItem";

import "./adminGalery.css";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import Loading from "../../loading/Loading";

const AdminGalery = () => {
  const [galeryImages, setGaleryImages] = useState([]);
  const { setFetch, response, loading, error } = useAxios();

  //  Obtenemos las imagenes
  useEffect(() => {
    setFetch("/galery", "get");
  }, []);

  useEffect(() => {
    if (!loading && error == "") {
      setGaleryImages(response);
    }
  }, [response]);

  const handleAdd = (image) => {
    setGaleryImages([image, ...galeryImages]);
  };

  const handleRemove = (id) => {
    setGaleryImages(
      galeryImages.filter((g) => {
        return g.id != id;
      })
    );
  };

  return (
    <div className="admin_galery section_app">
      <h2> Admin Galery </h2>
      <AdminGaleryForm handleAdd={handleAdd} />
      <div className="admin_galery__container">

        {loading && <div className="admin_galery__loading">
          <Loading weight={5} />
        </div>}

        {galeryImages.map((g) => {
          return <AdminGaleryItem key={g.id} id={g.id} url={g.url} onRemove={handleRemove} />;
        })}
      </div>
    </div>
  );
};

export default AdminGalery;
