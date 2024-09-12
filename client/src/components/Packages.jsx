import PropTypes from 'prop-types';

const Packages = ({ title, price, benefits }) => {
  // const data = company_packages.slice(0, 2);
  return (
    <div className='package-container'>
      <table className='p-card'>
        <thead>
          <tr>
            <th>
              {title} <span className='price'>&#8358;{price}</span>
            </th>
          </tr>
        </thead>

        <tbody className='package-body'>
          {benefits.map((benefit, index) => {
            return (
              <>
                <tr key={index}>
                  <td>
                    <span>&#x2713;</span> {benefit}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Packages;

Packages.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  benefits: PropTypes.array.isRequired,
};
