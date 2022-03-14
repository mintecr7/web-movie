import React from 'react';
import PropTypes from 'prop-types';
//styles 

import { Wrapper } from './Button.styles';

const Button = ({ text, callback }) => (

    <Wrapper type = 'button' onClick ={callback}>
        <p>{text}</p>
    </Wrapper>

)

Button.prototype = {
    Text:   PropTypes.string,
    callback:  PropTypes.func
}
export default Button;
