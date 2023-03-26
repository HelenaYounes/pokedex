import {CCard, CCardImage, CCardBody, CCardText, CCardTitle, CButton} from '@coreui/react';

const Card = ({pokemon, id}) => (
  <CCard style={{ width: '18rem' }}>
    {console.log(pokemon)}
     <CCardImage orientation="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/${id+1}.png`} />
     <CCardBody>
       <CCardTitle>{pokemon.name}</CCardTitle>
       <CCardText>
         Some quick example text to build on the card title and make up the bulk of the card's content.
       </CCardText>
       <CButton href="#">Go somewhere</CButton>
     </CCardBody>
   </CCard>

);

export default Card;
