import styled from 'styled-components'; 

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
`; 

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
`

export const QuickAddContainer = styled.div`
    display: flex; 
    flex-direction: row; 
`;

export const QuickAddContentContainer = styled.div`
    text-align: center;
    justify-content: space-between; 
    line-height: 0px;
`; 


export const CollectionButtonContainer = styled.button`
    border: 1px solid #e0e0e0;   
    margin: 8px;
    background: transparent; 
    width: 30px; 
    height: 30px;
    &:hover {
        background-color: #f1f1f1; 
        border: 1px solid #e0e0e0; 
    }  
`; 


export const CollectionFooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    width: 90%;
`; 


export const PriceContainer = styled.span`
    width: 10%;
    margin-right: 30px; 
`; 









