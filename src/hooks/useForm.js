import { useState } from "react";

export function useForm(options) {
  const [data, setData] = useState(options?.initialValue || {});
  const [errors, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(options?.onSubmit){
      options.onSubmit(data)
    }
  };

  return { handleChange, handleSubmit, data, setData, errors };
}
