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
      serviceDescription: props.service ? props.service.serviceDescription : '',
      serviceProvider: props.service ? props.service.serviceProvider || '' : '',
      serviceNote: props.service ? props.service.serviceNote : '',
      serviceCost: props.service ? (props.service.serviceCost / 100).toString() : '',
      serviceDate: props.service ? moment(props.service.serviceDate) : moment(),
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
    const serviceDescription = e.target.value;

    if (this.state.backspace) {
      return this.setState(() => ({
          serviceDescription,
          backspace: false
        })
      );
    }
    //Setup match expression
    const matchExpr = serviceDescription.length > 0 ? '^' + serviceDescription : /.^/;
    console.log(`matchExpr: ${matchExpr}`);
    //Create RegExp Object
    const expr = new RegExp(matchExpr, 'ig');
    //Try and Find a match in array of service serviceDescriptions
    const foundItem = this.props.descArray.find((desc) => desc.match(expr));
    console.log(`foundItem ${foundItem}`);
    //If not found, return serviceDescription, else return found item and set selection range
    const finalValue = foundItem || serviceDescription;
    console.log(`finalValue: ${finalValue} -- length: ${finalValue.length}`);

    const startPos = serviceDescription.length;
    const endPos = finalValue.length;
    //this.test.setSelectionRange(1, 3);
    this.setState(() => {
        return ({
          serviceDescription: finalValue
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
    const serviceNote = e.target.value;
    this.setState(() => ({ serviceNote }));
  }
  onAmountChange = (e) => {
    const serviceCost = e.target.value;
    if (!serviceCost || serviceCost.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ serviceCost }));
    }
  }
  onDateChange = (serviceDate) => {
    if (serviceDate) {
      this.setState(() => ({ serviceDate }));
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.serviceDescription || !this.state.serviceCost) {
      this.setState(() => ({ error: 'Please enter a description and an amount' }));
    } else {
      this.setState(() => ({ error: undefined }));
      const serviceObj = {
        serviceDescription: this.state.serviceDescription,
        serviceCost: parseFloat(this.state.serviceCost, 10) * 100,
        serviceNote: this.state.serviceNote,
        serviceProvider: this.state.serviceProvider,
        serviceDate: this.state.serviceDate.valueOf(),
        carId: this.state.carId
      };
      console.log('submitted', serviceObj);
      this.props.onSubmit(serviceObj);

    }
  }
  render() {
    console.log(this.props.cars, this.state.carId)
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
              date={this.state.serviceDate}
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
              value={this.state.serviceCost}
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
              value={this.state.serviceDescription}
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
              value={this.state.serviceNote}
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
