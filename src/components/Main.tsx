import React from 'react'

type Props = {
    className?:string;
    children: React.ReactNode
}

const Main = ({className}: Props) => {
  return (
    <main className={`${className}`}>

    </main>
  )
}

export default Main