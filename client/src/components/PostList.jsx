// import PropTypes from 'prop-types';
// import FeaturedPost from './FeaturedPost';
// import PostCard from './PostCard';

// const PostList = ({ posts }) => {
//   const featuredPost = posts?.find((post) => post.featured);
//   const regularPosts = posts?.filter((post) => !post.featured);

//   return (
//     <div className='blog-container'>
//       {featuredPost && <FeaturedPost post={featuredPost} />}
//       <div className='post-list'>
//         {regularPosts?.map((post) => (
//           <PostCard key={post._id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// PostList.propTypes = {
//   posts: PropTypes.arrayOf(
//     PropTypes.shape({
//       _id: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//       slug: PropTypes.string.isRequired,
//       body: PropTypes.string.isRequired,
//       date: PropTypes.string.isRequired,
//       author: PropTypes.shape({
//         firstName: PropTypes.string.isRequired,
//         lastName: PropTypes.string.isRequired,
//       }).isRequired,
//       photo: PropTypes.string,
//       featured: PropTypes.bool,
//     })
//   ).isRequired,
// };

// export default PostList;
