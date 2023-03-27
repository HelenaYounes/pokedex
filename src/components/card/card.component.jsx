import { CCard, CCardImage, CCardBody,CCardTitle, CCardText, CButton } from '@coreui/react';

import './card.css';

const Card = ({title, img, id, children}) => (
  <CCard style={{ width: '18rem' }}>
    <CCardImage orientation="top" src={img} />
    <CCardBody>
      <CCardTitle>{title}</CCardTitle>
      <CCardText>
        {children}
      </CCardText>
      {/* <CButton href="#">Go somewhere</CButton> */}
    </CCardBody>
  </CCard>
);

export default Card;
