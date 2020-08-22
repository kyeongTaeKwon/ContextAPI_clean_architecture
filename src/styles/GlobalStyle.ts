import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    //! 원활한 작업을 위해 노말라이즈 추가! 
    ${normalize}
    
    * {
        box-sizing:border-box;
    }

    html,body
    {
        @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
        font-family: "Noto Sans KR", sans-serif ;
        background-color:${props => props.theme.colors.background};
        font-size: 10px;
        color:white;
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
