import React, { useState } from "react";
import { Form, Navigate, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { useAuth } from "../hooks/useAuth";

const Input = ({ label, ...props }) => {
  return (
    <div className="w-full">
      <div className="text-xl ml-2 mb-1">{label}</div>
      <input {...props} className="shadow w-full px-4 bg-white rounded-full border-[1px] border-gray text-lg h-12" />
    </div>
  );
};

const Login = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      let formData = new FormData(event.currentTarget);
      const loginData = Object.fromEntries(formData);
      login(loginData, () => navigate("/"));
    } catch (error) {
      setError(error);
    }
    return false;
  }

  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="w-full h-full flex flex-col justify-center bg-sky-50 items-center">
      <ErrorMessage error={error} />
      {user && <Navigate to="/" replace={true} />}
      <Form
        method="post"
        onSubmit={handleSubmit}
        className="border-2 rounded shadow w-96 h-96 items-center  p-5 bg-gray-200 flex flex-col gap-4 pt-12"
      >
        <Input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label={"Пошта"}
        />
        <Input
          type="password"
          name="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          label={"Пароль"}
        />
        <button
          type="submit"
          className="rounded-full w-3/5 mt-8 text-lg text-green-700 py-3 hover:shadow-2xl bg-green-100 border-[1px] border-green-600"
        >
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
