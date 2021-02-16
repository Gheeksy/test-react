import React from 'react';
import { WidgetContainer, WidgetTitle, WidgetValue } from '../StyledComponents/Widget.styled';

class MoveCounter extends React.Component {
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