
type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <div>
      {" "}
      <img
        src="https://www.simbrella.com/site/templates/img/logo_colored.svg"
        alt=""
        className={`w-[12rem] mt-4 ${className}`}
      />
    </div>
  );
};

export default Logo;
