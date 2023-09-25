import React from 'react'
import {Modal, Button} from 'semantic-ui-react'
import EntryForm from './EntryForm'

function ModalEdit({
  isOpen, 
  setIsOpen,
  updateEntry,
  description,
  value,
  isExpense,
  setDescription,
  setValue,
  setIsExpense
}) {

  const handleUpdateEntry = () => {
    updateEntry()
    setIsOpen(false)
  }

  return (
    <Modal open={isOpen}>
     <Modal.Header>Edit Entry</Modal.Header> 
      <Modal.Content>
        <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        /> 
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Close</Button>
        <Button onClick={handleUpdateEntry} primary>Ok</Button> 
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit
