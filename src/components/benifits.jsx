import { memo } from "react";

function Benifits() {
  const benifitsImageSrc = process.env.PUBLIC_URL + "/img/benifits-img.jpg";
  return (
    <div className="benifits bg-light m-0 py-5">
      <div className="container  ">
        <div className="  row align-items-center justify-content-center">
          <div className=" col-12 col-sm-5 mx-1 ">
            <img src={benifitsImageSrc} alt="" className="card-img shadow" />
          </div>
          <div className=" benifits-text-holder text-center mx-3 px-5 col-12 col-sm-5 ">
            <p className="card-title mt-3 text-start ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              esse veritatis, debitis amet placeat vitae numquam facere aliquid
              iste, praesentium ipsam illum nemo dolores saepe doloribus
              quibusdam nulla rem sequi.
            </p>
            <p className="card-title mt-3 text-start ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              esse veritatis, debitis amet placeat vitae numquam facere aliquid
              iste, praesentium ipsam illum nemo dolores saepe doloribus
              quibusdam nulla rem sequi.
            </p>
            <p className="card-title mt-3 text-start ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              esse veritatis, debitis amet placeat vitae numquam facere aliquid
              iste, praesentium ipsam illum nemo dolores saepe doloribus
              quibusdam nulla rem sequi.
            </p>
            <p className="card-title mt-3 text-start ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              esse veritatis, debitis amet placeat vitae numquam facere aliquid
              iste, praesentium ipsam illum nemo dolores saepe doloribus
              quibusdam nulla rem sequi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Benifits);
