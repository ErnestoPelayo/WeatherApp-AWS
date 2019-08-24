import React from 'react'
import PropTypes from 'prop-types'


const Location = ({city}) => {
    return (
            <div> {city} </div>
    );
}

Location.propTypes = {
    city: PropTypes.string.isRequired
};

export default Location;