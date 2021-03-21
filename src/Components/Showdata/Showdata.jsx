import React, { Component } from 'react'
import './Showdata.css'

export default class Showdata extends Component {

    state = { usdt: 1, CNY: 0 }

    componentDidMount() {
        const url = "https://api.mugglepay.com/api/usdt"
        fetch(url,{
            method:'GET'
        }).then(res => res.json()).then(data => setInterval(this.setState({ CNY: parseFloat(data.price) }),500) )

    }

    render() {
        return (
            <div>
                <p className="usdtContainer"> 1 USDT is roughly</p>
                <p className="cnyContainer">{this.state.usdt * this.state.CNY}</p><span id="cnyUnit">CNY</span>
            </div>
        )

    }
}
