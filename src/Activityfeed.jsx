export default function Activityfeed(){
    return(
          <div className="activity-feed">
      <h2>Activity</h2>
      <p>3 appointments this week</p>
      <div className="bar-chart">
        <div className="bar monday" title="1 appointment"></div>
        <div className="bar wednesday" title="1 appointment"></div>
        <div className="bar friday" title="1 appointment"></div>
      </div>
      <div className="labels">
        <span>Mon</span>
        <span>Wed</span>
        <span>Fri</span>
      </div>
    </div>
    )
}