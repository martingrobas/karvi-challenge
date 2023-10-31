// import { Car } from '../models/car';
const mock = require('../data.json');

import axios from "axios";

export class RestClient {
  private client: any;
  public data: any;

  constructor(baseURL: string = 'https://mocki.io') {
    this.client = axios.create({
      baseURL,
    });
  }
    async getCars() {
    try {
        /* const response = await this.client.get('/v1/80669021-108d-40c2-9bc9-887a5184b700'); */
        const response = { data: mock }
        const { data } = response;
        this.data = data; // save data in this.data
        return data;
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        throw error;
      }
    }
    
    getCarsFiltered(data, filters: any) {
      const filteredData = (() => {
        return data?.items?.filter((item) => {
          const fil = filters.every((filtro) => {
            const [clave, valor] = Object.entries(filtro)[0];
            return Boolean(item[clave].includes(valor));
          });
          return fil;
        });
      })();
      const response = { items: filteredData, availableFilters: data?.availableFilters };
      return response;
    }
}