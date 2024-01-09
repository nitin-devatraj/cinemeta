import { useEffect, useRef } from "react";

export default function Search({ query, setQuery }) {
  const inputElRef = useRef(null);

  useEffect(
    function () {
      function enterHandler(e) {
        console.log("here");
        if (document.activeElement === inputElRef.current) return;
        if (e.code === "Enter") {
          inputElRef.current.focus();
          setQuery("");
        }
      }

      document.addEventListener("keydown", enterHandler);
      return () => document.removeEventListener("keydown", enterHandler);
    },
    [setQuery]
  );

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
