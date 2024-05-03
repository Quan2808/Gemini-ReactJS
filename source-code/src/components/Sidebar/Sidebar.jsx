import { useState } from "react";
import "./Sidebar.css";
import { MDBIcon } from "mdb-react-ui-kit";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);

  return (
    <div className="sidebar">
      <div className="top ms-2">
        <div className="menu" onClick={() => setExtended(!extended)}>
          <MDBIcon fas icon="bars" size="lg" />
        </div>
        <div className="new-chat mt-5">
          <MDBIcon far icon="plus" size="lg" />
          {extended && <span className="ms-4">New Chat</span>}
        </div>

        {extended && (
          <div className="recent">
            <span className="recent-title">Recent</span>
            <div className="recent-entry mb-2">
              <MDBIcon far icon="comment-alt" size="lg" className="ms-2" />
              <span className="ms-2">
                What is react ...hat is reacthat is react
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="bottom">
        {[
          { icon: "question-circle", text: "Help" },
          { icon: "history", text: "Activity" },
          { icon: "cog", text: "Settings" },
        ].map(({ icon, text }, index) => (
          <div key={index} className="bottom-item">
            <MDBIcon fas icon={icon} size="lg" className="ms-2" />
            {extended && <span className="ms-2">{text}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
