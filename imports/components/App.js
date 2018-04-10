import React from 'react';
import {Grid, Segment, Menu, Modal, Header} from 'semantic-ui-react';

import {BusTicketSchema} from '/imports/api/schemaTicket';

import TicketForm from './ticketForm.js';
//import CustomForm from './CustomForm';

export default class App extends React.Component {
    state = {
        selectedTab: 'ticketForm',
        modalData: null,
    };
    openTab = selectedTab => this.setState({selectedTab});

    onSubmit = data => {
        // You can do anything with this data,
        // send it to the server using Meteor.call, invoke GraphQL mutation or just display in a modal :)
        this.setState({modalData: data})
    };

    closeModal = () => this.setState({modalData: null});

    render () {
        const {selectedTab, modalData} = this.state;
        return (
            <Grid verticalAlign="middle" centered className="app-container">
                <Grid.Column width={8}>
                    <Header as="h2">Tickets</Header>
                    <Segment>
                        <Menu pointing secondary>
                            {['ticketForm'].map(tab => (
                                    <Menu.Item
                                        key={tab}
                                        name={tab}
                                        active={tab === selectedTab}
                                        onClick={() => this.openTab(tab)}
                                    />
                                )
                            )}
                        </Menu>

                        {/* Not very elegant but simple and working tabs system */}
                        {selectedTab === 'ticketForm' && (
                            <TicketForm
                                schema={BusTicketSchema}
                                onSubmit={this.onSubmit}
                            />
                        )}
                    </Segment>

                    <Modal
                        open={!!modalData}
                        onClose={this.closeModal}
                        header="Data submitted!"
                        content={(
                            <Modal.Content>
                                <pre>{JSON.stringify(modalData, null, 4)}</pre>
                            </Modal.Content>
                        )}
                        actions={[
                            {key: 'ok', content: 'Ok', color: 'blue', onClick: this.closeModal}
                        ]}
                    />
                </Grid.Column>
            </Grid>
        )
    }
}