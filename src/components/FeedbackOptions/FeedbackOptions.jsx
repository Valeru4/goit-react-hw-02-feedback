import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(options => (
    <Button
      key={onGenerateKey()}
      type="button"
      name={options}
      onClick={onLeaveFeedback}
    >
      {options}
    </Button>
  ));
};

const onGenerateKey = () => {
  const randomString = Math.random().toString(36).substr(2, 9);
  return randomString;
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
