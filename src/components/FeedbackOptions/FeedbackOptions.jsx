export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(options => (
    <button
      key={onGenerateKey()}
      type="button"
      name={options}
      onClick={onLeaveFeedback}
    >
      {options}
    </button>
  ));
};

const onGenerateKey = () => {
  const randomString = Math.random().toString(36).substr(2, 9);
  return randomString;
};
