export interface VolumeInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    imageLinks?: {
      thumbnail: string;
    };
  }
  
  export interface Book {
    id: string;
    volumeInfo: VolumeInfo;
  }
  
  export interface BookState {
    books: Book[];
    wishlist: Book[];
    loading: boolean;
  }
  