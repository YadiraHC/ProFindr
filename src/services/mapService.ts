// src/services/mapService.ts

// src/services/mapService.ts

// src/services/mapService.ts

const OPENCAGE_API_URL = 'https://api.opencagedata.com/geocode/v1/json';
const OPENCAGE_API_KEY = '10fbe7582dd5488e8014e25d045cbb15'; // Reemplaza con tu API key de OpenCage

export async function getGeocoding(address: string) {
  try {
    const response = await fetch(`${OPENCAGE_API_URL}?q=${encodeURIComponent(address)}&key=${OPENCAGE_API_KEY}`);
    if (!response.ok) {
      throw new Error('Error fetching geocoding data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching geocoding data');
  }
}


// src/services/mapService.ts
export async function getAddressFromCoordinates(lat: number, lng: number): Promise<string> {
  const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
  if (!response.ok) {
    throw new Error('Failed to fetch address');
  }
  const data = await response.json();
  console.log('Fetched address from OSM:', data.display_name); // Log the fetched address from OSM
  return data.display_name;
}


/* const API_KEY = '10fbe7582dd5488e8014e25d045cbb15';

export async function getGeocoding(address: string) {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(address)}&key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Error fetching geocoding data');
    }
    return response.json();
}
 */