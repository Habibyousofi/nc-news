function ListComments({ comment }) {
  console.log(comment);

  return (
    <div className="comment-card">
      <p>
        <strong>{comment.author}</strong>
      </p>
      <p>{comment.body}</p>
    </div>
  );
}

export default ListComments;
