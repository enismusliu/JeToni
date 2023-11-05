import React from "react";
import img from "../../../assets/WorkImg.png";
import { useNavigate } from "react-router-dom";

function WorkCard({ title, description, date, id }) {
  const navigate = useNavigate();
  const handleDeleteThisPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result, "qitu");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="workCard" onClick={() => navigate(`${id}`)}>
        <div className="workCardImage">
          <img src={img} alt="" width={200} height={200} />
        </div>
        <div className="workCardInfo">
          <h3 className="workCardInfoTitle">{title}</h3>
          <p className="workCardInfoDate">{date}</p>
          <p className="workCardInfoDescription">{description}</p>
        </div>
      </div>
      <button onClick={handleDeleteThisPost}>Delete this post</button>
    </>
  );
}

export default WorkCard;
