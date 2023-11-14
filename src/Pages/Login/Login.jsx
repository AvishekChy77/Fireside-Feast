import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/others/authentication2.png";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signIn(email, password).then((res) => {
      const user = res.user;
      console.log(user);
    });
  };

  const handleValueCap = () => {
    const user_captcha_value = captchaRef.current.value;

    if (validateCaptcha(user_captcha_value)) {
      //   alert("Captcha Matched");
      setDisabled(false);
    } else {
      //   alert("Captcha Does Not Match");
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content justify-between flex-col lg:flex-row">
        <div className="text-center md:w-1/2 lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card md:w-1/2 p-7 max-w-sm shadow-2xl">
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                placeholder="type the text above"
                name="captcha"
                className="input input-bordered"
                required
              />
              <button
                className="btn btn-outline btn-sm mt-2"
                onClick={handleValueCap}
              >
                Validate
              </button>
            </div>
            <div className="form-control mt-6">
              <button disabled={disabled} className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <p className="flex justify-between">
            <small>New here?</small> <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
