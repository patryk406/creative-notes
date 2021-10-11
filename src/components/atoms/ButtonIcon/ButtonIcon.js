import styled from "styled-components";

const ButtonIcon = styled.button`
  display: block;
  width: 6.7rem;
  height: 6.7rem;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-size: 5rem;
  background-repeat: no-repeat;
  background-position: 40%;
  margin: 0.5rem;
  border: none;

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
