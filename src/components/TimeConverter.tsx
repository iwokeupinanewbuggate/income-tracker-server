import { useEffect, useState } from "react";

const DateConverter = ({ createdAt }: { createdAt: string }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const currentDate = new Date().getTime();
    const inputDateObj = new Date(createdAt).getTime();
    const difference = currentDate - inputDateObj;

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    let result = "";
    if (years > 0) {
      result = `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      result = `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      result = `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      result = `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      result = `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      result = `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }

    setTimeAgo(result);
  }, [createdAt]);

  return <p>{timeAgo}</p>;
};

export default DateConverter;
