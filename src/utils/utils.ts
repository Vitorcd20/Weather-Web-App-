export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  admin1?: string;
}

export const formatLocationDetails = (location: Location) => {
  const parts = [location.admin1, location.country].filter(Boolean);
  return parts.join(", ");
};
