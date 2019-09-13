import React from 'react'
import {Spinner, Container} from 'react-bootstrap'

export default class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Spinner animation="border" style={{position:'absolute', left:'50%', top: '35%'}} />
                </Container>
            </div>
        )
    }
}

// export default notFoundPage