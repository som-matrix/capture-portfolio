import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background-color:#1b1b1b;
    font-family: 'Inter', sans-serif;
}
h2{
    font-size:4rem;
    font-weight:400;
    color:white;
}
span{
    font-size:4rem;
    font-weight:700;
    color:#62da97;
}
h3{
    font-size:2.5rem;
    font-weight:700;
    color:white;
}
p{
    font-size:1.5rem;
    padding: 2.5rem 0;
    line-height:150%;
    color:white;
}
button{
    background:none;
    padding:1rem 2rem;
    outline:none;
    border: 2px solid #62da97;
    color:white;
    font-size:1rem;
    font-weight:700;
    transition:all .5s ease;
    cursor: pointer;
    &:hover{
        background-color:#62da97;
        color:white;
    }
}

`

export default GlobalStyle;