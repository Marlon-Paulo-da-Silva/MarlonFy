import React from "react";
import { useDrag } from "react-dnd";

import { Container, Label } from "./styles";

export default function Card({ dataCard }) {
  return (
    <Container>
      <header>
        <Label color={dataCard.labels} />
      </header>
      <p>{dataCard.content}</p>
      {dataCard.user && (
        <img
          src="https://api.adorable.io/avatars/236/abott@adorable.png"
          alt=""
        />
      )}
    </Container>
  );
}
