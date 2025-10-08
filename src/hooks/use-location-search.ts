import { useEffect, useRef, useState } from "react";

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

export function useLocationSearch(searchValue: string, debounceMs: number = 300) {
  const [locations, setLocations] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchValue.length < 2) {
      setLocations([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            searchValue
          )}&count=10&language=en&format=json`
        );
        const data = await response.json();
        setLocations(data.results || []);
      } catch (error) {
        console.error("Error fetching locations:", error);
        setLocations([]);
      } finally {
        setIsLoading(false);
      }
    }, debounceMs);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchValue, debounceMs]);

  return { locations, isLoading };
}
