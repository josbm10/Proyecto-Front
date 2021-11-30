import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import PagePerfil from "../perfil";
import PageFormulario from "../formulario";
import PageError from "../error";
import PageAdopta from "../adopta";

import Header from "../header";
import Footer from "../footer";

function Main(props){
  const{children}=props;
  return <main>{children}</main>
}

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route exact path="/adopta" element={<PageAdopta />}/>
            <Route  path="/adopta/:idMascota" element={<PagePerfil />}/>
            <Route  path="/formulario" element={<PageFormulario />}/>
            <Route  path="*" element={<PageError />}/>
          </Routes>
        </Main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
