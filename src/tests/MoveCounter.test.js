import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MoveCounter from '../Components/MoveCounter';
import { expect } from 'chai';

describe('MoveCounter', () => {
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

    it('Vérifie que le titre est présent et est "Nombre de coups"', () => {
        act(() => {
            ReactDOM.render(<MoveCounter count={0} />, container);
            const title = container.querySelectorAll('p')[0];
            expect(title.textContent).to.equal('Nombre de coups');
        });
    })

    it('Vérifie que le nombre de coups est présent et est "0"', () => {
        act(() => {
            ReactDOM.render(<MoveCounter count={0} />, container);
            const value = container.querySelectorAll('p')[1];
            expect(value.textContent).to.equal('0');
        });
    })

    it('Vérifie que le nombre de coups est présent et est "22"', () => {
        act(() => {
            ReactDOM.render(<MoveCounter count={22} />, container);
            const value = container.querySelectorAll('p')[1];
            expect(value.textContent).to.equal('22');
        });
    })
})