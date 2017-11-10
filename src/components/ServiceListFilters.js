import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import styled from 'styled-components';

import { setTextFilter, setCarFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const Wrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 5px;
`;

class ServiceListFilters extends React.Component {
  state = {
    calendarFocused: null
  };
  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }))
  }
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.carIdFilter}
              onChange={(e) => {
                this.props.dispatch(setCarFilter(e.target.value));
              }}
            >
              {this.props.cars.map((car) => (
                <option key={car.id} value={car.id}>{car.nickName}</option>
              ))}
            </select>
          </div>
          <div className="input-group__item">
            <Input
              className="text-input"
              type="text"
              value={this.props.filters.text}
              placeholder="Search Descriptions"
              onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              key={this.props.filters.sortBy}
              value={this.props.filters.sortBy}
              onChange={(e) => {
              console.log(e.target.value);
                if (e.target.value === 'date') {
                  this.props.dispatch(sortByDate());
                } else {
                  this.props.dispatch(sortByAmount());
                }
              }}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates
            />
          </div>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    cars: [ { carId: '', nickName: '' }, ...state.cars]
  }
}
export default connect(mapStateToProps)(ServiceListFilters);
