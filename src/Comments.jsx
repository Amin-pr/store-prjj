function Comments() {
  function Comment() {
    return (
      <div className="card col-5 m-2 border-0 comment-card ">
        <div className="card-body ">
          <img src="" alt="" className="card-img-top" />
          <p className="stars text-center">⭐⭐⭐⭐⭐</p>
          <p className="comments-opinion-tex card-text text-center"></p>
          <p className="comentor-name text-center">john</p>
        </div>
      </div>
    );
  }
  return (
    <section className="comments ">
      <div className="comments-title text-center p-5">
        <p className="h2">Testimonials</p>
        <p className="h5">Some quotes from our happy customers</p>
      </div>
      <div className="comments-card row container mx-auto flex-wrap justify-content-center ">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </section>
  );
}
export default Comments;
