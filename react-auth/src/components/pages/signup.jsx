import React, { Fragment,useRef } from "react";
import { useForm } from "react-hook-form";

export const SignUp = (props) =>{
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }
  const password = useRef({});
  password.current = watch("password", "");
  return(
    <Fragment>
        <section className="fx fx-c justify-center align-center height-100">
          <h1 className="title-sm mv-2">Signup</h1>
          <div className="form-holder fx fx-c justify-center pv-5 ph-5 width-100">
          <form onSubmit={handleSubmit(onSubmit)} className="form mh-auto fx fx-c align-center">
            <div className={`form-item fx fx-c-m fx-reset-m fx-grow mv-4 align-center ${errors.email ? "invalid" : ""}`}>
              <p className ="mh-4 mh-reset-m form-label ta-right">email</p>
              <input type="text" aria-invalid={errors.email ? "true" : "false"} placeholder="Enter email"
              className="input ph-2 pv-2"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              />
              {errors.email?.message && (
                <span role="alert">{errors.email?.message}</span>
              )}
            </div>

            <div className={`form-item fx fx-c-m fx-reset-m fx-grow mv-4 align-center ${errors.firstName ? "invalid" : ""}`}>
              <p className="mh-4 mh-reset-m form-label ta-right">firstName</p>
              <input type="text" aria-invalid={errors.firstName ? "true" : "false"} placeholder="Enter firstName"
                className="input ph-2 pv-2"
                {...register("firstName", { required: "first name is required" })}
              />
              {errors.firstName && (<span role="alert">{errors.firstName?.message}</span>)}
            </div>

            <div className={`form-item fx fx-c-m fx-reset-m fx-grow mv-4 align-center ${errors.lastName ? "invalid" : ""}`}>
              <p className="mh-4 mh-reset-m form-label ta-right">lastName</p>
              <input type="text" aria-invalid={errors.lastName ? "true" : "false"} placeholder="Enter lastName"
                className="input ph-2 pv-2"
                {...register("lastName", { required: "last name is required" })}
              />
              {errors.lastName && (<span role="alert">{errors.lastName?.message}</span>)}
            </div>

            <div className={`form-item fx fx-c-m fx-reset-m fx-grow mv-4 align-center ${errors.password ? "invalid" : ""}`}>
              <p className="mh-4 mh-reset-m form-label ta-right">Password</p>
              <input
                type="password"
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="Enter Password"
                autoComplete="new-password"
                className="input ph-2 pv-2"
                {...register("password", {
                  required: "password can't be empty",
                  minLength: {
                    value: 8,
                    message: '8 character minimum'
                  }
                })}
              />
              {errors.password && (<span role="alert">{errors.password?.message}</span>)}
            </div>


            <div className={`form-item fx fx-c-m fx-reset-m fx-grow mv-4 align-center ${errors.password_repeat ? "invalid" : ""}`}>
              <p className ="mh-4 mh-reset-m form-label ta-right">Renter Password</p>
              <input
                type="password"
                aria-invalid={errors.password_repeat ? "true" : "false"}
                placeholder="Confirm New Password"
                autoComplete="new-password"
                className="input ph-2 pv-2"
                {...register("password_repeat", {
                  validate: (value) =>
                    value === password.current || "The passwords do not match",
                })}
              />
              {errors.password_repeat && (
                <span role="alert">{errors.password_repeat?.message}</span>
              )}
            </div>
            <div className="ta-center">
              <button className="btn" type="submit">SignUp</button>
            </div>
          </form>
          </div>
        </section>
    </Fragment>
  )
}