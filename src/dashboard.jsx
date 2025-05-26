import Activityfeed from "./Activityfeed";
import CalendarView from "./Calender";
import healthCardData from "./healthcarddata"


export default function Dashboard(){
return (
  <>
    <div className="maindash-div">
      <div className="dashing">
        <h1>Dashboard</h1>
        <img
          src="/skeleton.png"
          alt="Your report presentation in a skeleton"
          height="350px"
        />
      </div>

      <div className="healthcard">
        {healthCardData.map((item) => (
          <div key={item.id} className="healthcard-item">
            <div className="imagename-div">
              <img src={item.image} height="50px" alt={item.title} />
              <p className="card-titlename">{item.title}</p>
            </div>
            <p className="card-date">Date: {item.date}</p>
           
           <div className="progress-bar">
  <div
    className="progress"
    style={{
      width: "70%",
      backgroundColor: item.status === "Healthy" ? "#5cb85c" : "#d9534f"
    }}
  ></div>
</div>

        
          </div>
        ))}
      </div>
    </div>
  </>
);

}