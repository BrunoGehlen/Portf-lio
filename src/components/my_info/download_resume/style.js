import styled from 'styled-components'

export const DownloadButton = styled.div`
    width:220px;
    height:40px;
    border: 2px solid #fafafa;
    margin: auto;
    margin-bottom:280px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:18px;
    font-weight:300;
    cursor: pointer;
    z-index:2;
    
    @media screen and (min-width: 769px) {
        margin-bottom:150px;
        width:220px;
        height:40px;
    }
`;