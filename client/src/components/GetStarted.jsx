import { getStartedData } from '../data/data.jsx';
// import GetStartedSupport from './GetStartedSupport.jsx';
// import GetTools from './GetTools.jsx';
// import '../styles/outlets.scss';

function GetStarted() {
  return (
    <div className='get-started'>
      {getStartedData.map((el, index) => {
        return (
          <div className='contents' key={index}>
            <h3>{el.title}</h3>
            <p>{el.summary}</p>
            <ul>
              {el.biz_list.map((list, index) => {
                return <li key={index}>{list}</li>;
              })}
            </ul>
          </div>
        );
      })}

      {/* <GetTools /> */}
    </div>
  );
}

export default GetStarted;
