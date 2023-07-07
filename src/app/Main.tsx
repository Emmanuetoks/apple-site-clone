import React from 'react'

type Props = {
    page?:string;
    children?: React.ReactNode;
}

const Main = ({page, children}: Props) => {
  return (
    <main className={`${page} pt-[2.75rem] min-[1070px]:max-[1130px]:pt-[1.5rem]`}>
      {children}
    </main>
  )
}

export default Main