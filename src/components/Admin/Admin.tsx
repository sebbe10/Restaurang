// import { SearchAdmin } from "../../Service/searchbookning";
import { Search } from "semantic-ui-react";
import { idText } from "typescript";
import { getCustomers } from "../../services/bookingService";
import BookingForm from "../Booking/Booking";
// import { BookingDetails } from "./Crud/BookingDetail";
import { Bookings } from "./Crud/GetBookings";
import { Booking } from "./Crud/ShowBooking";
import './Admin.scss'

export const Admin = () => {
  return (
    <>
      <h1 className="admin__header">Admin</h1>
      {/* <SearchAdmin /> */}
      <Bookings />
    </>
  );
};
