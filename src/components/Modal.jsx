import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MODAL_OPEN, MODAL_CLOSE } from '../store/actions/MainActions';
import { connect } from 'react-redux';

const Modal = ({ isOpen, name, text, closeTheModal }) => {
  // const isOpen = true;
  return (
    <ModalContainer className={`modal ${isOpen ? `modalOpen` : null}`}>
      <div className="modal-content">
        <h2 className="modal-heading">{name}</h2>
        <p className="modal-text">{text}</p>

        <div className="modal-controller">
          <button className="close-modal" onClick={closeTheModal}>
            {'close'.toUpperCase()}
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

const mapStateToProps = ({ modalState: { isOpen, name, text } }) => {
  // console.log(modalState);
  return {
    isOpen: isOpen,
    name: name,
    text: text,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeTheModal: () => {
      dispatch({ type: MODAL_CLOSE });
    },
  };
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  closeTheModal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

const ModalContainer = styled.section`
  position: fixed;
  background: #ffffff45;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: none;

  .modal-content {
    position: absolute;
    border: 1px solid #efc600;
    padding: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffec85;
    border-radius: 0.5rem;
    display: flex;
    height: 6rem;
    width: 40rem;
    justify-content: space-between;
    align-items: center;
    width: 40rem;
    color: #444;

    p {
      margin: 0 1rem;
    }

    button {
      padding: 0.7rem 1.5rem;
      border: 1px solid #000;
      border-radius: 0.2rem;
    }
  }
`;
