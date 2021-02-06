import styled from 'styled-components'

export const MyInfoStyles = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#2f2f2f;
    display:flex;
    flex-flow: column nowrap;
    text-align:center;
    color:#fafafa;

    > h1 {
        font-size:52px;
        font-weight:700;
        @media screen and (min-width: 769px) {
            font-size:62px;
        }
    }
    > h2 {
        font-size:19px;
        display:block;
        width:300px;
        margin:auto;
        margin-top:-48px;
        font-weight:300;
        @media screen and (min-width: 769px) {
            font-size:22px;
        }
    }
    @media screen and (min-width: 769px) {
        width: 50vw;
        left:0;
    }

`;
