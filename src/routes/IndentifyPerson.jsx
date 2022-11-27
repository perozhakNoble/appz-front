import React from "react";
import PageHeader from "../components/PageHeader";

const users = [
  {
    name: "Анатолій Агапенкко",
    a: "Втратив дім внаслідок війни, переселенець з Харкова",
    b: "Підтверджено",
  },
  {
    name: "Ігор Кшевицький",
    a: "Потребує психологічної допомоги",
    b: "Підтверджено",
  },
  {
    name: "Антон Павленко",
    a: "Втратив роботу та все майно",
    b: "Підтверджено",
  },
  {
    name: "Петро Щур",
    a: "Переселенець з Маріуполя",
    b: "Не Підтверджено",
  },
  {
    name: "Афанасій Моставчук",
    a: "Потрібна гуманітарна допомога (їжа, одяг), переселенець з Запоріжжя",
    b: "Підтверджено",
  },
  {
    name: "Дід Мороз",
    a: "Проблеми із психологічним станом дітей, потрібні кошти на психолога",
    b: "Не Підтверджено",
  },
  {
    name: "Біллі Харрінгтон",
    a: "Потрібні кошти для придбання медикаментів, переселенець з Одеси",
    b: "Підтверджено",
  },
  {
    name: "Ганна Андрусечко",
    a: "Проблеми з виїздом закордон",
    b: "Підтверджено",
  },
  {
    name: "Лідія Іваненко",
    a: "Проблема з отриманням належної освіти для дітей",
    b: "Підтверджено",
  },
  {
    name: "Назарій Петренко",
    a: "Втрата майна, переселенець з Херсону",
    b: "Підтверджено",
  },
];

const IndentifyPerson = () => {
  return (
    <div className="w-full">
      <PageHeader text="Облік осіб за ознаками" />
      <div className="w-full flex-col  justify-center">
        <form className="my-5">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Пошук по імені"
              required
            />
          </div>
        </form>
        <table class="min-w-full mt-5">
          <thead class="border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Імʼя та прізвище
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Проблема
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Статус
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr class="border-b" key={idx}>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{u.name}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{u.a}</td>
                <td
                  class={`text-sm  px-6 py-4 whitespace-nowrap font-bold  ${
                    u.b === "Підтверджено" ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {u.b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IndentifyPerson;
