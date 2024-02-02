// import { Link } from 'react-router-dom';

// import { company_packages } from '../../              /data';

// const Packages = ({title, price, benefits}) => {
//   const data = company_packages.slice(0, 2);
//   return (
//     <section className='packages'>
//       <div className='package-container'>
//         {data.map((item, index) => {
//           return (
//             <table key={index} className='p-card'>
//               <thead>
//                 <tr>
//                   <th>
//                     {item.title}{' '}
//                     <span className='price'>&#8358;{item.price}</span>
//                   </th>
//                 </tr>
//               </thead>
//               {item.benefits.map((list, index) => {
//                 return (
//                   <tbody key={index}>
//                     <tr>
//                       <td>
//                         {' '}
//                         <span>&#x2713;</span> {list}
//                       </td>
//                     </tr>{' '}
//                   </tbody>
//                 );
//               })}
//             </table>
//           );
//         })}
//       </div>
//       <Link> Start Now &#x2192;</Link>
//     </section>
//   );
// };
// export default Packages;

// import { Link } from 'react-router-dom';

// import { company_packages } from '../../              /data';

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
