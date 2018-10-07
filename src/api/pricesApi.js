import prices from '../mockData/prices.json';

export default class PricesApi {

  static getPrices() {
    return new Promise((resolve) => {
      resolve(prices);
    });
  }

}
