const Write = () => {
  return (
    <article>
      <h1>Write and Edit your Article</h1>
      <form action='' className='write'>
        <label htmlFor='title'>Title</label>
        <input type='text' />
        <label htmlFor='body'>Body</label>
        <textarea name='' id='' cols='70' rows='10'></textarea>
        <div className='upload'>
          <label htmlFor='image'>Upload Image</label>
          <input type='file' multiple accept='image/*' name='' id='' />{' '}
          <button>upload</button>
        </div>
      </form>
    </article>
  );
};

export default Write;
