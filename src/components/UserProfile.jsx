import Data from "../Data/data.json";
import IconUp from "./images/icon-up.svg";
import Icondown from "./images/icon-down.svg";
export default function UserProfile({ toggle }) {
  return (
    <div className="cards">
      {Data.map((item, index) => {
        return (
          <div
            key={index}
            className={
              toggle
                ? " cards_card item-dark-card-bg"
                : " cards_card item-light-card-bg"
            }
          >
            <div className="cards_card-top"></div>
            <div className={`card item-${item.media}`}>
              <aside className="card_item">
                <img src={item.icon} alt={"logo"} />
                <span>{item.user}</span>
              </aside>
              <h1
                className={
                  toggle
                    ? "card_followers text-dark-text-white"
                    : " card_followers text-light-text-dark"
                }
              >
                {item.Followers}
              </h1>
              <p className="card_type">{item.type}</p>
              <aside
                className={item.increase ? "card_logo green" : "card_logo red"}
              >
                <img src={item.increase ? IconUp : Icondown} alt="icon" />
                <span>{item.todaysubscriber} Today</span>
              </aside>
            </div>
          </div>
        );
      })}
    </div>
  );
}
