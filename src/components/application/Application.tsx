import React from "react";

function Application() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea id="bio"  name="bio"/>
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
  );
}

export default Application;
