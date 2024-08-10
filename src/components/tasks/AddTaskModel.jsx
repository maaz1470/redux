import React from 'react';
import Modal from '../ui/Modal';

const AddTaskModel = ({isOpen, setIsOpen}) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Rahat Hossain">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo velit nihil provident magnam, explicabo pariatur aut molestiae? Temporibus sapiente blanditiis repellendus minus tenetur similique, facilis maiores iusto maxime veniam explicabo.</p>
        </Modal>
    );
};

export default AddTaskModel;