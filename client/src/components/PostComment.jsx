// import React, { useState } from 'react';
// import '../styles/postComment.scss';
// import { useDataFetch } from '../hooks/useDataFetch';
// import { formatTime } from '../lib/formatTime';
// import { useAuthContext } from '../hooks/useAuthContext';
// import ReplyForm from './ReplyForm';

// const PostComment = ({ postId, comments, postAuthorId }) => {
//   const [commentBody, setCommentBody] = useState('');
//   const [commentList, setCommentList] = useState(comments);
//   const [replyFormOpen, setReplyFormOpen] = useState({});
//   const { loading, error, dataFetcher } = useDataFetch();

//   // Get the current user from the authentication context
//   const { user } = useAuthContext();
//   const userId = user?.data?.user?._id;
//   const firstName = user?.data?.user?.firstName;
//   const lastName = user?.data?.user?.lastName;

//   // Handle input change for the comment textarea
//   const handleInputChange = (e) => {
//     setCommentBody(e.target.value);
//   };

//   // Handle comment submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!commentBody) return;

//     const newComment = {
//       commentBody,
//       author: {
//         _id: userId,
//         firstName: firstName,
//         lastName: lastName,
//       },
//       date: new Date().toISOString(),
//     };

//     try {
//       const response = await dataFetcher(`posts/${postId}/comments`, 'post', {
//         commentBody,
//       });
//       setCommentList([
//         ...commentList,
//         { ...newComment, _id: response.data._id },
//       ]);
//       setCommentBody('');
//     } catch (error) {
//       console.error('Error posting comment:', error);
//     }
//   };

//   // Handle reply submission
//   const handleReplySubmit = async (commentId, replyBody) => {
//     if (!replyBody) return;

//     const newReply = {
//       commentBody: replyBody,
//       author: {
//         _id: userId,
//         firstName: firstName,
//         lastName: lastName,
//       },
//       date: new Date().toISOString(),
//     };

//     try {
//       const response = await dataFetcher(
//         `posts/${postId}/comments/${commentId}/replies`,
//         'post',
//         {
//           commentBody: replyBody,
//         }
//       );
//       setCommentList(
//         commentList.map((comment) =>
//           comment._id === commentId
//             ? {
//                 ...comment,
//                 replies: [
//                   ...comment.replies,
//                   { ...newReply, _id: response.data._id },
//                 ],
//               }
//             : comment
//         )
//       );
//     } catch (error) {
//       console.error('Error posting reply:', error);
//     }
//   };

//   // Handle comment deletion
//   const handleDeleteComment = async (commentId) => {
//     try {
//       await dataFetcher(`posts/${postId}/comments/${commentId}`, 'delete');
//       setCommentList(
//         commentList.filter((comment) => comment._id !== commentId)
//       );
//     } catch (error) {
//       console.error('Error deleting comment:', error);
//     }
//   };

//   // Handle reply deletion
//   const handleDeleteReply = async (commentId, replyId) => {
//     try {
//       await dataFetcher(
//         `posts/${postId}/comments/${commentId}/replies/${replyId}`,
//         'delete'
//       );
//       setCommentList(
//         commentList.map((comment) =>
//           comment._id === commentId
//             ? {
//                 ...comment,
//                 replies: comment.replies.filter(
//                   (reply) => reply._id !== replyId
//                 ),
//               }
//             : comment
//         )
//       );
//     } catch (error) {
//       console.error('Error deleting reply:', error);
//     }
//   };

//   // Toggle reply form visibility
//   const toggleReplyForm = (commentId) => {
//     setReplyFormOpen((prevState) => ({
//       ...prevState,
//       [commentId]: !prevState[commentId],
//     }));
//   };

//   return (
//     <div className='post-comment'>
//       <h3>Comments</h3>
//       {userId !== postAuthorId && (
//         <form onSubmit={handleSubmit} className='comment-form'>
//           <textarea
//             value={commentBody}
//             onChange={handleInputChange}
//             placeholder='Write a comment...'
//             required
//           />
//           <button type='submit'>
//             {loading ? 'Posting...' : 'Post Comment'}
//           </button>
//         </form>
//       )}
//       <ul className='comment-list'>
//         {commentList?.map((comment) => (
//           <li key={comment?._id} className='comment-item'>
//             <p className='comment-author'>
//               Comment By: {comment?.author?.firstName}{' '}
//               {comment?.author?.lastName}
//             </p>
//             <p className='comment-body'>{comment?.commentBody}</p>
//             <span className='comment-date'>{formatTime(comment?.date)}</span>
//             {comment?.author?._id === userId && (
//               <button
//                 className='delete-button'
//                 onClick={() => handleDeleteComment(comment?._id)}>
//                 Delete
//               </button>
//             )}
//             {userId === postAuthorId && (
//               <>
//                 <button
//                   className='reply-button'
//                   onClick={() => toggleReplyForm(comment._id)}>
//                   {replyFormOpen[comment._id] ? 'Cancel' : 'Reply'}
//                 </button>
//                 {replyFormOpen[comment._id] && (
//                   <ReplyForm
//                     commentId={comment._id}
//                     onReplySubmit={handleReplySubmit}
//                   />
//                 )}
//               </>
//             )}
//             <ul className='reply-list'>
//               {comment.replies?.map((reply) => (
//                 <li key={reply._id} className='reply-item'>
//                   <p className='reply-author'>
//                     Author: {reply?.author?.firstName} {reply?.author?.lastName}
//                   </p>
//                   <p className='reply-body'>{reply?.commentBody}</p>
//                   <span className='reply-date'>{formatTime(reply?.date)}</span>
//                   {userId === postAuthorId && (
//                     <button
//                       className='delete-button'
//                       onClick={() => handleDeleteReply(comment._id, reply._id)}>
//                       {deletingReply ? 'deleting...' : 'Delete'}
//                     </button>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostComment;

import React, { useState } from 'react';
import '../styles/postComment.scss';
import { useDataFetch } from '../hooks/useDataFetch';
import { formatTime } from '../lib/formatTime';
import { useAuthContext } from '../hooks/useAuthContext';
import ReplyForm from './ReplyForm';
import { toast } from 'react-toastify';

const PostComment = ({ postId, comments, postAuthorId }) => {
  const [commentBody, setCommentBody] = useState('');
  const [commentList, setCommentList] = useState(comments);
  const [replyFormOpen, setReplyFormOpen] = useState({});
  const [deletingReply, setDeletingReply] = useState({});
  const [deleteError, setDeleteError] = useState({});
  const { loading, error, dataFetcher } = useDataFetch();

  // Get the current user from the authentication context
  const { user } = useAuthContext();
  const userId = user?.data?.user?._id;
  const firstName = user?.data?.user?.firstName;
  const lastName = user?.data?.user?.lastName;

  // Handle input change for the comment textarea
  const handleInputChange = (e) => {
    setCommentBody(e.target.value);
  };

  // Handle comment submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!commentBody) return;

    if (!user) return toast.error('Please login or sign up to comment');

    const newComment = {
      commentBody,
      author: {
        _id: userId,
        firstName: firstName,
        lastName: lastName,
      },
      date: new Date().toISOString(),
    };

    try {
      const response = await dataFetcher(`posts/${postId}/comments`, 'post', {
        commentBody,
      });
      setCommentList([
        ...commentList,
        { ...newComment, _id: response.data._id },
      ]);
      setCommentBody('');
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  // Handle reply submission
  const handleReplySubmit = async (commentId, replyBody) => {
    if (!replyBody) return;
    if (!user) return toast.error('Please login or sign up to send reply');

    const newReply = {
      commentBody: replyBody,
      author: {
        _id: userId,
        firstName: firstName,
        lastName: lastName,
      },
      date: new Date().toISOString(),
    };

    try {
      const response = await dataFetcher(
        `posts/${postId}/comments/${commentId}/replies`,
        'post',
        {
          commentBody: replyBody,
        }
      );
      setCommentList(
        commentList.map((comment) =>
          comment._id === commentId
            ? {
                ...comment,
                replies: [
                  ...comment.replies,
                  { ...newReply, _id: response.data._id },
                ],
              }
            : comment
        )
      );
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  // Handle comment deletion
  const handleDeleteComment = async (commentId) => {
    try {
      await dataFetcher(`posts/${postId}/comments/${commentId}`, 'delete');
      setCommentList(
        commentList.filter((comment) => comment._id !== commentId)
      );
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  // Handle reply deletion
  const handleDeleteReply = async (commentId, replyId) => {
    setDeletingReply((prevState) => ({
      ...prevState,
      [replyId]: true,
    }));
    setDeleteError((prevState) => ({
      ...prevState,
      [replyId]: null,
    }));

    try {
      await dataFetcher(
        `posts/${postId}/comments/${commentId}/replies/${replyId}`,
        'delete'
      );
      setCommentList(
        commentList.map((comment) =>
          comment._id === commentId
            ? {
                ...comment,
                replies: comment.replies.filter(
                  (reply) => reply._id !== replyId
                ),
              }
            : comment
        )
      );
    } catch (error) {
      setDeleteError((prevState) => ({
        ...prevState,
        [replyId]: 'Error deleting reply',
      }));
      console.error('Error deleting reply:', error);
    } finally {
      setDeletingReply((prevState) => ({
        ...prevState,
        [replyId]: false,
      }));
    }
  };

  // Toggle reply form visibility
  const toggleReplyForm = (commentId) => {
    setReplyFormOpen((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  return (
    <div className='post-comment'>
      <h3>Comments</h3>
      {userId !== postAuthorId && (
        <form onSubmit={handleSubmit} className='comment-form'>
          <textarea
            value={commentBody}
            onChange={handleInputChange}
            placeholder='Write a comment...'
            required
          />
          <button type='submit'>
            {loading ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      )}
      <ul className='comment-list'>
        {commentList?.map((comment) => (
          <li key={comment?._id} className='comment-item'>
            <p className='comment-author'>
              Comment By: {comment?.author?.firstName}{' '}
              {comment?.author?.lastName}
            </p>
            <p className='comment-body'>{comment?.commentBody}</p>
            <span className='comment-date'>{formatTime(comment?.date)}</span>
            {comment?.author?._id === userId && (
              <button
                className='delete-button'
                onClick={() => handleDeleteComment(comment?._id)}>
                Delete
              </button>
            )}
            {userId === postAuthorId && (
              <>
                <button
                  className='reply-button'
                  onClick={() => toggleReplyForm(comment._id)}>
                  {replyFormOpen[comment._id] ? 'Cancel' : 'Reply'}
                </button>
                {replyFormOpen[comment._id] && (
                  <ReplyForm
                    commentId={comment._id}
                    onReplySubmit={handleReplySubmit}
                  />
                )}
              </>
            )}
            <ul className='reply-list'>
              {comment.replies?.map((reply) => (
                <li key={reply._id} className='reply-item'>
                  <p className='reply-author'>
                    Author: {reply?.author?.firstName} {reply?.author?.lastName}
                  </p>
                  <p className='reply-body'>{reply?.commentBody}</p>
                  <span className='reply-date'>{formatTime(reply?.date)}</span>
                  {userId === postAuthorId && (
                    <>
                      <button
                        className='delete-button'
                        onClick={() =>
                          handleDeleteReply(comment._id, reply._id)
                        }>
                        {deletingReply[reply._id] ? 'Deleting...' : 'Delete'}
                      </button>
                      {deleteError[reply._id] && (
                        <p className='error-message'>
                          {deleteError[reply._id]}
                        </p>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostComment;
