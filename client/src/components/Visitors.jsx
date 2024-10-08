import { FaUsers, FaBuilding, FaGlobe } from 'react-icons/fa';
import '../styles/visitors.scss';
import Title from './Title';
import { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersection';
import VisitorItem from './VisitorItem';

const Visitors = () => {
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  const visitorsData = [
    { icon: FaUsers, end: 10000, label: 'Satisfied Clients' },
    { icon: FaBuilding, end: 500, label: 'Businesses Served' },
    { icon: FaGlobe, end: 50, label: 'Countries Reached' },
  ];

  return (
    <div className='visitors' ref={ref}>
      <Title text='Our' span='Growing Community' />
      <div className='visitors__grid'>
        {visitorsData.map((item, index) => (
          <VisitorItem
            key={index}
            icon={item.icon}
            end={item.end}
            label={item.label}
            isIntersecting={isIntersecting}
          />
        ))}
      </div>
    </div>
  );
};

export default Visitors;
