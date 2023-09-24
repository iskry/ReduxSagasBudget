import React, {useState} from 'react'
import {Checkbox, Form, Segment, Button} from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'

function NewEntryForm({ addEntry }) {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);

  return (
          <Form unstackable>
        <Form.Group>
          <Form.Input 
          icon='tags' 
          width={12} 
          label='Description' 
          placeholder='New Shiny Thing'  
          value={description}
          onChange={(event)=>setDescription(event.target.value)}
          />
          <Form.Input 
          icon='dollar' 
          iconPosition='left' 
          width={4} label='Value' 
          placeholder='100.00'
          value={value}
          onChange={(event)=>setValue(event.target.value)}
          />
        </Form.Group>
        <Segment compact>
          <Checkbox 
          toggle 
          label='is expense' 
          checked={isExpense} 
          onChange={()=>setIsExpense(oldState => !oldState)}/> 
        </Segment>
      <ButtonSaveOrCancel 
        addEntry={addEntry} 
        description={description} 
        value={value}
        isExpense={isExpense} 
      />
    </Form>
  
  )
}

export default NewEntryForm
