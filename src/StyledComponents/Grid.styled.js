import styled from 'styled-components';

export const GridDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0 2.5rem 0;
    width: fit-content;
    align-self: center;
`;

export const GridLineDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.5rem 20px;
    &:first-child {
        margin: 0 20px 5px 20px;
    }
    &:last-child {
        margin: 5px 20px 0 20px;
    }
`;

export const GridCellDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    margin: 0 0.5rem;
    cursor: pointer;
    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`;

export const GridCellImg = styled.img`
    max-height: 17.5vh;
    max-width: 20vw;
`;