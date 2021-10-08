import styled,{css} from "styled-components";
import binocular from 'assets/icons/binocular.png'
const Input = styled.input`
padding:1.5rem 3rem;
font-size:${({theme})=> theme.fontSize.s};
font-weight:${({theme})=>theme.regular};
background-color:${({theme})=>theme.grey100};
border:none;
border-radius:5rem;

::placeholder{
    text-transform: uppercase;
    letter-spacing: .1rem;
    color:${({theme})=>theme.grey300};
}

${({search})=>
search && css`
padding:1rem 2rem 1rem 4rem;
font-size:${({theme})=>theme.fontSize.xs};
background-image:url(${binocular});
background-size:2rem;
background-position:1rem 50%;
background-repeat:no-repeat;
`}
`;

export default Input;