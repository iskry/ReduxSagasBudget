import { Container, Grid, Header, Segment, Statistic, Icon, Form } from 'semantic-ui-react';
import './App.css';

function App() {
  return (

      <Container>
        <Header as='h1'>Budget</Header>
        <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
        </Statistic>
        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                      <Statistic size='tiny' color='green'>
                        <Statistic.Label style={{texAlign:"left"}}>
                          Income:
                        </Statistic.Label>
                        <Statistic.Value>
                          1,045.50
                        </Statistic.Value>
                      </Statistic>
                    </Grid.Column>
                    <Grid.Column>
                      <Statistic size='tiny' color='red'>
                        <Statistic.Label style={{texAlign:"left"}}>
                          Expenses:
                        </Statistic.Label>
                        <Statistic.Value>
                          623.50
                        </Statistic.Value>
                      </Statistic>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

      <Header as='h3'>History</Header>
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

      <Header as='h3'>Add New Transaction</Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input icon='tags' width={12} label='Description' placeholder='New Shiny Thing' />

          <Form.Input icon='dollar' iconPosition='left' width={4} label='Value' placeholder='100.00'
          />
        </Form.Group>
      </Form>
      </Container>

  );
}

export default App;
