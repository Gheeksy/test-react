import React from 'react';
import { GridCellDiv, GridCellImg, GridCellDivFound } from '../StyledComponents/Grid.styled';
import images from '../images';

class GridCell extends React.Component {
    render() {
        const { cellCard, onCardClicked } = this.props;

        if (cellCard.state === 'active') {
            return (
                <GridCellDiv onClick={() => onCardClicked(cellCard)}>
                    <GridCellImg
                        alt={cellCard.type}
                        src={images[cellCard.type]}
                    />
                </GridCellDiv>
            )
        }

        if (cellCard.state === 'found') {
            return (
                <GridCellDiv onClick={() => onCardClicked(cellCard)}>
                    <GridCellDivFound />
                    <GridCellImg
                            alt={cellCard.type}
                            src={images[cellCard.type]}
                        />
                </GridCellDiv>
            )
        }

        return (
            <GridCellDiv onClick={() => onCardClicked(cellCard)} />
        )
    }
}

export default GridCell;