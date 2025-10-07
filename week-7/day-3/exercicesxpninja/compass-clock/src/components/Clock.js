import React from "react";
import "./Clock.css";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      dayOfWeek: new Date().getDay(),
      dayOfMonth: new Date().getDate(),
      hour: new Date().getHours(),
      minute: new Date().getMinutes(),
      second: new Date().getSeconds()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const now = new Date();
      this.setState({
        year: now.getFullYear(),
        month: now.getMonth(),
        dayOfWeek: now.getDay(),
        dayOfMonth: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  getMonthName = (monthIndex) => {
    const months = [
      "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
      "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
    ];
    return months[monthIndex];
  };

  render() {
    const { year, month, dayOfMonth, hour, minute, second } = this.state;

    return (
      <div className="clock-container">
        {/* Year Display - Top Left */}
        <div className="year-display">
          {year} / Year
        </div>

        {/* Circular Time Markers */}
        <div className="circular-display">
          {Array.from({ length: 42 }, (_, i) => i + 3).map((time) => (
            <div
              key={time}
              className="time-marker"
              style={{
                transform: `rotate(${(time - 3) * 8.57}deg)`
              }}
            >
              <span className="time-text">{time} hr</span>
            </div>
          ))}
        </div>

        {/* Current Time Display - Center */}
        <div className="current-time">
          <div className="time-digits">
            {hour.toString().padStart(2, '0')}:
            {minute.toString().padStart(2, '0')}:
            {second.toString().padStart(2, '0')}
          </div>
          <div className="date-display">
            {dayOfMonth} {this.getMonthName(month)}
          </div>
        </div>

        {/* Month Display - Bottom Right */}
        <div className="month-display">
          {this.getMonthName(month)}
        </div>
      </div>
    );
  }
}

export default Clock;