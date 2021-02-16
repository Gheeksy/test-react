import React from 'react';
import { GridDiv } from '../StyledComponents/Grid.styled';
import GridLine from './GridLine';

type GridProps = {
    nbLines: number,
    nbColumns: number,
    cards: Array<{type: string, state: string}>,
    onCardClicked: Function
};

type GridState = {};

class Grid extends React.Component<GridProps, GridState> {
    render() {
        const { nbLines, nbColumns, cards, onCardClicked } = this.props;

        if (cards.length === 0) {
            return (<></>);
        }

        let gridLines = [];
        for (let i = 0; i < nbLines; i++) {
            const lineCards = cards.slice(i * nbColumns, i * nbColumns + nbColumns);
            gridLines.push(
                <GridLine
                    lineCards={lineCards}
                    nbColumns={nbColumns}
                    key={i.toString()}
                    onCardClicked={onCardClicked}
                />
            );
        }

        return (
            <GridDiv className='grid'>
                {gridLines.map((gridLine) => gridLine)}
            </GridDiv>
        )
    }
}

export default Grid;