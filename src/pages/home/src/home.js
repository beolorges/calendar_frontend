import Calendar from "./../../../components/calendar/src/calendar";
import SideBarNavigator from "../../../components/sideBarNavigator/src/sideBarNavigator";
import SideBarMenu from "../../../components/sideBarMenu/src/sideBarMenu";
import "./home.css";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="homeContent">
                    <div className="sideBar">
                        <SideBarNavigator width="12" height='100' />
                        <SideBarMenu />
                    </div>
                    <div className="calendarHome">
                        <Calendar />
                    </div>

                </div>
            </div>
            <div className="generalSideBar">

            </div>

        </div>
    );
}

export default Home;
