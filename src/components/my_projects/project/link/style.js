import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkedIconStyles = styled.div`
    
    width:fit-content;
    height:42px;
    position: relative;
    margin-left:20px;
    margin-top:-10px;
    display:flex;
    flex-flow:row nowrap;
    align-items:center;
    font-size:18px;
    font-weight:300;

    > img {
        width:42px;
        height:42px;
    }

    > h3 {
        padding-left:6px;
        font-weight:normal;
    }
`;


export const LinkStyles = styled(Link)`
    
`;