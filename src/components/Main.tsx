import React from 'react'

type Props = {
    page?:string;
    children?: React.ReactNode;
}

const Main = ({page, children}: Props) => {
  return (
    <div className={`${page}`}>
      {children}
    </div>
  )
}

export default Main