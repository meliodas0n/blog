import { Link } from "react-router-dom";
import loginIcon from "../assets/icons/login.png";

interface HeaderProp {
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl: string;
}

const Header: React.FC<HeaderProp> = ({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) => {
  return (
    <>
      <div className="mb-10">
        <div className="flex justify-center">
          <img alt="" className="h-14 w-14" src={loginIcon} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {heading}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {paragraph}{" "}
          <Link
            to={linkUrl}
            className="font-medium text-purple-600 hover:text-purple-500"
          >
            {linkName}
          </Link>
        </p>
      </div>
    </>
  );
};

export default Header;
