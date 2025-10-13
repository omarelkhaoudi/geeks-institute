import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedDay } from "../features/tasks/taskSlice";

function DatePicker() {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.tasks.selectedDay);

  const handleChange = (e) => {
    dispatch(setSelectedDay(e.target.value));
  };

  return (
    <div className="flex justify-center">
      <input
        type="date"
        value={selectedDay}
        onChange={handleChange}
        className="p-2 border border-indigo-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>
  );
}

export default DatePicker;
