import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="flex justify-center flex-col gap-5 items-center p-8 ">
        <div className="flex gap-5">
          <Link href={""} target="_blank">
            <LinkedIn fontSize="large" />
          </Link>
          <Link href={""} target="_blank">
            <Instagram fontSize="large" />
          </Link>
          <Link href={""} target="_blank">
            <GitHub fontSize="large" />
          </Link>
        </div>
        <h1>Copyright @Vishal Yadav</h1>
      </div>
    </div>
  );
};

export default Footer;
