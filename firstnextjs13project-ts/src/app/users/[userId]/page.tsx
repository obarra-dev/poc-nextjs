"use client";
import { useParams } from "next/navigation";

function UserPage() {
  const params = useParams();

  return (
    <div>
      Users
      <button
        onClick={() => {
          alert(params.userId);
        }}
      >
        click
      </button>
    </div>
  );
}

export default UserPage;
