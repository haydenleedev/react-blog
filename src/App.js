/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Modal from "./modal";

function App() {
  let posts = "강남 우동 맛집";

  // Get today's date
  const date = new Date("July 20, 69 00:20:18");
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let ampm = hours >= 12 ? "pm" : "am";
  const currentDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${hours}:${minutes} ${ampm}`;

  // States
  let [title, titleChange] = useState([
    "Men's Jacket Recomendation",
    "Women's Jacket Recomendation",
    "Dog's Jacket Recomendation",
  ]);

  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [titleOnModal, setTitleOnModal] = useState(0);
  let [inputValue, setInputValue] = useState("");
  let [postDate, setPostDate] = useState([
    "5/6/2023 09:00 am",
    "5/5/2023 11:00 am",
    "5/4/2023 10:00 am",
  ]);

  function addListHandler(title, postDate, like, inputValue) {
    let titleCopy = [...title];
    if (inputValue) {
      titleCopy = [inputValue, ...titleCopy];
      /* titleCopy.unshift(inputValue); */
      titleChange(titleCopy);

      let likeCopy = [...like];
      likeCopy = [0, ...likeCopy];
      setLike(likeCopy);

      let postDateCopy = [...postDate];
      postDateCopy = [currentDate, ...postDateCopy];
      setPostDate(postDateCopy);
    }
  }

  function deleteHandler(index, postDate, like, title) {
    let titleCopy = [...title];
    titleCopy.splice(index, 1);
    titleChange(titleCopy);

    let likeCopy = [...like];
    likeCopy.splice(index, 1);
    setLike(likeCopy);

    let postDateCopy = [...postDate];
    postDateCopy.splice(index, 1);
    setPostDate(postDateCopy);
  }

  /* function addPostedDate() {
    let postDateCopy = [...postDate];
    postDateCopy = [currentDate, ...postDateCopy];
    setPostDate(postDateCopy);
  }

  function addLikes() {
    let likeCopy = [...like];
    likeCopy = [0, ...likeCopy];
    setLike(likeCopy);
  }

  function addTitle(inputValue) {
    let titleCopy = [...title];
    if (inputValue) {
      titleCopy = [inputValue, ...titleCopy];   
      titleChange(titleCopy);
      addLikes();
      addPostedDate();
    }
  } */

  /* function deletePostedDate(index) {
    let postDateCopy = [...postDate];
    postDateCopy.splice(index, 1);
    setPostDate(postDateCopy);
  }

  function deleteLikes(index) {
    let likeCopy = [...like];
    likeCopy.splice(index, 1);
    setLike(likeCopy);
  }

  function deleteTitle(index) {
    let titleCopy = [...title];
    titleCopy.splice(index, 1);
    titleChange(titleCopy);
    deleteLikes(index);
    deletePostedDate(index);
  } */

  function handleLikes(index) {
    let likeCopy = [...like];
    likeCopy[index] = likeCopy[index] + 1;
    setLike(likeCopy);
  }

  function sortTitleByAlphabet() {
    let titleCopy = [...title];
    titleCopy.sort();
    titleChange(titleCopy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>
          <h1 className="ml-20px">My Blog</h1>
        </div>
      </div>
      <div className="center-left-align">
        {title.map((item, i) => {
          return (
            <div className="list" key={i}>
              <h2
                onClick={() => {
                  setModal(!modal);
                  setTitleOnModal(i);
                }}
              >
                {title[i]}
                <button
                  className="likes"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLikes(i);
                  }}
                >
                  👍
                </button>
                {like[i]}
              </h2>
              <p>Posted: {postDate[i]}</p>

              <button
                className={"black"}
                onClick={() => deleteHandler(i, postDate, like, title)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
      <div className={"add-list center-left-align"}>
        <input
          className="ml-20px"
          onChange={(e) => {
            setInputValue(e.target.value);
            console.log(inputValue);
          }}
        />{" "}
        <button
          onClick={() => addListHandler(title, postDate, like, inputValue)}
        >
          Submit
        </button>
      </div>
      <div className={"center-left-align"}>
        <button
          className={"mt-20px ml-20px"}
          onClick={() => sortTitleByAlphabet()}
        >
          Sort by Alphabet
        </button>
      </div>

      {modal == true ? (
        <Modal
          title={title[titleOnModal]}
          editTitle={() => {
            let titleCopy = [...title];
            titleCopy = title;
            titleChange(titleCopy);
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
