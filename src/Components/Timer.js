import React from 'react';
import { WidgetContainer, WidgetTitle, WidgetValue } from '../StyledComponents/Widget.styled';

class Timer extends React.Component {
    // Formate le nombre de secondes du timer pour l'afficher au format mm:ss
    getFormattedTimer() {
        var date = new Date(0);
        date.setSeconds(this.props.timer);
        return date.toISOString().substr(14, 5);
    }

    render() {
        return (
            <WidgetContainer>
                <WidgetTitle>Temps</WidgetTitle>
                <WidgetValue>{this.getFormattedTimer()}</WidgetValue>
            </WidgetContainer>
        )
    }
}

export default Timer;