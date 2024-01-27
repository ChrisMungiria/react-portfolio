import { HashLink as Link } from "react-router-hash-link";

const CustomLink = (props) => {
  const { link, label } = props;
  return (
    <Link to={link} smooth>
      <li className="text-white font-bold">{label}</li>
    </Link>
  );
};

export default CustomLink;
