import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledTextInput = styled('input')(props => props.theme.TextInput);

export default class TextInput extends PureComponent {
  static propTypes = {
    /**
     * Makes the input element required.
     */
    required: PropTypes.bool,

    /**
     * Makes the input element disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Sets visual styling to be invalid.
     */
    isInvalid: PropTypes.bool,

    /**
     * Use the native spell check functionality of the browser.
     */
    spellCheck: PropTypes.bool,

    /**
     * The placeholder text when there is no value present.
     */
    placeholder: PropTypes.string,

    /**
     * The width of the TextInput.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  static defaultProps = {
    appearance: 'default',
    display: 'block',
    disabled: false,
    isInvalid: false,
    spellCheck: true
  }

  render() {
    return <StyledTextInput {...this.props} />;
  }
}
