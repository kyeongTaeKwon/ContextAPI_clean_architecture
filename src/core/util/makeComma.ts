//! 금액에 콤마 찍어주는 함수
//! (number) => string
//! ex) 10000 => '10,000'

export const makeCommaPrice = (price: number) => {
  const stringPrice = price.toString();
  return stringPrice.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};
