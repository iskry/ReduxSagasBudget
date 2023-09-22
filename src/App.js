import { Container, Grid, Header, Segment, Statistic, Icon, Form, Button} from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';


function App() {
  return (

      <Container>
        <MainHeader title='Budget'/>
        <DisplayBalance title='Your Balance' value='2,550.53' size='small' />
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                      <DisplayBalance title='Income' value='1,045.50' color='green'/>
                    </Grid.Column>
                    <Grid.Column>
                      <DisplayBalance title='Expenses' value='623.50' color='red'/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
      
      <MainHeader title='History' type='h3'/>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$10.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' boredered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='green'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something Else</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$100.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' boredered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color='red'>
        <Grid columns={3} textAlign='right'>
          <Grid.Row>
            <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
            <Grid.Column width={3} textAlign='right'>$20.00</Grid.Column>
            <Grid.Column width={3}>
              <Icon name='edit' bordered/>
              <Icon name='trash' boredered/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title='Add New Transaction' type='h3'/>

        <NewEntryForm />
      </Container>

  );
}

export default App;
