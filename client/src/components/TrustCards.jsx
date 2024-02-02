import { trust_card_data } from '../data/data';

const TrustCards = () => {
  const first_five_data = trust_card_data.slice(0, 6);

  return (
    <>
      <h1>Why Do Businesses Trust Us?</h1>

      <div className='trust-cards'>
        {first_five_data.map((item, index) => {
          return (
            <div className='trust_card_col' key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TrustCards;
