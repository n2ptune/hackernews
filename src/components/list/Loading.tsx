import React from 'react'
import ContentLoader from 'react-content-loader'

const LoadingComponent: React.FC = (props) => (
  <ContentLoader
    speed={1}
    width={800}
    height={100}
    viewBox="0 0 800 100"
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      margin: '1rem 0'
    }}
    {...props}
  >
    <rect x="10" y="10" rx="0" ry="0" width="100" height="84" />
    <rect x="120" y="10" rx="0" ry="0" width="660" height="36" />
    <rect x="120" y="58" rx="0" ry="0" width="450" height="36" />
    <rect x="580" y="58" rx="0" ry="0" width="120" height="36" />
    <rect x="710" y="58" rx="0" ry="0" width="70" height="36" />
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
