import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PagePerfil from "../Pages/perfil";
import PageFormulario from "../Pages/formulario";
import PageError from "../Pages/error";
import PageAdopta from "../Pages/adopta";
import PageHome from "../Pages/home";
import PageModificarAnimales from "../Pages/modificarAnimales";
import PageRegistroAnimales from "../Pages/registroAnimales";
import PageEliminarAnimales from "../Pages/eliminarAnimales";
import PageDonar from "../Pages/donar";

import Header from "../components/header";
import Footer from "../components/footer";
import Main from "../components/main";
import Filter from "../components/filter";


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main>
          <Routes>
          <Route exact path="/filter" element={<Filter />} />
            <Route exact path="/" element={<PageHome />} />
            <Route path="/donar" element={<PageDonar />} />
            <Route path="/eliminar" element={<PageEliminarAnimales />} />
            <Route path="/modificar" element={<PageModificarAnimales />} />
            <Route path="/registrar" element={<PageRegistroAnimales />} />
            <Route exact path="/adopta" element={<PageAdopta />} />
            <Route path="/adopta/:idMascota" element={<PagePerfil />} />
            <Route path="/formulario" element={<PageFormulario />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
