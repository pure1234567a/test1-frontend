import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const layout = (props: Props) => {
  return (
    <>
      <div className="flex flex-row">
        <div>
          <main className="w-full">{props.children}</main>
        </div>
      </div>
    </>
  );
};

export default layout;
