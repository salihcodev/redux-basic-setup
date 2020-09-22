import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  RESET,
  ADD_ONE,
  ADD_5,
  REMOVE_ONE,
  REMOVE_5,
  MODAL_OPEN,
} from '../store/actions/MainActions';

const Counter = ({
  counter,
  reset,
  addOne,
  addFive,
  removeOne,
  removeFive,
}) => {
  return (
    <CounterWrapper>
      <div className="flex-shield">
        <h1 className="counter">
          Counter: <span>{counter}</span>
        </h1>
        <section className="counter-controllers">
          {/* RESET */}
          <button type="button" onClick={reset}>
            Reset
          </button>

          {/* ADD_ONE */}
          <button type="button" onClick={addOne}>
            Add one (+1)
          </button>

          {/* ADD_5 */}
          <button type="button" onClick={addFive}>
            Add five (+5)
          </button>

          {/* REMOVE_ONE */}
          <button type="button" onClick={removeOne}>
            Remove one (-1)
          </button>

          {/* REMOVE_5 */}
          <button type="button" onClick={removeFive}>
            Remove five (-5)
          </button>
        </section>
      </div>
    </CounterWrapper>
  );
};

const mapStateToProps = ({ countState: { counter } }) => {
  // console.log(counter);
  return {
    counter: counter,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps);

  return {
    reset: () => {
      dispatch({ type: RESET });
      dispatch({
        type: MODAL_OPEN,
        payload: { name: 'Warning', text: 'You Just reset the counter!' },
      });
    },

    addOne: () => {
      dispatch({ type: ADD_ONE });
    },

    addFive: () => {
      dispatch({ type: ADD_5 });
    },

    removeOne: () => {
      dispatch({ type: REMOVE_ONE });
    },

    removeFive: () => {
      dispatch({ type: REMOVE_5 });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

const CounterWrapper = styled.article`
  padding: 20px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;

    span {
      color: #5f9ea0;
    }
  }

  section {
    display: flex;
    justify-content: center;
    margin-top: 8rem;

    button {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      color: #333;
      margin: 0.25rem;
      border: 2px solid #333;
      border-radius: 4px;
      box-shadow: 1px 1px 6px -2px black;

      &:first-child {
        font-size: 1.25rem;
        font-weight: bolder;
        color: brown;
        border-style: dashed;
      }
    }
  }
`;
