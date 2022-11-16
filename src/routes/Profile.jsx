import React, { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import PageHeader from "../components/PageHeader";
import { useAuth } from "../hooks/useAuth";
import { useAlert } from "react-alert";

const Profile = () => {
  const { user, update } = useAuth();
  const alert = useAlert();

  const [error, setError] = useState("");

  const Input = ({ name, defaultValue, text }) => {
    return (
      <div className="flex h-20 w-[30rem] items-center justify-between">
        <span className="text-xl mr-4">{text}</span>{" "}
        <input
          required
          minLength={2}
          className="shadow w-80 text-xl rounded border-[1px] h-12 px-3 border-slate-300"
          name={name}
          defaultValue={defaultValue}
        />
      </div>
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let formData = new FormData(event.currentTarget);
      const updateData = Object.fromEntries(formData);
      await update(updateData, () => alert.success("Дані користувача успішно оновлені!"));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="w-full">
      <PageHeader text="Профіль" />
      <div className="w-full flex justify-center">
        <form className="mt-16 flex flex-col w-[30rem]" onSubmit={handleSubmit}>
          <Input name={"firstName"} defaultValue={user.firstName} text={"Імʼя"} />
          <Input name={"lastName"} defaultValue={user.lastName} text={"Прізвище"} />
          <Input name={"email"} defaultValue={user.email} text={"Пошта"} />
          <Input name={"password"} defaultValue={user.password} text={"Пароль"} />
          <button
            type="submit"
            className="text-lg shadow-sm shadow-lime-200 bg-lime-50 border-2 rounded border-lime-400 px-4 py-2 self-end mt-5"
          >
            Зберегти
          </button>
          <ErrorMessage error={error} />
        </form>
      </div>
    </div>
  );
};

export default Profile;
