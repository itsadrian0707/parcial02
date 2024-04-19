import { Route, Routes } from "react-router-dom";

import { Inicio } from "../../componentes/contenedor/Inicio";
import { Acerca } from "../../componentes/otros/Acerca";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

import { PeliculaCrear } from "../../componentes/peliculas/PeliculaCrear";
import { PeliculaAdmin } from "../../componentes/peliculas/PeliculaAdmin";
import { PeliculaListar } from "../../componentes/peliculas/PeliculasListar";

export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/pelcre" element={<PeliculaCrear />} />
      <Route path="/pellis" element={<PeliculaListar />} />
      <Route path="/peladm" element={<PeliculaAdmin />} />

      <Route path="/acer" element={<Acerca />} />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
