import { WidgetContainer, WidgetTitle, WidgetValue } from '../StyledComponents/Widget.styled';

function Timer(props) {
    return (
        <WidgetContainer>
            <WidgetTitle>Temps</WidgetTitle>
            <WidgetValue>00:00</WidgetValue>
        </WidgetContainer>
    )
}

export default Timer;