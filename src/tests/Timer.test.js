import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Timer from '../Components/Timer';
import { expect } from 'chai';

describe('Timer', () => {
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

    it('Vérifie que le titre est présent et est "Temps"', () => {
        act(() => {
            ReactDOM.render(<Timer timer={0} />, container);
            const title = container.querySelectorAll('p')[0];
            expect(title.textContent).to.equal('Temps');
        });
    })

    it('Vérifie que le timer est présent et est "00:00"', () => {
        act(() => {
            ReactDOM.render(<Timer timer={0} />, container);
            const value = container.querySelectorAll('p')[1];
            expect(value.textContent).to.equal('00:00');
        });
    })

    it('Vérifie que le timer est présent et est "01:05"', () => {
        act(() => {
            ReactDOM.render(<Timer timer={65} />, container);
            const value = container.querySelectorAll('p')[1];
            expect(value.textContent).to.equal('01:05');
        });
    })
})