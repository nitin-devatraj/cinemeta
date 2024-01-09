import { useEffect, useRef } from "react";
import { useKey } from "../../hooks/useKey";

export default function Search({ query, setQuery }) {
  const inputElRef = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputElRef.current) return;
    inputElRef.current.focus();
  });

  return (
    <input
      ref={inputElRef}
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
