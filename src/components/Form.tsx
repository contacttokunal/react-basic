import React, { FormEvent, useState } from "react";
import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const OnSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lebel">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">Name is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">Name is atleast three character</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && <p>The age field is requied</p>}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
