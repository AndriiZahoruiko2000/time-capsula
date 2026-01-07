export interface Capsula {
  _id: string;
  userId: string;
  location: { lat: number; lon: number; country: string; city: string };
  timeToOpen: string;
  title: string;
  message: string;
  media: string[];
  files: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GetCapsulasParams {
  page?: number;
  perPage?: number;
  sortField?: string;
  sortOrder?: string;
  availableAfter?: string;
  availableBefore?: string;
  userId?: string;
  country?: string;
  city?: string;
  lat?: number;
  lon?: number;
  distance?: number;
}

export interface GetCapsulasResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  capsules: Capsula[];
}

export interface UpdateCapsulaBody {
  userId?: string;
  location?: {
    lat: number;
    lon: number;
    country: string;
    city: string;
  };
  timeToOpen?: string;
  title?: string;
  message?: string;
  media?: string[];
  files?: string[];
}

export interface NewCapsula {
  userId: string;
  location: {
    lat: number;
    lon: number;
    country: string;
    city: string;
  };
  timeToOpen: string;
  title: string;
  message: string;
  media?: string[];
  files?: string[];
}
