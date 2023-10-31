import React from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { LuPencilLine } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import {
  checkDone,
  checkNotDone,
  deletetask,
  showEdit,
} from "../redux/actions";

function ToDoItem(props) {
  const dispatch = useDispatch();
  const { show } = useSelector((store) => store);
  return (
    <div
      className="task-item"
      style={props.isDone ? { backgroundColor: "black" } : {}}
    >
      <h2 className="title">{props.title}</h2>

      {props.showEdit && <input type="text" />}
      <div className="icons-box">
        <LuPencilLine
          className="icon"
          size={20}
          onClick={() => {
            dispatch(showEdit(props.id));
          }}
        />
        <BsFillTrashFill
          className="icon"
          size={20}
          onClick={() => {
            dispatch(deletetask(props.id));
          }}
        />
        {props.isDone ? (
          //check not donne
          <AiFillCloseCircle
            className="icon"
            size={20}
            onClick={() => {
              dispatch(checkNotDone(props.id));
            }}
          />
        ) : (
          //check done
          <AiFillCheckCircle
            className="icon"
            size={20}
            onClick={() => {
              dispatch(checkDone(props.id));
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ToDoItem;
