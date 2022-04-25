import React from 'react';

interface Props {
  component: React.LazyExoticComponent<any>;
}

export const Loading: React.FC = () => (
  <div className='loading'>
    loading<span>...</span>
  </div>
);

const LazyLoad: React.FC<Props> = ({ component }) => {
  const AsyncComponent = component;

  return (
    <React.Suspense fallback={<Loading />}>
      <AsyncComponent />
    </React.Suspense>
  );
};

export default LazyLoad;
