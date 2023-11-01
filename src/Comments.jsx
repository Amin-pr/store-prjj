function Comments({ users }) {
  function Comment({ users }) {
    const usersComments = [...users]; // Create a new array using spread syntax
    const slicedComments = usersComments.splice(12  );
    console.log(slicedComments);

  
    return slicedComments.map((comment, index) => (
      <div className="card  m-2 border-0 " key={index}>
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
    <section className="comments ">
      <div className="comments-title text-center p-5">
        <p className="h2">Testimonials</p>
        <p className="h5">Some quotes from our happy customers</p>
      </div>
      <div className="comments-card row container mx-auto flex-wrap justify-content-center ">
        <Comment users={users} />
      </div>
    </section>
  );
}
export default Comments;
