import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";

export default function CardComp({
  Data,
  leftButton,
  rightButton,
  onCardHover,
}) {
  return (
    <MDBCard onMouseOver={() => onCardHover(Data)}>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage src={Data.image} fluid alt="product" />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{Data.title}</MDBCardTitle>
        <MDBCardText>{Data.description}</MDBCardText>
        <MDBBtn leftButton={() => leftButton}></MDBBtn>
        <MDBBtn rightButton={() => rightButton}></MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
}
