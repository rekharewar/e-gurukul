import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (localStorage.getItem("login") == "true") {
      navigate("/");
    }
  }, []);
  const SubmitFunc = () => {
    if (username === "abc@gmail.com" && password === "123") {
      alert("login");
      localStorage.setItem("login", true);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      navigate("/courses");
    } else {
      alert("wrong credentials");
    }
  };

  return (
    <div>
      <div id="login">
        <h3 class="text-center text-dark pt-5">
          Welcome To Login Authentication Form{" "}
        </h3>

        <div class="container">
          <div
            id="login-row"
            class="row justify-content-center align-items-center"
          >
            <div id="login-column">
              <div id="login-box">
                <div className="row">
                  <div className="col-md-6 ">
                    <div className="leftside">
                      <div>

                        <pre>
                          <h4>Sample credentials</h4>
                          <h4>Username : abc@gmail.com</h4>
                          <h4>Password : 123</h4>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="rightside">
                      <form
                        id="login-form"
                        class="form"
                        action=""
                        method="post"
                      >
                        <h3 class="text-center text-info text-uppercase">
                          Login To E-gurukul
                        </h3>
                        <div>
                          <div class="form-group">
                            <label for="username" class="text-info">
                              Username:
                            </label>
                            <br />
                            <input
                              type="text"
                              name="username"
                              id="username"
                              class="form-control"
                              value={username}
                              onChange={(e) => setUserName(e.target.value)}
                            ></input>
                          </div>
                          <div class="form-group">
                            <label for="password" class="text-info">
                              Password:
                            </label>
                            <br />
                            <input
                              type="text"
                              name="password"
                              id="password"
                              class="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                          <div class="form-group">
                            <label for="remember-me" class="text-info">
                              <span>Remember me</span> 
                              <span>
                                <input
                                  id="remember-me"
                                  name="remember-me"
                                  type="checkbox"
                                />
                              </span>
                            </label>
                            <br />
                            <div className="text-center">
                              <button
                                type="button"
                                className="btn btn-primary mt-4 w-100"
                                onClick={SubmitFunc}
                              >
                                submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
