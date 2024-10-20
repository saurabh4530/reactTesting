import React from "react";

function Application() {
  return (
    <>
      <h1>Job Application</h1>
      <h2>Section-1</h2>

      <p>All fields are mandatory</p>
      <span title="close">X</span><br />
      <img
        src="data:image/png;base64,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"
        alt="react logo" height={"100rem"} width={"100rem"}
      />
<div data-testid="custom div">this is custom Div</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="fullName"
            value={"saurabh"}
            onChange={() => { }}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <div>
          <label htmlFor="job_location">Job location</label>
          <select id="job_location">
            <option value="">select a country</option>
            <option value="us">united state</option>
            <option value="uk">united kingdom</option>
            <option value="in">india</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I agree to the terms and
            conditions
          </label>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default Application;
