import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/others/authentication2.png";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();

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
      e.target.reset();
      Swal.fire({
        title: "Log in successfull!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      Navigate(location?.state ? location.state : "/");
    });
  };

  const handleValueCap = (e) => {
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      //   alert("Captcha Matched");
      setDisabled(false);
    } else {
      //   alert("Captcha Does Not Match");
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Fireside | LogIn</title>
      </Helmet>
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
                  onBlur={handleValueCap}
                  type="text"
                  placeholder="type the text above"
                  name="captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
            <p className="flex justify-between">
              <small>New here?</small>{" "}
              <Link state={location.state} to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
