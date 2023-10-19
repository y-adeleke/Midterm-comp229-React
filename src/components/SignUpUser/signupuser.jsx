import { useForm } from "react-hook-form";
function SignUpUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    if (data.pass !== data.confirmPassword) {
      alert("Passwords do not match, enter again");
      return;
    }
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <div className="signup-form">
      <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>First Name</label>
        <input {...register("firstname", { required: "First name is required" })} />
        <span className="error">{errors.firstname && errors.firstname.message}</span>

        <label>Last Name</label>
        <input {...register("lastName", { required: "Last name is required" })} />
        <span className="error">{errors.lastName && errors.lastName.message}</span>

        <label>Username</label>
        <input {...register("username", { required: "Username is required" })} />
        <span className="error">{errors.username && errors.username.message}</span>

        <label>Email</label>
        <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" } })} />
        <span className="error">{errors.email && errors.email.message}</span>

        <label>Password</label>
        <input type="password" {...register("pass", { required: "Password is required" })} />
        <span className="error">{errors.pass && errors.pass.message}</span>

        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm your password",
          })}
        />
        <span className="error">{errors.confirmPassword && errors.confirmPassword.message}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpUser;
