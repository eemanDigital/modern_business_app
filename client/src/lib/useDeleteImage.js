import { toast } from 'react-toastify';
import { useDataFetch } from '../hooks/useDataFetch';

const useDeleteImgHandler = () => {
  const { dataFetcher } = useDataFetch();

  // Image deletion utility function
  const extractPublicIdFromUrl = (url) => {
    try {
      // Remove the file extension
      const publicId = url.split('/').slice(-2).join('/').split('.')[0];

      return publicId;
    } catch (error) {
      console.error('Error extracting public ID:', error);
      return null;
    }
  };

  // Component code for delete image handler
  const deleteImg = async (imageUrl) => {
    try {
      // First confirm with user
      const confirmed = window.confirm(
        'Are you sure you want to delete this image?'
      );

      if (!confirmed) return;

      // Extract public_id from the Cloudinary URL
      const public_id = extractPublicIdFromUrl(imageUrl);

      if (!public_id) {
        toast.error('Invalid image URL');
        return;
      }

      // Call the API to delete the image
      await dataFetcher('posts/delete', 'delete', {
        public_id: public_id,
      });

      // // If image deletion from Cloudinary was successful, update the post
      // if (response.status === 'success') {
      //   // Update the post to remove the photo field
      //   await dataFetcher(`posts/${postId}`, 'patch', {
      //     photo: '',
      //   });

      toast.success('Image deleted successfully');
      // Refresh the posts list
      // fetchPosts(currentPage, postsPerPage);
      // }
    } catch (error) {
      console.error('Error deleting image:', error);
      toast.error(error.message || 'Failed to delete image');
    }
  };

  // // Usage in the table row
  // <button
  //   className='delete-img-btn'
  //   onClick={() => deleteImg(post.photo, post._id)}
  //   disabled={!post.photo}>
  //   {post.photo ? 'Delete Image' : 'No Image'}
  // </button>;

  return { deleteImg };
};

export default useDeleteImgHandler;
