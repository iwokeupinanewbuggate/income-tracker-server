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

    let result = "";
    if (months > 0) {
      result = `${months} months ago`;
    } else if (days > 0) {
      result = `${days} days ago`;
    } else if (hours > 0) {
      result = `${hours} hours ago`;
    } else if (minutes > 0) {
      result = `${minutes} minutes ago`;
    } else {
      result = `${seconds} seconds ago`;
    }

    setTimeAgo(result);
  }, [createdAt]);

  return <p>{timeAgo}</p>;
};

export default DateConverter;
