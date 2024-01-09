import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function keydownHandler(e) {
        if (e.code === key) {
          action();
        }
      }

      document.addEventListener("keydown", keydownHandler);
      return () => document.removeEventListener("keydown", keydownHandler);
    },
    [key, action]
  );
}
