import React from 'react';
import {addFeature} from '../actions/actions';
import { connect } from 'react-redux'

const AdditionalFeature = props => {

  const handleClick = (e) => {
    e.preventDefault();
    props.addFeature(props.feature)
    console.log(props.feature)
    console.log(props.car.features)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  };
};


export default connect(mapStateToProps, { addFeature })(AdditionalFeature);
