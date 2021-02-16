import { WidgetContainer, WidgetTitle, WidgetValue } from '../StyledComponents/Widget.styled';

function MoveCounter(props) {
    return (
        <WidgetContainer>
            <WidgetTitle>Nombre de coups</WidgetTitle>
            <WidgetValue>0</WidgetValue>
        </WidgetContainer>
    )
}

export default MoveCounter;