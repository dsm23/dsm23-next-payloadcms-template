import type { FunctionComponent } from "react";

const BeforeLogin: FunctionComponent = () => {
  return (
    <div>
      <p>
        <b>Welcome to your dashboard!</b>
        {" This is where site admins will log in to manage your website."}
      </p>
    </div>
  );
};

export default BeforeLogin;
