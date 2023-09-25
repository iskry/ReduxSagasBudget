import React from 'react'
import {Container} from 'semantic-ui-react'
import EntryLine from './EntryLine'

function EntryLines({entries, deleteEntry, editEntry, setIsOpen }) {
  return (
    <Container>
    {entries.map((entry) => (
      <EntryLine
        key={entry.id}
        {...entry}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
        setIsOpen={setIsOpen}
      /> 
    ))}
    </Container>
  )
}

export default EntryLines