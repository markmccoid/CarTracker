import React from 'react';
import { connect } from 'react-redux';

import ServiceForm from './ServiceForm';
import { editService, removeService } from '../actions/services';

const EditService = (props) => {
  return (
    <div>
      <ServiceForm
        onSubmit={(serviceObj) => {
            props.dispatch(editService(props.match.params.id, serviceObj));
            props.history.push('/');
          }
        }
        expense={props.expense}
      />
      <button onClick={() => {
            props.dispatch(removeExpense(props.match.params.id));
            props.history.push('/');
          }
        }
      >Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}
export default connect(mapStateToProps)(EditService);
