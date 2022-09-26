import React from "react";

export default function Notifications({ notices = [] }) {
  return (
    notices.length > 0 && (
      <div>
        You have {notices.length} notifications!
      </div>
    )
  );
}
