import React from 'react';
import moment from 'moment';
import { Form } from 'semantic-ui-react'

// const nowdate = moment();
// console.log(nowdate.format('MMM Do, YYYY'));
class CarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nickName: props.car ? props.car.nickName : '',
      make: props.car ? props.car.make : '',
      model: props.car ? props.car.model : '',
      year: props.car ? props.car.year : '',
      licensePlate: props.car ? props.car.licensePlate || '' : '',
      VIN: props.car ? props.car.VIN || '' : ''
    }
  }
  componentDidMount() {
    const focusInput = document.getElementById("inputNickName");
    focusInput.focus();
  }
  onNickNameChange = (e) => {
    const nickName = e.target.value;
    this.setState(() => ({nickName}));
  }
  onMakeChange = (e) => {
    const make = e.target.value;
    this.setState(() => ({make}));
  }
  onModelChange = (e) => {
    const model = e.target.value;
    this.setState(() => ({model}));
  }
  onYearChange = (e) => {
    const year = e.target.value;
    if (!year || (year.match(/^\d{0,4}$/) && year.length <= 4)) {
      this.setState(() => ({year}))
    }
  }
  onVINChange = (e) => {
    const VIN = e.target.value.toUpperCase();
    this.setState(() => ({ VIN }));
  }
  onLicenseChange = (e) => {
    const licensePlate = e.target.value.toUpperCase();
    this.setState(() => ({ licensePlate }));
  }
  clearState = () => {

    this.setState(() => ({
      nickName: '',
      make: '',
      model: '',
      year: '',
      licensePlate: '',
      VIN: ''
    }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.nickName || !this.state.make || !this.state.model) {
      this.setState(() => ({error: 'Please enter a Nick Name, Make and Model'}))
    } else {
      this.setState(() => ({error: undefined}))
      const carObj = {
        nickName: this.state.nickName,
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        licensePlate: this.state.licensePlate,
        VIN: this.state.VIN
      }
      this.props.onSubmit(carObj);
      this.clearState();
    }
    const focusInput = document.getElementById("inputNickName");
    focusInput.focus();
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <div className="input-group">
          <div className="input-group__item" style={{flexGrow: 4}}>
            <input className="text-input"
              label='Car Nick Name'
              placeholder='Nick Name'
              value={this.state.nickName}
              onChange={this.onNickNameChange}
              id="inputNickName"
            />
          </div>
          <div className="input-group__item" style={{flexGrow: 2}}>
            <input className="text-input"
              placeholder='License Plate'
              value={this.state.licensePlate}
              onChange={this.onLicenseChange}
            />
          </div>
          <div className="input-group__item" style={{flexGrow: 2}}>
            <input className="text-input"
              placeholder='VIN Number'
              value={this.state.VIN}
              onChange={this.onVINChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-group__item" style={{flexGrow: 2}}>
            <input className="text-input"
              label='Make'
              placeholder='Make'
              value={this.state.make}
              onChange={this.onMakeChange}
            />
          </div>
          <div className="input-group__item" style={{flexGrow: 2}}>
            <input className="text-input"
              label='Model'
              placeholder='Model'
              value={this.state.model}
              onChange={this.onModelChange}
            />
          </div>
          <div className="input-group__item">
            <input className="text-input"
              label='Year'
              placeholder='Year'
              value={this.state.year}
              onChange={this.onYearChange}
            />
          </div>
        </div>
        <div className="input-group" style={{justifyContent: "space-between", marginRight: ".5rem"}}>
          <button className="button" type="submit">Save Car</button>
          <button className="button" onClick={(e) => {
            e.preventDefault();
            this.clearState();
          }}>Clear</button>
          <button className="button" onClick={this.props.onCancel}>Cancel</button>

        </div>
      </form>
    );
  }
}

export default CarForm;
