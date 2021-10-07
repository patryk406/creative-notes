import styled,{css} from 'styled-components';

const Button = styled.button`
background-color:#7294f3;
border:none;
border-radius:50px;
width:150px;
height:35px;
font-size:1.6rem;
text-transform:uppercase;

${({secondary})=>(
    secondary && css`
background-color:#adadad;
width:80px;
height:25px;
font-size:1.3rem;
    `
)}
`;

export default Button;