import { useEffect, useState } from "react";
import { useRoster } from "@/store/roster";

export function useHydrateRoster() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const result = useRoster.persist.rehydrate();
    void Promise.resolve(result).then(() => setReady(true));
  }, []);
  return ready;
}
