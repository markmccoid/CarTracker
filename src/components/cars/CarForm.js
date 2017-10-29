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
        year: this.state.year
      }
      this.props.onSubmit(carObj);
      this.setState(() => ({
        nickName: '',
        make: '',
        model: '',
        year: ''
      }));      
    }
    const focusInput = document.getElementById("inputNickName");
    focusInput.focus();
  }
  render() {
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Input 
            label='Car Nick Name' 
            placeholder='Nick Name' 
            value={this.state.nickName} 
            onChange={this.onNickNameChange}
            id="inputNickName"
          />
          <Form.Input 
            label='Make' 
            placeholder='Make' 
            value={this.state.make} 
            onChange={this.onMakeChange}
          />
          <Form.Input 
            label='Model' 
            placeholder='Model' 
            value={this.state.model}
            onChange={this.onModelChange}
          />
          <Form.Input 
            label='Year' 
            placeholder='Year' 
            value={this.state.year}
            onChange={this.onYearChange}
          />
          
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>

        {/* <form onSubmit={this.onSubmit}>
          <input 
            type="text"
            placeholder="Car Nick Name"
            autoFocus
            value={this.state.nickName}
            onChange={this.onNickNameChange}
          />
          <input
            type="text"
            placeholder="Make"
            value={this.state.make}
            onChange={this.onMakeChange}
          />
          <input
            type="text"
            placeholder="Model"
            value={this.state.model}
            onChange={this.onModelChange}
          />
          <input
            type="text"
            placeholder="Year"
            value={this.state.year}
            onChange={this.onYearChange}
          />
          <button type="submit">Add Car</button>
        </form> */}
      </div>
    );
  }
}

export default CarForm;