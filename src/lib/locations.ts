/**
 * Separate file for store locations and hours.
 * Hours vary by location.
 */

export interface Location {
  name: string;
  address: string;
  city: string;
  directionsUrl: string;
  addressLine: string;
  phone: string;
  hours: string;

  imagePath: string;
}

export const locations: Location[] = [
  {
    name: "Fail's Donuts & Bagels",
    address: "8414 Lander Ave",
    city: "Hilmar, CA 95324",
    addressLine: "8414 Lander Ave, Hilmar, CA 95324",
    phone: "(209) 667-4718",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Fail's+Donuts+and+bagels+Hilmar+Ca&destination_place_id=ChIJn_XUinUJkYAR1WmLoR4rfuI",
    hours: "4am - 12pm Mon-Sun",
    imagePath: "locations/hilmar-shop.webp",
  },
  {
    name: "Jim's Donuts & Bagels",
    address: "1915 N St",
    city: "Newman, CA 95360",
    addressLine: "1915 N St, Newman, CA 95360",
    phone: "(209) 862-2044",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Jim's+Donuts+and+bagels+Newman+Ca&destination_place_id=ChloWERAHOjkYARNGVhaOP80-8",
    hours: "Mon-Fri: 4:30am - 12pm\nSat: 5am - 12pm\nSun: 6am - 12pm",
    imagePath: "locations/newman-shop.webp",
  },
  {
    name: "Jim's Donuts & Bagels",
    address: "Schendel Ave. Ste 16385",
    city: "Delhi, CA 95315",
    addressLine: "Schendel Ave. Ste 16385, Delhi, CA 95315",
    phone: "(209) 634-0016",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Jim's+Donuts+and+bagels+Delhi+Ca&destination_place_id=ChIJzQh2yb0OkYAR8BBmnjKJPPU",
    hours: "6am - 12pm Mon-Sun",
    imagePath: "locations/delhi-shop.webp",
  },
];
