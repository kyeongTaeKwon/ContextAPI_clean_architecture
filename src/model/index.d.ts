export type Item = {
  id: string;
  title: string;
  coverImage: string;
  price: number;
  score: number;
  availableCoupon?: boolean;
};

export type Coupon = {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
};
