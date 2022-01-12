import React, { Component } from 'react';
import { Col, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Calculate.scss'


class Calculate extends Component {

    constructor(props) {
        super(props);
        this.state = {
         result: 0,
         resultRub: 0
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {rate: props.rate}
    // }

    calculateRate = () => {
        let currencyCount = document.getElementById('count').value,
                currencyTax = document.getElementById('select').value;
                // currencyName = event.target.options[event.target.selectedIndex].text;
        // this.props.rate
        if (!isNaN(document.getElementById('select').value)){
        this.setState({result:( currencyCount / currencyTax ).toFixed(2)})
        this.setState({resultRub:( currencyCount / currencyTax * this.props.rate['RUB']).toFixed(2)})
        }   
    }

    render() {

        return (
            <section className='calculator p-5'>
                <h2 className='mb-5'>Калькулятор обмена</h2>
            
            <Row>
                <Col>
                     <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Я хочу</InputGroup.Text>
                        <FormControl type="number" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="count" defaultValue='10' onChange={this.calculateRate}/>
                    </InputGroup>
                </Col>
                <Col>
               
                    <Form.Select aria-label="Default select example" onChange={this.calculateRate} id="select">
                        <option>Choose currency</option>
                        {
                        Object.keys(this.props.rate).map(keyName =>(
                            <option key={this.props.rate[keyName].toFixed(2)} value={this.props.rate[keyName].toFixed(2)}>{keyName}</option>
                        )) 
                    }
                    </Form.Select>
                </Col>
            </Row>
            <Row>
                <Col className='result'>
                    Результат: <br />
                    EUR: <b>{this.state.result}</b> <br />
                    RUB: <b>{this.state.resultRub}</b>
                </Col>
            
            </Row>
            </section>
        );
    }
}

export default Calculate;