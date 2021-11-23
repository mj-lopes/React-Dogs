import React from "react";
import PhotoCommentsForm from "./PhotoCommentsForm";
import style from "./PhotoComments.module.css";
import { useSelector } from "react-redux";

function PhotoComments(props) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef();

  const { data } = useSelector((state) => state.user);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${style.comments} ${props.single ? style.single : ""}`}
      >
        {comments.map((comment) => {
          return (
            <li key={comment.comment_ID}>
              <b>{comment.comment_author}: </b>
              <span>{comment.comment_content}</span>
            </li>
          );
        })}
      </ul>
      {data && (
        <PhotoCommentsForm
          id={props.id}
          setComments={setComments}
          single={props.single}
        />
      )}
    </>
  );
}

export default PhotoComments;
