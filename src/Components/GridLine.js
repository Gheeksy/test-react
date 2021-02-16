import React from 'react';
import { GridLineDiv } from '../StyledComponents/Grid.styled';
import GridCell from './GridCell';

class GridLine extends React.Component {
    render() {
        const { nbColumns, lineCards, onCardClicked } = this.props;

        let gridCells = [];
        for (let i = 0; i < nbColumns; i++) {
            gridCells.push(
                <GridCell
                    cellCard={lineCards[i]}
                    key={i.toString()}
                    onCardClicked={onCardClicked}
                />);
        }

        return (
            <GridLineDiv>
                {gridCells.map((gridCell) => gridCell)}
            </GridLineDiv>
        )
    }
}

export default GridLine;