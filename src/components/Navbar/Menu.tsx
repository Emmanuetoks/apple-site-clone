type Props = {
  type: string;
  children?: React.ReactNode;
  styles?: string;
};

const Menu = ({ type, styles, children }: Props) => {
  return (
    <div className={`${type}`}>
      <ul className={`flex w-full h-full ${styles}`}>{children}</ul>
    </div>
  );
};

export default Menu;
