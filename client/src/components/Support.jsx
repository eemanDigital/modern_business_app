import { trust_card_data } from '../data/data.jsx';

function Support() {
  return (
    <>
      <div className='support'>
        <h3> Support Before and After Registration</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          explicabo amet aut quasi. Distinctio assumenda illo, blanditiis vero
          aperiam quasi ut corporis beatae pariatur facere rem eveniet eaque.
          Laudantium libero asperiores saepe impedit temporibus recusandae
          veritatis cum ad, sequi officiis illo autem architecto perspiciatis
          eius reprehenderit, repellendus ullam quasi! Necessitatibus!
        </p>
        <ul>
          {trust_card_data.map((el, index) => {
            return <li key={index}>{el.title}</li>;
          })}
        </ul>
      </div>

      {/* <GetTools /> */}
    </>
  );
}

export default Support;
