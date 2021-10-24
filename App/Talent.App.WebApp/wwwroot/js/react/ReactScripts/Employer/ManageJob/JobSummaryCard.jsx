import React from 'react';
import Cookies from 'js-cookie';
import { Item, Popup } from 'semantic-ui-react';
import moment from 'moment';
import { Header, Icon, Button, Card, Image } from 'semantic-ui-react'


export class JobSummaryCard extends React.Component {
    constructor(props) {
        super(props);
        this.selectJob = this.selectJob.bind(this)
        console.log("testing constructor jobsum")
    }

    // componentDidMount() {
    //     this._mounted = true
    //     console.log("componentdidmount jobsum")
    //     console.log("render jobsum")
    //     if(this.props.mounted==true)
    //     console.log(this.props.result.id)

    // }

    // componentWillUnmount()
    // {
    //    this._mounted = false
    // }
    selectJob(id) {
        var cookies = Cookies.get('talentAuthToken');
        //url: 'http://localhost:51689/listing/listing/closeJob',
    }
    render() {

        console.log("render jobsum")
        console.log(this.props)
        return (
            <React.Fragment>
                <Card.Group>
                    <Card>
                        <Card.Content>
                            <Card.Header>{this.props}</Card.Header>
                            <Card.Meta>Friends of Elliot</Card.Meta>
                            <Card.Description>
                                Steve wants to add you to the group <strong>best friends</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button.Group floated='left'>
                                <Button color='red'>Expired</Button>
                            </Button.Group>
                            <div className='ui three buttons' style={{ width: '60%', }}>
                                <Button basic color='blue'>
                                    close
                                </Button>
                                <Button basic color='blue'>
                                    edit
                                </Button>
                                <Button basic color='blue'>
                                    copy
                                </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </React.Fragment>
        )
    }
}