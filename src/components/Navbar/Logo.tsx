type Props = {
    type: string
}

const Logo = ({type}: Props) => {
  return (
    <div className={`${type}`}>Logo</div>
  )
}

export default Logo