import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Calculate from '../Calculate/Calculate';
import './Rate.scss'


class Rate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'date': localStorage.getItem('rateDate'),
            'currencyRate': {},
            'currencyRateRubles': {}
        }
        this.currency = ['USD', 'RUB', 'CAD', 'PHP','JEP', 'JPY']
        this.getRate();

    }

    getRate = () => {
        let currentDate = new Date();
        Date.prototype.yyyymmdd = function() {
            let mm = this.getMonth() + 1; 
            let dd = this.getDate();

            return [this.getFullYear(),
                    (mm>9 ? '' : '0') + mm,
                    (dd>9 ? '' : '0') + dd
                    ].join('-');
        };

// let day_1 = new Date(2022,01,12),
//     day_2 = new Date(2022,01,11);

// function diffDates(day_one, day_two) {
//     return (day_one - day_two) / (60 * 60 * 24 * 1000);
// };

// diffDates(day_2, day_1);
// JSON.parse(localStorage.getItem('rateDate'))

        if (JSON.stringify(currentDate.yyyymmdd()) != localStorage.getItem('rateDate')){
            fetch('http://api.exchangeratesapi.io/v1/latest?access_key=c7d4954f71d737ff6eaa86bb2c770ce9')
                .then(
                    data => {
                        return data.json()
                    }
                )
                .then(
                    data => {
                        // this.setState({date: data.date})
                        localStorage.setItem('rateDate', JSON.stringify(data.date));
                        localStorage.setItem('countApiAccessTry', +localStorage.getItem('countApiAccessTry') + 1);
                        localStorage.setItem('ratesList', JSON.stringify(data.rates));
                        console.log('Local storage was rewritten');
                        console.log(`Дата из JSON: ${JSON.stringify(data.date)}`);
                        console.log(`Дата из LocalStorage: ${localStorage.getItem('rateDate')}`);
                        console.log(`Текущая дата: ${JSON.stringify(currentDate.yyyymmdd())}`);
                    }
                )
            } else {
                console.log('Currency rates loaded from local storage');
            }
            for (let i = 0; i < this.currency.length; i++){
                this.state.currencyRate[this.currency[i]] = JSON.parse(localStorage.getItem('ratesList'))[this.currency[i]]

                // this.state.currencyRate[this.currency[i]] = JSON.parse(localStorage.getItem('ratesList'))[this.currency[i]]
            }
        }
   

    render() {

        return (
            <div className='rate'>
                <h2>Курс валют на {JSON.parse(this.state.date)}</h2>
                 <Row className='mt-5'>
                    {
                        Object.keys(this.state.currencyRate).map((keyName,i) =>(
                            <Col xs lg="5" key={keyName} className='currency_item'>
                                <div className="currency_item_name">{keyName}</div>
                                <div className="currency_item_in">{this.state.currencyRate[keyName].toFixed(2)} = 1*€</div>
                            </Col>
                        )) 
                    }
                </Row>
                
                <Calculate rate={this.state.currencyRate}/>

            </div>
        );
    }
}

export default Rate;