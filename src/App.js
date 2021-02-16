import Timer from './Components/Timer';
import MoveCounter from './Components/MoveCounter';
import Grid from './Components/Grid';
import { AppMainDiv, AppGameDiv, AppStatsDiv, AppClickToStartP, AppResetButton } from './StyledComponents/App.styled';
import Cards from './Fixtures/Cards.fixtures';

export default function Memory() {
    return (
        <AppMainDiv>
            <AppGameDiv>
                <AppStatsDiv>
                    <Timer />
                    <MoveCounter />
                </AppStatsDiv>

                <AppClickToStartP>Cliquez sur une carte pour commencer</AppClickToStartP>

                <Grid cards={Cards} nbLines={4} nbColumns={4} />
                <AppResetButton>Réinitialiser</AppResetButton>
            </AppGameDiv>
        </AppMainDiv>
    )
}
