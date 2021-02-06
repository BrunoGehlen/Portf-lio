import styled from 'styled-components'


export const AllBubbles = styled.div`
    
        width: 100vw;
        height: 200px;
        position:absolute;
        top:75vh;
        display:flex;
        flex-flow: row nowrap;
        overflow:hidden;
`;

export const Bubble = styled.div`
        width: 120px;
        height: 120px;
        background-color:#fafafa;
        position:absolute;
        overflow:hidden;
        border-radius:50%;
        animation:${({duration}) => `BubbleMove ${duration}s infinite`};
        animation-delay:${({delay}) => `${delay}s`};
        animation-timing-function: linear;
        left:${({pos}) => `${pos}%`};
        top:${({top}) => `${top}px`};
    
    @keyframes BubbleMove {
        0%{
            width: 120px;
            height: 120px;
            background-color:#fafafa;
            top:${({top}) => `${top}px`};
        }        
        100%{
            width: 20px;
            height: 20px;
            top:0px;
            margin-left:40px;
            margin-top:40px;
            
        }
    }
    
`;
