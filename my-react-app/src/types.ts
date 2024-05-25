export interface Image {
    id: string;
    urls: {
      regular: string;
      thumb: string;
    };
    alt_description: string;
  }
  
  export interface FetchImagesResponse {
    results: Image[];
  }