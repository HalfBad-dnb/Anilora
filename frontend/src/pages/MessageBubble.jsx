import PropTypes from 'prop-types'; // Import PropTypes

const MessageBubble = ({ message, isSent }) => {
  return (
    <div className={`message-bubble ${isSent ? 'sent' : 'received'}`}>
      {message}
    </div>
  );
};

// Define the expected types for the props
MessageBubble.propTypes = {
  message: PropTypes.string.isRequired, // message should be a string and is required
  isSent: PropTypes.bool.isRequired, // isSent should be a boolean and is required
};

export default MessageBubble;
