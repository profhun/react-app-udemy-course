import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();
now.format('YYYY-MM-DD');

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            focused: false,
            error: undefined
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({
            description
        }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^(\d+(\.\d{0,2})?)?$/)){
            this.setState(() => ({
                amount
            }));
        }
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({
            note
        }));
    };

    onDateChange = (createdAt) => {
        if (createdAt){
            this.setState(() => ({
                createdAt
            }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            focused
        }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount){
            this.setState(() => ({
                error: 'Bíííííztos?'
            }));
        } else {
            this.setState(() => ({
                error: undefined
            }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
    };

    render(props){
        return (
            <div>
                {this.state.error && <div>{this.state.error}</div>}
                <form
                    onSubmit={this.onSubmit}
                >
                    <input
                        type="text"
                        name="description"
                        placeholder="description"
                        value={this.state.description}
                        autoFocus
                        onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        name="amount"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={(day) => false}
                    />
                    <textarea
                        name="note"
                        placeholder="note"
                        onChange={this.onNoteChange}
                    >
                        {this.state.note}
                    </textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }
}
