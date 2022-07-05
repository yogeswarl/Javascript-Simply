import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

export const LoginForm = (props) =>{
  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
  }
  return(
    <Fragment>
        <section className="fx fx-c justify-center align-center height-100">
          <h1 className="title-sm mv-2">Login</h1>
          <div className="form-holder fx fx-c justify-center pv-5 ph-5 width-100">
          <form onSubmit={handleSubmit(onSubmit)} className="form mh-auto fx fx-c align-center">
            <div className={`form-item fx fx-c-m fx-reset-m fx-grow mv-4 align-center ${errors.firstName ? "invalid" : ""}`}>
              <p className ="mh-4 mh-reset-m form-label ta-right">Username</p>
              <input type="text" aria-invalid={errors.firstName ? "true" : "false"} placeholder="Enter Username"
              className="input ph-2 pv-2"
              {...register("firstName", {
                required: "Username is required",
                minLength: 2,
                pattern: {
                  value: "^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$",
                  message: "invalid username"
                }
              })}
              />
              {errors.firstName && (
                <span role="alert">{errors.firstName?.message}</span>
              )}
            </div>
            <div className={`form-item fx fx-c-m fx-reset-m fx-grow mv-4 align-center ${errors.password ? "invalid" : ""}`}>
            <p className ="mh-4 mh-reset-m form-label ta-right">Password</p>
            <input
              aria-invalid={errors.password ? "true" : "false"}
              placeholder="Enter Password"
              className="input ph-2  pv-2"
              {...register("password", {
                required: "password can't be empty",
                minLength:{
              value: 8,
              message: '8 character minimum'
              } 
              })}
            />
            {errors.password && (
              <span role="alert">{errors.password?.message}</span>
            )}
            </div>
            <div className="ta-center">
            <button className="btn" type="submit">Login</button>
            </div>
          </form>
          </div>
        </section>
    </Fragment>
  )
}