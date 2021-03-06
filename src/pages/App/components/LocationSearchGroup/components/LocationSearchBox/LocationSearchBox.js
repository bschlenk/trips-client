import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';
import TextInput from 'components/TextInput/TextInput';
import './LocationSearchBox.css';

export default class LocationSearchBox extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    bounds: PropTypes.object,
    placeholder: PropTypes.string,
    initialValue: PropTypes.string,
  }

  onPlacesChanged = () => {
    const places = this.searchBox.getPlaces();
    const { location } = places[0].geometry;
    const loc = {
      lat: location.lat(),
      lng: location.lng(),
    };
    this.props.onChange(loc);
  }

  render() {
    const {
      bounds,
      initialValue,
      placeholder = 'Enter Location',
    } = this.props;

    return (
      <StandaloneSearchBox
        ref={ref => this.searchBox = ref}
        className="LocationSearchBox"
        placeholer={placeholder}
        onPlacesChanged={this.onPlacesChanged}
        bounds={bounds}
      >
        <TextInput
          placeholder={placeholder}
          clearable
          initialValue={initialValue}
        />
      </StandaloneSearchBox>
    );
  }
}
