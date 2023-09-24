import { useState } from 'react';
import { Container }  from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import EntryLines from './components/EntryLines';

function App() {
  const [entries, setEntries] = useState(initialEntries);
  return (

      <Container>
        <MainHeader title='Budget'/>
        <DisplayBalance title='Your Balance' value='2,550.53' size='small' />
        <DisplayBalances />
        <MainHeader title='History' type='h3'/>
        <EntryLines entries={entries}/>
        <MainHeader title='Add New Transaction' type='h3'/>
        <NewEntryForm />
      </Container>

  );
}

export default App;

var initialEntries = [
  {
    description: 'Work Income',
    value: '$1000.00',
    isExpense: false
  },
  {
    description: 'Water Bill',
    value: '$20.00',
    isExpense: true
  },
  {
    description: 'Rent',
    value: '$300.00',
    isExpense: true
  },
  {
    description: 'Power Bill',
    value: '$50.00',
    isExpense: true
  },
]
