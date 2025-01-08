export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl : string;
  releaseDate: Date;
 // category: Category
}

export interface Category {
  id: number,
  name: string
}



