import { useState } from 'react';

const ReplyForm = ({ commentId, onReplySubmit }) => {
  const [replyBody, setReplyBody] = useState('');

  const handleInputChange = (e) => {
    setReplyBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onReplySubmit(commentId, replyBody);
    setReplyBody('');
  };

  return (
    <form onSubmit={handleSubmit} className='reply-form'>
      <textarea
        value={replyBody}
        onChange={handleInputChange}
        placeholder='Write a reply...'
        required
      />
      <button type='submit'>Post Reply</button>
    </form>
  );
};

export default ReplyForm;
