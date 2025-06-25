import BookingCard from "@/components/modules/Booking/BookingCard";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const ReportPage = () => {
  return (
    <div>
      <PageHeader title="Booking List" />
      <BookingCard />
    </div>
  );
};

export default ReportPage;
