
const Wrapper = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="wrapper space-y-4 tablet:space-y-0 w-full desktop:w-fit">{children}</div>
  )
}

export default Wrapper