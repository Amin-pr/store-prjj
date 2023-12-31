import { memo } from "react";

function HeaderImage() {
  return (
    <section className="header-image w-100 p-0 border-0 shadow-none">
      <img
        src={process.env.PUBLIC_URL + "./img/header-img.jpg"}
        alt=""
        className="header-image w-100 m-0 shadow-none"
      />
    </section>
  );
}
export default memo(HeaderImage);
