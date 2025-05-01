import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
  return (
    <div className=" w-full p-4 rounded-lg shadow-md">
      <Calendar className={"mx-auto text-black p-4 rounded-lg shadow-md"} />
    </div>
  );
}
export default MyCalendar;
