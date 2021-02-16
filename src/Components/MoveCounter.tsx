import React from 'react';
import { WidgetContainer, WidgetTitle, WidgetValue } from '../StyledComponents/Widget.styled';

type MoveCounterProps = {
    count: number,
};

type MoveCounterState = {};

class MoveCounter extends React.Component<MoveCounterProps, MoveCounterState> {
    render() {
        return (
            <WidgetContainer>
                <WidgetTitle>Nombre de coups</WidgetTitle>
                <WidgetValue>{this.props.count}</WidgetValue>
            </WidgetContainer>
        )
    }
}

export default MoveCounter;