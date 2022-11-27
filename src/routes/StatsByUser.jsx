import React from "react";
import PageHeader from "../components/PageHeader";

const users = [
  {
    name: "Віталік Перожак",
    a: "1244 $",
    b: "100 грн",
  },
  {
    name: "Олена Гуль",
    a: "3515 $",
    b: "0",
  },
  {
    name: "Антон Павленко",
    a: "1244 $",
    b: "1985 грн / 6347$",
  },
  {
    name: "Петро Щур",
    a: "85036 $",
    b: "0",
  },
  {
    name: "Афанасій Моставчук",
    a: "0",
    b: "0",
  },
  {
    name: "Дід Мороз",
    a: "5436 $",
    b: "367 грн",
  },
  {
    name: "Біллі Харрінгтон",
    a: "69 грн",
    b: "69 $",
  },
  {
    name: "Ганна Андрусечко",
    a: "234 $",
    b: "270 грн",
  },
  {
    name: "Лідія Іваненко",
    a: "35 грн",
    b: "16 $",
  },
  {
    name: "Назарій Петренко",
    a: "0",
    b: "235 грн",
  },
];

const StatsByUser = () => {
  return (
    <div className="w-full">
      <PageHeader text="По окремому користувачу" />
      <div className="w-full flex flex-col justify-center">
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
                Витрати
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Наджодження
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr class="border-b" key={idx}>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{idx + 1}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{u.name}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{u.a}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{u.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatsByUser;
