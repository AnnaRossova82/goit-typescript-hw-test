export interface Image {
    id: string;
    urls: {
      regular: string;
      small: string;
      thumb: string;
    };
    alt_description: string;
  }
  
  export interface FetchImagesResponse {
    results: Image[];
  }