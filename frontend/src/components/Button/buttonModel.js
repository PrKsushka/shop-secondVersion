import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const ModelBut=(t)=>{
    const {
        buttonLabel,
        className
    } = t;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    return(
        <div>
            <Button color="secondary" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>

                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
        )
}
export default ModelBut;