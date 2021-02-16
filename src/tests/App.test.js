import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { Provider } from 'react-redux';
import Memory from '../App';
import store from '../Store/configureStore';
import { expect } from 'chai';

describe('Memory', () => {
    let container = null;
    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    })

    it('Peut afficher la page de jeu contenant le compteur, le timer et la grille', () => {
        ReactDOM.render(
            <Provider store={store}>
                <Memory />
            </Provider>, container);

        const timerTitle = container.querySelectorAll('p')[0];
        expect(timerTitle.textContent).to.equal('Temps');

        const moveCounterTitle = container.querySelectorAll('p')[2];
        expect(moveCounterTitle.textContent).to.equal('Nombre de coups');

        const grid = container.querySelector('.grid');
        expect(grid).to.not.be.null;
    });

    it('Vérifie que la grille est bien constituée de 4x4 cases', () => {
        ReactDOM.render(
            <Provider store={store}>
                <Memory />
            </Provider>, container);

        const grid = container.querySelector('.grid');
        expect(grid.children).to.have.lengthOf(4);

        const gridFirstLine = grid.querySelectorAll('div')[0];
        expect(gridFirstLine.children).to.have.lengthOf(4);
    })

    it('Vérifie que le premier élément de la grille est bien un div sans image', () => {
        ReactDOM.render(
            <Provider store={store}>
                <Memory />
            </Provider>, container);

        const grid = container.querySelector('.grid');
        const gridFirstLine = grid.querySelectorAll('div')[0];
        const gridFirstCell = gridFirstLine.querySelectorAll('div')[0];

        expect(gridFirstCell.children).to.have.lengthOf(0);
    })

    it('Vérifie que l\'image de la première cellule est bien affichée après un clic', () => {
        ReactDOM.render(
            <Provider store={store}>
                <Memory />
            </Provider>, container);

        const grid = container.querySelector('.grid');
        const gridFirstLine = grid.querySelectorAll('div')[0];
        const gridFirstCell = gridFirstLine.querySelectorAll('div')[0];

        expect(gridFirstCell.children).to.have.lengthOf(0);

        gridFirstCell.click();

        expect(gridFirstCell.children).to.have.lengthOf(1);
    })
})