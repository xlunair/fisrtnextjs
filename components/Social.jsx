import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaInstagram />, path: "" },
  { icon: <FaYoutube />, path: "" },
  { icon: <FaFacebook />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconsStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
