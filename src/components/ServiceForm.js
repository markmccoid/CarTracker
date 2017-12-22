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
      error: undefined,
      backspace: false
    };
  }

  onCarChange = (e) => {
    const carId = e.target.value; //e.target.value;
    this.setState(() => ({ carId }));
  }

    onKeyDown = (e) => {
    const keyPressed = e.key;
    const description = e.target.value;
    //Check if Backspace or Delete
    if (keyPressed === 'Backspace' || keyPressed === 'Delete') {
      this.setState((prevState) => ({backspace: true}))
    }
  }
  onDescriptionChange = (e) => {
    //Get input value
    //CHECK FOR this.state.backspace and if true, set state to target.value passed
    // and set backspace to false
    const description = e.target.value;
    if (this.state.backspace) {
      return this.setState(() => ({
          description,
          backspace: false
        })
      );
    }
    //Setup match expression
    const matchExpr = description.length > 0 ? '^' + description : /.^/;
    console.log(`matchExpr: ${matchExpr}`);
    //Create RegExp Object
    const expr = new RegExp(matchExpr, 'ig');
    //Try and Find a match in array of service descriptions
    const foundItem = this.props.descArray.find((desc) => desc.match(expr));
    console.log(`foundItem ${foundItem}`);
    //If not found, return description, else return found item and set selection range
    const finalValue = foundItem || description;
    console.log(`finalValue: ${finalValue} -- length: ${finalValue.length}`);

    const startPos = description.length;
    const endPos = finalValue.length;
    //this.test.setSelectionRange(1, 3);
    this.setState(() => {
        return ({
          description: finalValue
        })
      },
      () => {
        if (foundItem) {
          this.descInput.setSelectionRange(startPos, endPos);
        }
      }
    );
    // this.test.selectionStart = 1;
    // console.log(description.length);
    // this.test.selectEnd = foundItem.length;
  }
  onServiceProviderChange = (e) => {
    //Get input value

    const serviceProvider = e.target.value;
    //CHECK FOR this.state.backspace and if true, set state to target.value passed
    // and set backspace to false
    if (this.state.backspace) {
      return this.setState(() => ({
          serviceProvider,
          backspace: false
        })
      );
    }
    //Setup match expression
    const matchExpr = serviceProvider.length > 0 ? '^' + serviceProvider : /.^/;
    //Create RegExp Object
    const expr = new RegExp(matchExpr, 'ig');
    //Try and Find a match in array of service descriptions
    const foundItem = this.props.serviceArray.find((service) => service.match(expr));
    //If not found, return description, else return found item and set selection range
    const finalValue = foundItem || serviceProvider;
    const startPos = serviceProvider.length;
    const endPos = finalValue.length;
    //this.test.setSelectionRange(1, 3);
    this.setState(() => {
        return ({
          serviceProvider: finalValue
        })
      },
      () => {
        if (foundItem) {
          this.serviceInput.setSelectionRange(startPos, endPos);
        }
      }
    );
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
                <option key={car.nickName} value={car.id}>{car.nickName}</option>
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
              ref={(input) => this.descInput = input}
              value={this.state.description}
              onChange={this.onDescriptionChange}
              onKeyDown={this.onKeyDown}
            />
            <input
              className="text-input"
              type="text"
              placeholder="Service Provider"
              ref={(input) => this.serviceInput = input}
              value={this.state.serviceProvider}
              onChange={this.onServiceProviderChange}
              onKeyDown={this.onKeyDown}
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
