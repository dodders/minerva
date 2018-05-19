import React, { Component } from 'react';
import './../../App.css';

const names = ['george','george','travis','carlo']

class Select extends Component {
    render() {
        return(
            <div>
                <form>
                    <label>Display hierarchy for:</label>
                    <select key='sel' className='spacing'>
                        {names.map(x => <option value={x}>{x}</option>)}
                    </select>

                </form>
            </div>
        );
    }
}

export default Select;