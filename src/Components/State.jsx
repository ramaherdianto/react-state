import React, { useState } from "react";

const State = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);

    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-header">Learn React Function</div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">
                        Firstname
                      </label>
                      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstname" className="form-control" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">
                        Lastname
                      </label>
                      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastName" id="lastname" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-4">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="card-footer">My Fullname is {fullName ? fullName : "..."} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default State;
