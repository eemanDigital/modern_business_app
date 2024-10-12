import Title from './Title';
import { products } from '../data/data';
import '../styles/popular-products.scss';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  return (
    <div className='popular-products'>
      <Title text='Our most popular products' />
      <div className='products-grid'>
        {products?.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
