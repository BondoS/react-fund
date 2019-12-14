import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Modal from './modal';
import Form from '../form/form';

jest.mock('react-redux');

let container;

beforeEach(() => {
  container = document.createElement('div');
  container.setAttribute('id', 'modal-root');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Modal', () => {
  // Test first render and componentDidMount
  it('Modal', () => {
    act(() => {
      ReactDOM.render(<Modal />, container);
    });
    mount(<Modal />);
  });

  it('Modal renders children', () => {
    expect(container.hasChildNodes()).toBeFalsy();

    act(() => {
      ReactDOM.render(
        <Modal>
          <Form />
        </Modal>,
        container
      );
    });

    expect(container.hasChildNodes()).toBeTruthy();
  });

  it('Modal escape button clicked', () => {
    const closeFn = jest.fn();

    act(() => {
      ReactDOM.render(<Modal id={1} close={closeFn} />, container);
    });

    const evt = new KeyboardEvent('keydown', { keyCode: 27 });
    document.dispatchEvent(evt);
    expect(closeFn).toHaveBeenCalledTimes(1);
  });
});
