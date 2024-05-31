import UserProfile from "./UserProfile";
import UserOverview from "./UserOverview";
export default function Grid({ toggle }) {
  return (
    <div className="grid">
      <div className="grid_item1">
        <UserProfile toggle={toggle} />
      </div>
      <div className="grid_item2">
        <h2>Overview-Today</h2>
      </div>
      <div className="grid_item3">
        <UserOverview toggle={toggle} />
      </div>
      {/* <div className="grid_item4"></div> */}
    </div>
  );
}
