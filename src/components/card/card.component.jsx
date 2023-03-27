import { Link } from 'react-router-dom';
import {CCard, CCardImage, CCardBody, CCardText, CCardTitle, CButton} from '@coreui/react';

const Card = ({pokemon, id}) => (
  <CCard style={{ width: '18rem' }}>
     <CCardImage orientation="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id}.png`} />
     <CCardBody>
       <CCardTitle>{pokemon.name}</CCardTitle>
       <CCardText>
         Some quick example text to build on the card title and make up the bulk of the card's content.
       </CCardText>
       <Link to={`pokemon/${id}`}><CButton>Go somewhere</CButton></Link>
     </CCardBody>
   </CCard>

);

export default Card;
