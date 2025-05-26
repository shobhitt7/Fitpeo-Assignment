export default function Navigation(){
    return(
     <>
        <nav className="nav-bar">

<h1>General</h1>

            <a href="#" className="dashboard"><i class="fa-solid fa-table-columns"></i>Dashboard</a>

            <a href="#" className="history">
                <i class="fa-solid fa-notes-medical"></i>History
            </a>

            <a href="#" className="calender"><i class="fa-solid fa-calendar-days"></i>Calender</a>

            <a href="#" className="appointment"><i class="fa-solid fa-square-plus"></i>Appointments</a>

            <a href="#" className="statictics"><i class="fa-solid fa-chart-simple"></i>Statictics</a>

            <h1>Tools</h1>

            <a href="#" className="chat"><i class="fa-brands fa-rocketchat"></i>Chat</a>

            <a href="#" className="support"><i class="fa-solid fa-phone"></i>Support</a>

            <a href="#" className="settings"><i class="fa-solid fa-gear"></i>Settings</a>
        </nav>
     </>
     
    )
}