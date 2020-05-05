import React from "react";
import "./admin.scss";

function Admin() {
  // POST data to the rest API that updates STATE in TRACKER JS
  // ADD DIFFERENT PROGRESSTOGGLE FOR EACH BUTTON AND EACH STEP EX: PROGRESS1, PROGRESS2

  function postData() {
    let progressToggle = {
      active: "progress-step",
      completed: "progress-step",
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(progressToggle),
    };
    fetch("http://localhost:5000/api/data", requestOptions).then((response) =>
      response.json()
    );
  }

  return (
    <div className="buttons">
      <button onClick={postData}>step 1 </button>
      <button>step 2 </button>
      <button>step 3</button>
      <button>step 4 </button>
      <button>step 5 </button>
    </div>
  );
}

export default Admin;
