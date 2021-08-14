/* eslint-disable*/

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPosts, statusUnset, createPostLocaly } from "./redux/posts/action";

const PostList = ({ dispatch, status, itemsPosts, actionCreated }) => {
  const [elementName, setElementName] = useState("");
  console.log(itemsPosts, "items1");
  const fetchDataPosts = async () => {
    dispatch(getPosts());
    console.log("Every post has been, getted", itemsPosts);
  };

  useEffect(() => {
    fetchDataPosts();
  }, []);

  return (
    <div>
      {itemsPosts.map((node) => (
        <div>
          <span style={{ marginRight: "10px" }}>{node.gender}</span>
          <span style={{ marginRight: "10px" }}>{node.email}</span>
          <span style={{ marginRight: "10px" }}>{node.phone}</span>
          <span style={{ marginRight: "10px" }}>{node.location.city}</span>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    status: state.posts.status,
    itemsPosts: state.posts.items,
    actionCreated: state.posts.newAction,
  };
};

export default connect(
  mapStateToProps,
  null // Generaly its the place of mapStateToDispatch
)(PostList);
