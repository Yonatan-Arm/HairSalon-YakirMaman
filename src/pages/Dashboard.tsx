import React, { useEffect, useState } from "react";
import { userService } from "../services/user.service.js";
import deleteBtn from "../assets/imgs/delete-btn.svg";
import HomeSrc from "../assets/imgs/homeSvg.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebase.service";

export default function Dashboard() {
  const [dates, setDates] = useState({});
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user && user.uid === import.meta.env.VITE__USERADMIN) {
      } else {
        navigate("/");
      }
    });
    return () => {};
  }, []);

  useEffect(() => {
    if (!date) {
      const dateToday = new Date().toISOString().split("T")[0];
      setDate(dateToday);
      chooseDate(dateToday);
    }
    return () => {};
  }, [dates]);

  const chooseDate = async (event: any) => {
    const date = event.target ? event.target.value : event;
    setDate(date);
    const res = await userService.getById(date);
    delete res.id;
    const sortedObj: any = await sortObj(res);
    setDates(sortedObj);
  };

  async function sortObj(data: object): Promise<object> {
    const dataArray = Object.entries(data);
    const filteredArray = dataArray.filter((entry) => !entry[1].avilable);
    function compareHours(a: [string, any], b: [string, any]): number {
      const timeA: any = new Date("1970-01-01 " + a[0]);
      const timeB: any = new Date("1970-01-01 " + b[0]);
      return timeA - timeB;
    }
    filteredArray.sort(compareHours);
    const sortedData = Object.fromEntries(filteredArray);
    setDates(sortedData);
    return sortedData;
  }

  const removeResevation = async (val: any) => {
    await userService.remove(date, val);
    try {
      chooseDate(date);
    } catch {}
  };

  return (
    <section className="dashboard-section flex justify-center align-center">
      <div className="dashboard-modal flex column align-center">
        <h2 className="text-center">Welcome Yakir</h2>
        <NavLink to="/">
          <img src={HomeSrc} alt="Home-logo" />
        </NavLink>
        <label htmlFor="date">
          <input
            name="date"
            type="date"
            id="date"
            min="2023-01-05"
            max="2024-01-01"
            value={date}
            onChange={chooseDate}
          />
        </label>
        {Object.keys(dates).length > 0 ? (
          <div className="dates-container flex column ">
            {Object.keys(dates).map((key: any) => (
              <div
                key={key}
                className="reservation-card flex row align-center space-between"
              >
                <span className="reservation-card-title">{key}</span>
                <div className="reservation-card-content flex row">
                  <span>{(dates as any)[key].name}</span>
                  <span>{(dates as any)[key].phone}</span>
                </div>
                <button
                  className="reservation-card-action-button"
                  onClick={() => removeResevation(key)}
                >
                  <img src={deleteBtn} alt="delete" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>There are no orders yet..</div>
        )}
      </div>
    </section>
  );
}
