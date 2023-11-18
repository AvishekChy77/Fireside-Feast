import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import img from "../../assets/others/authentication2.png";
import SocialLogin from "../Login/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, auth } = useContext(AuthContext);
  const location = useLocation();
  const goTo = useNavigate();
  const axiosPublic = useAxiosPublic();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);

        updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: data.photoURL,
        })
          .then((res) => {
            // Profile information updated successfully
            // add to db
            const userInfo = {
              name: data.displayName,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                toast("Account created succesfully!");
                reset();
                goTo(location.state ? location.state : "/");
              }
            });
            console.log(res);
          })
          .catch((error) => {
            // Handle profile update errors
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Helmet>
        <title>Fireside | Register</title>
      </Helmet>
      <div className="hero min-h-screen ">
        <div className="hero-content justify-between flex-col lg:flex-row">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={img} alt="" />
          </div>
          <div className="card md:w-1/2 p-7 max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("displayName")}
                  placeholder="Your name"
                  name="displayName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL")}
                  placeholder="Your photo url"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email")}
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/,
                  })}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span>Don't forget to choose your Password</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Password must be atleast 6 characters</span>
                )}
                {errors.password?.type === "pattern" && (
                  <span>
                    Add At least one lowercase letter, one uppercase letter, one
                    digit & one special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline hover:bg-black">
                  Register
                </button>
              </div>
            </form>

            <p className="flex justify-between">
              <small>Already a member?</small> <Link to="/login">LogIn</Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
