import styled from 'styled-components';

export const AppMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`;

export const AppGameDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    width: fit-content;
`;

export const AppClickToStartP = styled.p`
    margin: 0 0 1rem 0;
    text-align: center;
`;

export const AppStatsDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    margin: 0 20px;
`;

export const AppResetButton = styled.button`
    background-color: rgb(9, 211, 172);
    padding: 12.5px 17.5px;
    border: none;
    border-radius: 5px;
    width: fit-content;
    align-self: center;
    margin: 0 0 1rem 0;
    
    sans-serif;
    font-size: 16px;
    color: rgb(41, 45, 62);
    cursor: pointer;
    &:hover {
        background-color: rgb(87 255 223);
    }
    &:focus {
        outline: none;
    }
`;