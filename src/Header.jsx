export default function Header(){
    return (
         <header className="header">
            <p className="main-heading"> <span className="app-title">Health</span>care.
           </p>
            <input type="text" className="search-input" placeholder="🔍   Search"/>
            <button className="noti-icon">🔔</button>
           
               <button           className="profile-icon">🧑‍💼</ button>
              <button className="add-icon">
                  ➕
              </button>

         </header>
         
      
    )
}