import '../styles/pricing.scss';
import Title from './Title';

const PricingPlan = ({ packages }) => {
  return (
    <section id='generic_price_table'>
      <Title text='Pricing' />
      <div className='container'>
        <div className='row'>
          {packages.map((pkg, index) => (
            <div className='col-md-4' key={index}>
              <div
                className={`generic_content ${
                  pkg.isPopular ? 'active' : ''
                } clearfix`}>
                <div className='generic_head_price clearfix'>
                  <div className='generic_head_content clearfix'>
                    <div className='head_bg'></div>
                    <div className='head'>
                      <span>{pkg.title}</span>
                    </div>
                  </div>
                  <div className='generic_price_tag clearfix'>
                    <span className='price'>
                      <span className='sign'>₦</span>
                      <span className='currency'>{pkg.price}</span>
                    </span>
                  </div>
                </div>
                <div className='generic_feature_list'>
                  <ul>
                    {pkg.benefits.map((benefit, i) => (
                      <li key={i}>
                        <span>{benefit}</span> {benefit.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='generic_price_btn clearfix'>
                  <a href='#' className='btn'>
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlan;
