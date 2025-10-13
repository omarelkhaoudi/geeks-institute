import React from "react";
import { connect } from "react-redux";
import { setSelectedDay } from "../redux/actions";

function DatePicker({ selectedDay, setSelectedDay }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">Select day</label>
      <input
        type="date"
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
        className="p-2 border rounded w-full"
      />
    </div>
  );
}

export default connect(
  (state) => ({ selectedDay: state.selectedDay }),
  { setSelectedDay }
)(DatePicker);
