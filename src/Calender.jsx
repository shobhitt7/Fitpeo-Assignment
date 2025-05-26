import React from "react";

const appointmentDetails = [
  {
    day: 21,
    title: "Dentist Appointment",
    times: ["10:00", "11:30"]
  },
  {
    day: 23,
    title: "Physician Appointment",
    times: ["15:00","17:00"]
  }
];

const upComingAppointment = [
    {
        day:25,
        title:"Full body checkup",
        time:["12:00","15:00"]
    },
     {
        day:26,
        title:"Next-day doctor review post check-up",
        time:["10:00","11:00"]
    }
]


const appointmentsByDay = {};
appointmentDetails.forEach(item => {
  appointmentsByDay[item.day] = item;
});

const CalendarView = () => {
  const customDays = [
    { name: "Tue", day: 20 },
    { name: "Wed", day: 21 },
    { name: "Thu", day: 22 },
    { name: "Fri", day: 23 },
    { name: "Sat", day: 24 },
    { name: "Sun", day: 25 },
    { name: "Mon", day: 26 }
  ];

  const month = "May";
  const year = 2025;

  return (
    <div className="calendar-view">
      <h2>{month} {year}</h2>

      <div className="calendar-grid week-view">
        {customDays.map(({ name }, i) => (
          <div key={i} className="calendar-header">{name}</div>
        ))}

        {customDays.map(({ day }) => {
          const appointment = appointmentsByDay[day];
          return (
            <div
              key={day}
              className={`calendar-cell ${appointment ? "highlight" : ""}`}
            >
              <div className="day-number">{day}</div>
              {appointment?.times.map((time, idx) => (
                <div key={idx} className="appointment-time">{time}</div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="appointment-cards">
        {appointmentDetails.map((appointment, index) => (
          <div className="appointment-card" key={index}>
            <h3>{appointment.title}</h3>
            <p>Date: {month} {appointment.day}, {year}</p>
            <p>Time: {appointment.times.join(" - ")}</p>
          </div>
        ))}
      </div>
          <h3 className="upcoming-heading">The Upcoming Schedule </h3>
       <div className="appointment-cards">
         {
            upComingAppointment.map((appointment, index) => (
                <div  className="appointment-card" key={index}>
                <h3>{appointment.title}</h3>
                <p>Date : {month} {appointment.day}, {year}</p>
                <p>Time : {appointment.time.join(" - ")}</p>
                </div>
            ))
         }


       </div>

      

    </div>
  );
};

export default CalendarView;
