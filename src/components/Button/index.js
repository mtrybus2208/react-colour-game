import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  color: #fff;
  background-color: ${props => props.bg || props.theme.primary}};
  border-color: ${props => props.bg || props.theme.primary};
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  border-radius: 2px;
  display: inline-block;
  min-width: 100%;
  cursor: pointer;
  padding-bottom: .5rem;
  padding-top: .5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  font-size: 1rem;
  line-height: 1.5;
  border: none;
  text-transform: uppercase;
  outline: none!important;
`;
 
Button.propTypes = {
  bg: PropTypes.string,
};
 
export default Button;