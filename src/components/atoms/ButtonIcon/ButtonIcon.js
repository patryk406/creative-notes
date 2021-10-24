import styled from "styled-components";

const ButtonIcon = styled.button`
  display: block;
  width: 6.7rem;
  height: 6.7rem;
  border-radius: 2rem;
  background-image: url(${({ icon }) => icon});
  background-size: 5rem;
  background-repeat: no-repeat;
  background-position: 50%;
  margin: 0.5rem;
  border: none;

  &.active {
    background-color: white;
    box-shadow: 0px 0px 80px 8px ${({ theme }) => theme.azure};
  }
  &:hover {
    transform: scale(1.3);
    background-color: white;
    box-shadow: inset 0px 0px 20px 0.5px ${({ theme }) => theme.azure};
    transition: all 0.2s ease-in;
  }
`;

export default ButtonIcon;
