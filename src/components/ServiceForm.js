import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



// const nowdate = moment();
// console.log(nowdate.format('MMM Do, YYYY'));
class ServiceForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.service ? props.service.description : '',
      note: props.service ? props.service.note : '',
      amount: props.service ? (props.service.amount / 100).toString() : '',
      createdAt: props.service ? moment(props.service.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({description}));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({note}));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({amount}))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
    
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please enter a description and an amount'}))
    } else {
      this.setState(() => ({error: undefined}))
      const serviceObj = {
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      }
      this.props.onSubmit(serviceObj);
      console.log('submitted', serviceObj);
      
    }
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            placeholder="add a note"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button type="submit">Add Service</button>
        </form>
      </div>
    );
  }
}

export default ServiceForm;