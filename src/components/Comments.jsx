import { memo } from "react";
import { useData } from "../context/DataContext";

function Comments() {
  const { users } = useData();
  console.log(users);
  function Comment() {
    const usersComments = users && [...users]; // Create a new array using spread syntax
    const slicedComments = usersComments?.splice(12);

    return slicedComments?.map((comment, index) => (
      <div
        className="comments-card card  m-2 border-0 col-12 col-sm-3"
        key={index}
      >
        <div className="card-body row">
          <img
            src="https://i.pravatar.cc/200"
            alt=""
            className="card-img-top comment-user-img my-2 col-md-3"
          />
          <p className="comentor-name text-center">{comment.name}</p>
          <p className="stars text-center">⭐⭐⭐⭐⭐</p>
          <p className="comments-opinion-tex card-text text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            laboriosam commodi quo odio repudiandae mollitia dolore magnam quis,
            esse quam ullam necessitatibus, temporibus cum saepe, modi harum
            ipsa pariatur! Adipisci?
          </p>
        </div>
      </div>
    ));
  }
  return (
    <section className="comments comments-bg ">
      <div className="comments-title text-center p-5 text-white">
        <p className="h2">Testimonials</p>
        <p className="h5">Some quotes from our happy customers</p>
        <p className="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          perspiciatis hic vero rem asperiores. Atque accusantium maiores
          quaerat. Sit aliquid velit aut accusamus, minima expedita unde
          obcaecati illo id corporis.
        </p>
      </div>
      <div className=" row container mx-auto flex-wrap justify-content-center ">
        <Comment users={users} />
      </div>
    </section>
  );
}
export default memo(Comments);
