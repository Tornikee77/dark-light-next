import { ThemeSwitcher } from "@/features/theme/components/ThemeSwitcher";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>hello world</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci,
        alias quia animi eum ducimus odit consectetur dolor neque et sed ipsam
        cum, nihil corrupti blanditiis? Fugiat voluptate autem perspiciatis
        temporibus.
      </p>
      <div className="flex flex-col">
        <button className="dark:hidden text-text-secondary">sagoool</button>
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Home;
