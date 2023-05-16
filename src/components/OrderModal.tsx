import React, { useEffect, useRef, useState } from "react";
import { userService  } from "../services/user.service.js";

export default function OrderModal({ closeModalOrder }: any) {
  const [isOpenDates, setisOpenDates] = useState(false);
  const [isMakeReservation, setIsMakeReservation] = useState(false);
  const [dates, setdates] = useState({});
  const [selectedHour, setselectedHour] = useState("");
  const form: any = useRef();

  const chooseDate = async (event: any) => {
    let date = event.target.value;
    const res = await userService.getById(date);
    delete res.id;
    const sortedObj = await sortObj(res);
    setdates(sortedObj);
    setisOpenDates(true);
  };

  function sortObj(data: object): object {
    const dataArray = Object.entries(data);
    const filteredArray = dataArray.filter((entry) => entry[1].avilable);
    function compareHours(a: [string, any], b: [string, any]): number {
      const timeA: any = new Date("1970-01-01 " + a[0]);
      const timeB: any = new Date("1970-01-01 " + b[0]);
      return timeA - timeB;
    }
    filteredArray.sort(compareHours);
    const sortedData = Object.fromEntries(filteredArray);
    return sortedData;
  }

  const makeReservation = async (ev: any) => {
    ev.preventDefault();
    const reservation = {
      name: ev.target.name.value,
      phone: ev.target.phone.value,
      avilable: false,
      dateResvation: ev.target.date.value,
      hourResvation: selectedHour,
    };
    await userService.makeReservation(reservation);
    try {
      setisOpenDates(false);
      setIsMakeReservation(true);
      setTimeout(() => {
        setIsMakeReservation(false);
      }, 3000);
      setdates({});
      setselectedHour("");
      ev.target.name.value = "";
      ev.target.phone.value = "";
      ev.target.date.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="order-section flex justify-center align-center">
      <button onClick={() => closeModalOrder()}>X</button>
      <div className="Modal" id="one">
        <h1 className="text-center">Make a reservation</h1>
        <form
          className="Modal flex column"
          onSubmit={makeReservation}
          ref={form}
        >
          <input name="name" type="text" placeholder="Yakir Maman" />
          <input
            name="phone"
            type="tel"
            placeholder="05x-xxxxxxx"
            minLength={10}
            maxLength={10}
            required
          />
          <input
            name="date"
            type="date"
            min="2023-01-04"
            max="2024-01-01"
            onChange={chooseDate}
          />
          {isOpenDates && (
            <div className="dates-container">
              {Object.keys(dates).map(
                (obj: any, idx) =>
                  !obj.avilable && (
                    <label htmlFor={obj} key={idx}>
                      <input
                        type="radio"
                        name="hour"
                        className="card-input-element"
                        id={obj}
                        onChange={(e) => setselectedHour(e.target.id)}
                      />
                      <div className="card-input">
                        <div className="date">{obj}</div>
                      </div>
                    </label>
                  )
              )}
            </div>
          )}
          {isMakeReservation && <div>send your Reservation...</div>}
          <button>send</button>
        </form>
      </div>
    </section>
  );
}
