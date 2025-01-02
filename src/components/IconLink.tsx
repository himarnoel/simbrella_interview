import { Link, useLocation } from "react-router-dom";

interface IconLinkProps {
  href: string;
  IconComponent: React.ComponentType<{ color: string }>;
  label: string;
}

const IconLink = ({ href, IconComponent, label }: IconLinkProps) => {
  const { pathname } = useLocation(); // Get current pathname from react-router-dom
  const isActive = href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      to={href} // Use `to` for react-router Link
      className={`w-full ${
        isActive
          ? "border border-solid border-primary-600 text-primary-600  bg-[#2D3192]"
          : "hover:bg-[#f4f4f4] text-gray-500 duration-500 ease-in-out"
      } cursor-pointer rounded-lg gap-3 py-3 px-4 flex items-center`}
    >
      <IconComponent color={isActive ? "#fff" : "#858D9D"} />
      <span className={`text-sm ${isActive ? "text-white" : "#858D9D"} `}>{label}</span>
    </Link>
  );
};

export default IconLink;
