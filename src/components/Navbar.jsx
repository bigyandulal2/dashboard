import React from "react";
export default function Navbar({ toggle, setToggle }) {
  return (
    <section className="navbar">
      <nav className="navbar_navlist">
        <h3
          className={toggle ? "  text-dark-text-white" : "text-light-text-dark"}
        >
          Social Media Dashboard
        </h3>
        <aside>
          <span  className={toggle ? "  text-dark-text-white" : "text-light-text-dark"}>Dark Mode</span>
          {/* add a toggle element here */}
          <div className="navbar_navlist-toggle">
            <label className="switch">
              <input
                type="checkbox"
                checked={toggle}
                onChange={() => setToggle((e) => !e)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </aside>
      </nav>
      <p
        className={
          toggle
            ? " navbar_followers text-dark-top-bg-pattern"
            : " navbar_followers  text-light-text"
        }
      >
        Total Followers:23,004
      </p>
    </section>
  );
}
