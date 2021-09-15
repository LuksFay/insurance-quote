import React, {useState} from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import styled from '@emotion/styled';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div `
  max-width: 601px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div `
  background-color: #fff;
  padding: 3rem;
  max-width: 503px;
  margin: 0 auto;
`

function App() {

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false)
  // extraer datos de resumen
  const {cotizacion, datos} = resumen;

  return (
  <>
    <Contenedor>
      <Header titulo='Cotizador de seguros'/>
    </Contenedor>
    
    <ContenedorFormulario>
      <Formulario guardarResumen={guardarResumen} guardarCargando={guardarCargando}/>
      {cargando ? <Spinner /> : null } 
      
      {!cargando ? <> <Resumen datos={datos}/>  <Resultado cotizacion={cotizacion}/> </> : null}
    </ContenedorFormulario>
  </>
  );
}



export default App;
