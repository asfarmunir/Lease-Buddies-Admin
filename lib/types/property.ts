export interface IProperty {
  _id: string;
  title: string;
  description: string;
  type: "Apartment" | "Condo" | "House" | "Townhouse" | "Other";
  audience: "Affordable" | "Luxury" | "Any";
  location: string;
  address: {
    address1: string;
    address2?: string;
    address3?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    lat: number;
    lng: number;
    formattedAddress: string;
    placeId?: string;
  };
  locationGeo?: {
    type: "Point";
    coordinates: [number, number];
  };
  bedrooms: number;
  beds: number;
  bathrooms: number;
  balcony: number;
  squareFeet?: string;
  amenities: {
    interior: { name: string; included: boolean }[];
    outdoor: { name: string; included: boolean }[];
    utilities: { name: string; included: boolean }[];
    otherFeatures: { name: string; included: boolean }[];
  };
  petsAllowed: ("Dogs Allowed" | "Cats Allowed" | "No Pets")[];
  photos: string[];
  featuredImage?: string;
  price: number;
  currency: "USD" | "CAD";
  contactDetails: {
    name: string;
    email: string;
    phoneNumber: string;
  };
  owner: {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
  };
  isActive: boolean;
  isFeatured: boolean;
  boostSubscription?: string;
  boostExpiration?: Date;
  createdAt: Date;
  updatedAt: Date;
  availabilityDate?: Date;
  leaseTerms?: string;
  neighborhoodInfo?: string;
  nearbyAttractions?: string[];
  formattedAddress: string;
  displayPrice: string;
}