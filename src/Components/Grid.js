import { GridDiv, GridLineDiv, GridCellDiv, GridCellImg } from '../StyledComponents/Grid.styled';
import images from '../images';

function Grid(props) {
    const { nbLines, nbColumns, cards } = props;

    let gridLines = [];
    for (let i = 0; i < nbLines; i++) {
        const lineCards = cards.slice(i*nbColumns, i*nbColumns + nbColumns);
        gridLines.push(<GridLine lineCards={lineCards} nbColumns={nbColumns} key={i.toString()} />);
    }

    return (
        <GridDiv>
            {gridLines.map((gridLine) => gridLine)}
        </GridDiv>
    )
}

function GridLine(props) {
    let gridCells = [];
    for (let i = 0; i < props.nbColumns; i++) {
        gridCells.push(<GridCell cellCard={props.lineCards[i]} key={i.toString()} />);
    }

    return (
        <GridLineDiv>
            {gridCells.map((gridCell) => gridCell)}
        </GridLineDiv>
    )
}

function GridCell(props) {
    return (
        <GridCellDiv>
            <GridCellImg alt={props.cellCard} src={images[props.cellCard]} />
        </GridCellDiv>
    )
}

export default Grid;