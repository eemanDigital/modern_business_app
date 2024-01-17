import { getStartedData } from '../constants/data.jsx';
import GetTools from './GetTools.jsx';
import '../constants/styles/outlets.scss';
function GetStarted() {
  return (
    <article className='get-started-container'>
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

      <GetTools />
    </article>
  );
}

export default GetStarted;
