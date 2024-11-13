import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';
import formatDate from '../lib/formattedDate';
import placeholderImg from '../assets/placeholderImg.jpg';
import { useDataFetch } from '../hooks/useDataFetch';
import RelatedPosts from '../components/RelatedPosts';
import '../styles/postDetails.scss';
import GoBackButton from '../components/GoBackButton';
import PostComment from '../components/PostComment';
import Loading from '../components/Loading';

const PostDetails = () => {
  // Get the post ID from the URL
  const params = useParams();
  // Fetch data from the API
  const { data, loading, error, dataFetcher } = useDataFetch();

  //  Fetch blog post data
  useEffect(() => {
    async function fetchData() {
      try {
        await dataFetcher(`posts/${params.id}`);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [params.id, dataFetcher]);

  //  Loading state
  if (loading) {
    return <Loading />;
  }

  // Error state
  if (error) {
    return <div>{error}</div>;
  }

  const postUrl = window.location.href;
  const postTitle = data?.data?.post?.title;
  const postAuthorId = data?.data?.post?.author?._id;

  return (
    <div className='blog-detail'>
      <GoBackButton />
      <div className='blog-detail-container'>
        <div className='blog-detail-content'>
          {data?.data?.post?.photo ? (
            <img
              className='blog-detail-img'
              src={data?.data?.post?.photo}
              alt={data?.data?.post?.title}
            />
          ) : (
            <img
              className='blog-detail-img'
              src={placeholderImg}
              alt={data?.data?.post?.title}
            />
          )}

          <h1>{data?.data.title}</h1>
          <div className='blog-content-author-date'>
            <div className='social-share'>
              <h3>Share this post:</h3>
              <FacebookShareButton url={postUrl} quote={postTitle}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={postUrl} title={postTitle}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={postUrl} title={postTitle}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <WhatsappShareButton url={postUrl} round title={postTitle}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
            <span>{formatDate(data?.data?.post?.date)}</span>

            <span className='blog-post__author'>
              Author:{' '}
              {`${data?.data?.post?.author?.firstName} ${data?.data?.post?.author?.lastName}`}
            </span>
          </div>
          <p dangerouslySetInnerHTML={{ __html: data?.data?.post?.body }}></p>

          <div className='related-posts'>
            <RelatedPosts postId={data?.data?.post?._id} />
          </div>
        </div>
      </div>

      <PostComment
        postId={data?.data?.post?._id}
        comments={data?.data?.post?.comments}
        postAuthorId={postAuthorId}
      />
    </div>
  );
};

export default PostDetails;
