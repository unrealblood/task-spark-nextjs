"use client";

import { useState } from "react";

export default function Search() {
    const [query, setQuery] = useState("");

    return (
        <form>
            <input type="text" name="searchQuery" className="bg-gray-200 w-80 p-2 rounded-full" placeholder="Search tasks..." />
        </form>
    );
}