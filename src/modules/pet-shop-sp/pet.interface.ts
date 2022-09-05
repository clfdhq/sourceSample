export interface Category {
    /** @format int64 */
    id?: number;
    title?: string;
  }
  
  export interface Pet {
    /** @format int64 */
    id?: number;
    category?: Category;
  
    /** @example doggie */
    title: string;
    photoUrls: string[];
    tags?: Tag[];
  
    /** pet status in the store */
    status?: 'available' | 'pending' | 'sold';
  }
  
  export interface Tag {
    /** @format int64 */
    id?: number;
    title?: string;
  }
  
  export interface Order {
    /** @format int64 */
    id?: number;
  
    /** @format int64 */
    petId?: number;
  
    /** @format int32 */
    quantity?: number;
  
    /** @format date-time */
    shipDate?: string;
  
    /** Order Status */
    status?: 'placed' | 'approved' | 'delivered';
    complete?: boolean;
  }