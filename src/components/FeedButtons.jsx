import React, { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";

const Feed = () => {
  // State to track the active button
  const [activeButton, setActiveButton] = useState(null);

  // Function to handle button click and set the active button
  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="">
      <hr className="line-top" />
      <ul className="feed-buttons gap-4">
        {["All Posts(32)", "Article", "Event", "Education", "Job"].map(
          (label, index) => (
            <li
              key={index}
              className={`feed-button-single ${
                activeButton === index ? "active" : ""
              }`}
              onClick={() => handleButtonClick(index)}
            >
              {label}
              <hr className="button-underline" />
            </li>
          )
        )}
        <div className="feed-buttons-main gap-2">
          <NavDropdown
            title={
              <>
                <span className="p-2">Write a post</span>
              </>
            }
            id="basic-nav-dropdown"
            className="write-a-post d-flex justify-content-center align-items-center rounded-1 "
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <button type="button" class="btn btn-primary join-button">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              className=" justify-content-center align-items-center mb-1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_859)">
                <path
                  d="M7.33333 9.16671H4.58333V6.41671H2.75V9.16671H0V11H2.75V13.75H4.58333V11H7.33333V9.16671ZM16.5 10.0834C18.0217 10.0834 19.2408 8.85504 19.2408 7.33337C19.2408 5.81171 18.0217 4.58337 16.5 4.58337C16.2067 4.58337 15.9225 4.62921 15.6658 4.71171C16.1883 5.45421 16.4908 6.35254 16.4908 7.33337C16.4908 8.31421 16.1792 9.20337 15.6658 9.95504C15.9225 10.0375 16.2067 10.0834 16.5 10.0834ZM11.9167 10.0834C13.4383 10.0834 14.6575 8.85504 14.6575 7.33337C14.6575 5.81171 13.4383 4.58337 11.9167 4.58337C10.395 4.58337 9.16667 5.81171 9.16667 7.33337C9.16667 8.85504 10.395 10.0834 11.9167 10.0834ZM17.985 12.0634C18.7458 12.7325 19.25 13.585 19.25 14.6667V16.5H22V14.6667C22 13.255 19.8275 12.3842 17.985 12.0634ZM11.9167 11.9167C10.0833 11.9167 6.41667 12.8334 6.41667 14.6667V16.5H17.4167V14.6667C17.4167 12.8334 13.75 11.9167 11.9167 11.9167Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_859">
                  <rect width="22" height="22" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="p-3">Join Group</span>
          </button>
        </div>
      </ul>

      <hr className="line-bottom" />
    </div>
  );
};

export default Feed;
