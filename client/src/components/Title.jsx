import '../styles/title.scss';

const Title = ({ text, span }) => {
  return (
    <div>
      <h2 className='title'>
        {text} <span>{span}</span>
      </h2>
    </div>
  );
};

export default Title;
