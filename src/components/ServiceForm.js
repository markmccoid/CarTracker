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
      carId: props.service ? props.service.carId : props.cars.length > 0 ? props.cars[0].id : 0,
      description: props.service ? props.service.description : '',
      serviceProvider: props.service ? props.service.serviceProvider || '' : '',
      note: props.service ? props.service.note : '',
      amount: props.service ? (props.service.amount / 100).toString() : '',
      createdAt: props.service ? moment(props.service.createdAt) : moment(),
      calendarFocused: false,
      error: undefined
    };
  }

  onCarChange = (e) => {
    const carId = e; //e.target.value;
    this.setState(() => ({ carId }));
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onDescriptionChange2 = (e) => {
    const description = e.target.value;
   // const descArray = Object.keys(this.props.service).map((key) => this.props.service[key].description);
    console.log(this.props.descArray);
    const expr = /description/;
    const foundItem = this.props.descArray.find((desc) => description.match(expr))
    console.log(foundItem)
    this.test.selectionStart = 1;
    this.test.selectEnd = 2;
    this.setState(() => ({ description }));
  }
  onServiceProviderChange = (e) => {
    const serviceProvider = e.target.value;
    this.setState(() => ({ serviceProvider }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please enter a description and an amount' }));
    } else {
      this.setState(() => ({ error: undefined }));
      const serviceObj = {
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        note: this.state.note,
        serviceProvider: this.state.serviceProvider,
        createdAt: this.state.createdAt.valueOf(),
        carId: this.state.carId
      };
      this.props.onSubmit(serviceObj);
      console.log('submitted', serviceObj);
    }
  }
  render() {
    return (
        <form className="form" onSubmit={this.onSubmit}>
          {this.state.error && <p className="form__error">{this.state.error}</p>}

          <div className="input-group">
            <select className="select" 
              name="car" onChange={this.onCarChange} value={this.state.carId}>
              {this.props.cars.map(car => (
                <option key={car.id} value={car.id}>{car.nickName}</option>
              ))}
            </select>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={(day) => false}
            />
            <input
              className="text-input"
              type="text"
              placeholder="amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
          </div>
          <div className="input-group">
           
            <input
              className="text-input"
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <input
              className="text-input"
              type="text"
              placeholder="Description"
              autoFocus
              ref={(input) => this.test = input}
              value={this.state.description}
              onChange={this.onDescriptionChange2}
            />
            <input
              className="text-input"
              type="text"
              placeholder="Service Provider"
              value={this.state.serviceProvider}
              onChange={this.onServiceProviderChange}
            />
          </div>
          <div className="input-group">
            <textarea
              className="textarea"
              placeholder="add a note"
              value={this.state.note}
              onChange={this.onNoteChange}
            />
          </div>
          <div>
            <button className="button" type="submit">Save Service</button>
          </div>
        </form>
    );
  }
}

export default ServiceForm;
