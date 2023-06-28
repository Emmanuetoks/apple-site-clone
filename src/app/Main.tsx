import React from 'react'

type Props = {
    page?:string;
    children?: React.ReactNode;
}

const Main = ({page, children}: Props) => {
  return (
    <main className={`${page}`}>
      {children}
    </main>
  )
}

export default Main