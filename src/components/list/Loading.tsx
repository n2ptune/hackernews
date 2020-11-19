import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingComponent: React.FC = (props) => (
  <ContentLoader
    speed={1}
    width={800}
    height={100}
    viewBox="0 0 800 84"
    style={{ width: '100%' }}
    {...props}
  >
    <rect x="9" y="4" rx="0" ry="0" width="720" height="22" />
    <rect x="18" y="14" rx="0" ry="0" width="700" height="6" />
    <rect x="11" y="33" rx="0" ry="0" width="300" height="13" />
    <rect x="320" y="33" rx="0" ry="0" width="350" height="13" />
    <rect x="680" y="33" rx="0" ry="0" width="60" height="13" />
  </ContentLoader>
)

const Loading: React.FC = () => {
  return (
    <>
      {new Array(10).fill(0).map((_, i, __) => (
        <LoadingComponent key={i} />
      ))}
    </>
  )
}

export default Loading
