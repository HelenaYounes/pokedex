import { CCard, CCardImage, CCardBody,CCardTitle, CCardText } from '@coreui/react';

const Card = ({title, img, id, children}) => {
return(
  <CCard className="card-container" style={{ width: '18rem'}}>
    <CCardImage orientation="top" id="pokemonImage" src={img} />
    <CCardBody>
      <CCardTitle>{title}</CCardTitle>
      <CCardText>
        {children}
      </CCardText>
    </CCardBody>
  </CCard>
);
};


export default Card;
