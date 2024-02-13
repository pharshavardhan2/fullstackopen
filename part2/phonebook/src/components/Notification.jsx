const Notification = ({ message }) => {
  return message === null ? null : <div className={`notification ${message.className}`}>{message.content}</div>
}

export default Notification