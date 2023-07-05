import { Heading } from './Section.styled';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <Heading>{title}</Heading> {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
