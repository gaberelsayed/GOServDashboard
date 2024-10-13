import React from 'react'
import { Modal } from 'react-bootstrap'

export default function AllClientsModal({ showModal, handleModalClose }) {
    return <>
        <Modal
            show={showModal}
            onHide={handleModalClose}
            centered
            size="lg"
            style={{ zIndex: 9999999999 }}
        >
            <Modal.Header
                className='bg-green-100 flex justify-between items-center'
                closeButton
            >
                <Modal.Title>
                    جميع العملاء
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >

                <p>
                    مزايا المجموعة
                    <br />
                    يمكنك تخصيص مزايا لمجموعة العملاء عبر اعدادات المتجر, من خلال قيود شركات الشحن يمكنك التحكم في اي شركة شحن تظهر لعملاء المجموعة ومن خلال قيود طرق الدفع يمكنك التحكم في اي طرق دفع تظهر لعملاء المجموعة
                    <br />
                    الحماية من الإحتيال
                    <br />
                    قيود شركات الشحن
                    <br />
                </p>
            </Modal.Body>
            <Modal.Footer>
                <button className='text-black border rounded-md bg-green-100 px-6'>حفظ</button>
            </Modal.Footer>
        </Modal>
    </>
}
