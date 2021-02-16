import React from 'react';
import { GridLineDiv } from '../StyledComponents/Grid.styled';
import GridCell from './GridCell';

type GridLineProps = {
    nbColumns: number,
    lineCards: Array<{type: string, state: string}>,
    onCardClicked: Function
};

type GridLineState = {};

class GridLine extends React.Component<GridLineProps, GridLineState> {
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