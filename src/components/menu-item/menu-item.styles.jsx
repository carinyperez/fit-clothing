import styled from 'styled-components';


export const MenuItemContainer = styled.div`
    height: ${({ size }) => (size ? '300px': '350px')};
    min-width: 30%; 
    height: 240px;
    flex: 1 1 auto; 
    display: flex; 
    align-items: center; 
    justify-content: center;
    border: 1px solid black; 
    margin: 0 7.5px 15px; 
    overflow: hidden;
    background-color: #e8e8e8;

    &:hover {
        cursor: pointer;
        
        &  .background-image {
            transform: scale(1.1); 
        }
        & .content {
            opacity: 0.9;
        }
    }


    &:first-child {
        margin-right: 7.5px; 
    }
    &:last-child {
        margin-left: 7.5px; 
    }

    .background-image {
        width: ${({ size }) => (size ==='small' ? '78%': '40%')};
        height: 100%;
        background-position: center; 
        background-size: cover;

        &:hover {
            border: none; 
        }

    }
`;

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;


export const ContentContainer = styled.div`
    height: 20%;
    width: 20%; 
    padding: 0 25px; 
    display: flex; 
    flex-direction: column; 
    text-align: center; 
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute; 
    transform: scale(0.85);

`;

export const TitleContainer = styled.h1`
    font-weight: bold; 
    margin-bottom: 6px; 
    font-size: 20px; 
    color: #4a4a4a;
`;

export const SubtitleContainer = styled.span`
    font-weight: lighter; 
    font-size: 14px;
`;



