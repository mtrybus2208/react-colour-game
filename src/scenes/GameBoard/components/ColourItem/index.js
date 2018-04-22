import styled from 'styled-components';
import PropTypes from 'prop-types';
 
const ColourItem = styled.div`
  color: ${props => props.customColour};
  text-align: center;
  border: 1px solid ${props => props.customColour};
  padding: 10px;
  margin: 0px;
  margin-bottom: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 1.2rem;
  text-transform: uppercase;
`;

ColourItem.defaultProps = {
  customColour: '#eee',
};

ColourItem.propTypes = {
  customColour: PropTypes.string.isRequired,
};

export default ColourItem;