import * as React from 'react'
import ReactDOM from 'react-dom'
import { Container, Banner, Divider, Table } from "./components"
import { modes, scaleOptions, impliedChords } from "./scales.js"
import "./css/main.css"

function App() {
    return (
        <Container>
            <Banner title="Jazz Notes" author="Arthur Lui"/>
            <Divider/>

            <h4>Modes &amp; Special Scales</h4>
            <Table
                id="table-scales" data={modes}
                headers={["name", "scale", "from", "start"]}
            /> 
            <Divider/>

            <h4>Scale Options</h4>
            <Table
                id="table-scale-options" data={scaleOptions}
                headers={["chord", "scales"]}
            /> 
            <Divider/>

            <h4>Implied Chords</h4>
            <Table
                id="table-implied-chords" data={impliedChords}
                headers={["scale", "chords"]}
            /> 
            <Divider/>
        </Container>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))