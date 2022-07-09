import React, { Fragment,useRef,useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export const SignUp = (props) =>{
  const {setmodalVisibility} = props
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const checkforExpert = watch("expert", false);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);
  const closePopup = (e) =>{
    e.preventDefault()
    setmodalVisibility("signup")
  }
  const onSubmit = (data) =>{
    console.log(data);  
    fetch('/signup').then(data => {
      console.log(data)
      // window.location = "/login"
    }).catch(err =>{
      console.log(err)
    })
  }
  const password = useRef({});
  password.current = watch("password", "");
  return(
    <Fragment>
        <section className="fx fx-c justify-center align-center height-100">
          <h1 className="title-sm mv-2">Signup</h1>
          <div className="form-holder fx fx-c justify-center pv-5 ph-5 width-100">
          <form onSubmit={handleSubmit(onSubmit)} className="form mh-auto fx fx-c align-center">
            <div className={`form-item mb-8 fx fx-reset-m fx-grow mv-4 align-center ${errors.radioSelect ? "invalid" : ""}`} >
                <h4 className="heading-sm tc-primary fw-medium mr-4">Are you an</h4>
                <div className="mh-3">
                  <input type="checkbox" className="mh-2" value="expert" id="expert"
                    {...register("expert")}/>
                  <label htmlFor="expert">Expert</label>
                </div>
            </div>
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
              <p className="mv-1"><Link to="/" className="mh-2 tc-invalid" onClick={closePopup}>Sign up</Link>if you don't have an account</p>
            </div>
          </form>
          </div>
        </section>
    </Fragment>
  )
}