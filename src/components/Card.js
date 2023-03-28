import { CCard, CCardImage, CCardBody,CCardTitle, CCardText } from '@coreui/react';

const Card = ({title, img, id, children}) => {
return(
  <CCard className="card-container">
    <CCardTitle className='card-title'>{title}</CCardTitle>
    <CCardImage orientation="top" id="pokemonImage" src={img} />
    <CCardBody>
      <CCardText>
        {children}
      </CCardText>
    </CCardBody>
  </CCard>
);
};


export default Card;
