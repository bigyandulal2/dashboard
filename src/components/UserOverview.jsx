import useroverview from "../Data/useroverview.json";
import IconUp from "/images/icon-up.svg";
import Icondown from "/images/icon-down.svg";
export default function UserOverview({ toggle }) {
  return (
    <section className="overview">
      {useroverview.map((item, index) => {
        return (
          <main
            key={index}
            className={
              toggle
                ? "overview_card cards_card item-dark-card-bg"
                : "overview_card cards_card item-light-card-bg"
            }
          >
            <div className="overview_detail1">
              <span
                className={
                  toggle ? "text-dark-text-white" : "text-light-text-dark"
                }
              >
                {item.title}
              </span>
              <img src={item.icon} alt="icon" />
            </div>
            <div className="overview_detail2">
              <span
                className={
                  toggle ? "text-dark-text-white" : "text-light-text-dark"
                }
              >
                {item.value}
              </span>
              <aside className={item.increase ? "green" : "red"}>
                <img src={item.increase ? IconUp : Icondown} alt="icon" />
                <strong>{item.percentageChange}</strong>
              </aside>
            </div>
          </main>
        );
      })}
    </section>
  );
}
