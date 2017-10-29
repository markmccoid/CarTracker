import React from 'react';
import { connect } from 'react-redux'; 
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import styled from 'styled-components';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

const Wrapper = styled.div`
  display: flex;
`;
const Input = styled.input`
  padding: 5px;
  margin: 10px;
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
      <div>
        <Input 
          type="text" 
          value={this.props.filters.text}
          onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select 
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
    )
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}
export default connect(mapStateToProps)(ServiceListFilters);