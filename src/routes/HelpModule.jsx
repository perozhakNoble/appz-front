import React from "react";
import PageHeader from "../components/PageHeader";
import payImg from "../images/pay.png";

const HelpModule = () => {
  return (
    <div className="w-full">
      <PageHeader text="Формування пакету допомоги" />
      <div className="w-full flex justify-center">
        <div className="w-1/2 mx-2 mt-5 flex flex-col px-4">
          <h3 className="text-xl font-light mb-3">Запит про допомогу</h3>
          <h4 className="text-md font-light ">Опишіть проблему</h4>
          <textarea
            className="h-36 border-[1px] shadow border-slate-300 m-4 rounded p-4"
            placeholder="Потрібна допомога з ..."
          />
          <h4 className="text-md font-light ">Номер картки, для матеріальної допомоги</h4>
          <input
            className="h-12 border-[1px] shadow border-slate-300 m-4 rounded p-4"
            placeholder="0000 0000 0000 0000"
          />
          <button
            type="button"
            class="border w-56 border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
          >
            Надіслати запит
          </button>
        </div>
        <div className="w-1/2 mx-2 mt-5 flex flex-col px-4">
          <h3 className="text-xl font-light mb-3">Допомогти людині</h3>
          <h4 className="text-md font-light ">Оберіть людину (Номер запиту допомоги)</h4>
          <select className="h-12 border-[1px] shadow border-slate-300 m-4 rounded px-4">
            <option value={0}></option>

            <option value={12}># 12 Кошти на медикаменти (Ірина Федишин)</option>
            <option value={13}># 39 Збір на бронежилети (Анатолій Андрусечко)</option>
            <option value={14}># 72 Збір на психолога для діток (Лідія Кшевицька)</option>
            <option value={15}># 48 Допомога в Фонд (Сергій Притула)</option>
          </select>
          <h4 className="text-md font-light ">Дані про картку</h4>
          <input
            className="h-12 border-[1px] shadow border-slate-300 m-4 rounded p-4"
            placeholder="0000 0000 0000 0000"
          />
          <div className="flex gap-4">
            <input className="h-12 border-[1px] shadow border-slate-300 m-4 mt-1 rounded p-4" placeholder="CVV" />
            <input className="h-12 border-[1px] shadow border-slate-300 m-4 mt-1 rounded p-4" placeholder="DD/YYYY" />
          </div>
          <h4 className="text-md font-light ">Або інші способи оплати</h4>
          <img src={payImg} alt="pay" className="w-1/3" />
          <button
            type="button"
            class="border w-56 border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
          >
            Допомогти
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModule;
