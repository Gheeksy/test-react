import React from 'react';
import Timer from './Components/Timer';
import MoveCounter from './Components/MoveCounter';
import Grid from './Components/Grid';
import { AppMainDiv, AppGameDiv, AppStatsDiv, AppClickToStartP, AppResetButton } from './StyledComponents/App.styled';
import Cards from './Fixtures/Cards.fixtures';
import { connect } from 'react-redux';

class Memory extends React.Component {
    gameTimer;
    flipTimeout;

    constructor(props) {
        super(props);
        this.state = {
            gameStatus: 'new',
            gameTimer: 0,
            movesCount: 0,
            canTurnCards: true,
        }
    }

    componentDidMount() {
        this.initCards();
    }

    componentDidUpdate() {
        // Start the game if needed
        if (this.state.gameStatus === 'new') {
            const activeCards = this.props.cards.filter((card) => card.state === 'active');
            if (activeCards.length > 0) {
                this.initTimer();
                this.setState({
                    gameStatus: 'running'
                })
            }
        }

        this.checkActiveCards();

        // Check if the game is finished or not
        if (this.state.gameStatus === 'running') {
            const cardsNotFoundYet = this.props.cards.filter((card) => card.state !== 'found');
            if (cardsNotFoundYet.length === 0) {
                this.setState({ gameStatus: 'finish' });
                if (this.gameTimer) {
                    clearInterval(this.gameTimer);
                }
            }
        }
    }

    componentWillUnmount() {
        if (this.flipTimeout) {
            clearTimeout(this.flipTimeout)
        }

        if (this.gameTimer) {
            clearInterval(this.gameTimer)
        }
    }

    // Initialise les cartes à partir des fixtures
    initCards() {
        const gameCards = [];
        for (let i = 0; i < Cards.length; i++) {
            gameCards.push({
                type: Cards[i],
                state: 'idle',
            });
        }

        this.props.setCards(gameCards);
    }

    // Démarre le timer
    initTimer() {
        this.gameTimer = setInterval(() => {
            this.setState({
                gameTimer: this.state.gameTimer + 1
            })
        }, 1000)
    }

    // Remet la partie à zéro
    resetGame() {
        if (this.flipTimeout) {
            clearTimeout(this.flipTimeout)
        }

        if (this.gameTimer) {
            clearInterval(this.gameTimer)
        }

        this.setState({
            gameStatus: 'new',
            gameTimer: 0,
            movesCount: 0,
            canTurnCards: true,
        });

        this.initCards();
    }

    // Si deux cartes n'ont pas encore été retournées, et que la carte cliquée est dans l'état 'idle', on retourne la carte passée en paramètre
    onCardClicked = (card) => {
        if (!this.state.canTurnCards) {
            return;
        }

        if (card.state !== 'idle') {
            return;
        }

        const cardIndex = this.props.cards.indexOf(card);
        let updatedCards = this.props.cards;
        let updatedCard = updatedCards[cardIndex];

        updatedCard.state = 'active';
        updatedCards[cardIndex] = updatedCard;

        this.props.setCards(updatedCards)
    }

    // Si des cartes ont été retournées, on modifie leur état si nécessaire
    checkActiveCards() {
        if (!this.state.canTurnCards) {
            return;
        }

        const activeCards = this.props.cards.filter((card) => card.state === 'active');
        if (activeCards.length >= 2) {
            this.setState({
                movesCount: this.state.movesCount + 1
            });

            // Deux cartes identiques ont été retournées
            if (activeCards[0].type === activeCards[1].type) {
                activeCards.forEach((card) => card.state = 'found')
                this.props.setCards(this.props.cards)
                this.setState({ canTurnCards: true })
            }

            // Deux cartes différentes ont été retournées
            if (activeCards[0].type !== activeCards[1].type) {
                if (this.state.canTurnCards) {
                    this.setState({ canTurnCards: false })
                }

                // On retourne toutes les cartes après une seconde
                this.flipTimeout = setTimeout(() => {
                    this.props.cards.forEach((card) => { if (card.state === 'active') card.state = 'idle' })
                    this.props.setCards(this.props.cards)
                    this.setState({ canTurnCards: true })
                }, 1000)
            }
        }
    }

    render() {
        return (
            <AppMainDiv>
                <AppGameDiv>
                    <AppStatsDiv>
                        <Timer timer={this.state.gameTimer} />
                        <MoveCounter count={this.state.movesCount} />
                    </AppStatsDiv>

                    <AppClickToStartP>{
                        this.state.gameStatus === 'new' ?
                            'Cliquez sur une carte pour commencer' :
                            this.state.gameStatus === 'finish' ? 'Partie terminée !' : ''
                    }</AppClickToStartP>

                    <Grid
                        cards={this.props.cards}
                        nbLines={4}
                        nbColumns={4}
                        onCardClicked={this.onCardClicked}
                    />
                    <AppResetButton onClick={() => this.resetGame()}>Réinitialiser</AppResetButton>
                </AppGameDiv>
            </AppMainDiv>
        )
    }
}

function mapStateToProps(state) {
    return {
        cards: state.cards
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setCards: (cards) => {
            dispatch({ type: "SET_CARDS", payload: cards })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Memory);