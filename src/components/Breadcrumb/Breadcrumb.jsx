import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "./Breadcrumb.css";

export const Breadcrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
      <Link href="/" color="inherit" className="breadcrumbs-link">
        <HomeIcon className="breadcrumbs-icon" />
        Home
      </Link>
      <Link href="/profile" color="inherit" className="breadcrumbs-link">
        <AccountBoxIcon className="breadcrumbs-icon" />
        Profile
      </Link>
      <Link href="/chats" color="inherit" className="breadcrumbs-link">
        <ChatIcon className="breadcrumbs-icon" />
        Chats
      </Link>
    </Breadcrumbs>
  );
};
