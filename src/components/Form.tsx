import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

  const OnSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={OnSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lebel">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
