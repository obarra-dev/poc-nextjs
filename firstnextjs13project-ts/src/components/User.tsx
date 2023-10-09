"use client";
import { useEffect } from "react";

function User() {
    useEffect(() => {
        alert("Client component")
    }, [])

    return (
        <div>User</div>
    )
}

export default User