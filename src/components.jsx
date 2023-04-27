import * as React from 'react'

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

function Container({ children }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    { children }
                </div>
            </div>
        </div>
    )
}

function Banner(props) {
    return (
        <div className="row banner">
            <p className="col-auto me-auto">{props.title}</p>
            <p className="col-auto">{props.author}</p>
        </div>
    )
}

function Divider() {
    return (<> <hr/> <br/> </>)
}

function Table(props) {
    const headers = props.headers
    return (
        <>
            <table id={props.id} className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        {headers.map(h => <th key={h}>{capitalize(h)}</th>)}
                    </tr>
                </thead>

                <tbody>
                    {
                        props.data.map(
                            (row, i) => <tr key={i}>{
                                props.headers.map(
                                    key => <td key={key}>{row[key]}</td>
                                )
                            }</tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export { Container, Banner, Divider, Table }