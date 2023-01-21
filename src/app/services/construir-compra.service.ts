import { Injectable } from '@angular/core';
import { ICategory } from '../model/ICategory';
import { environment } from '../../environments/environment.prod';
import { Endpoint } from 'src/app/model/Endpoints';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProducType } from '../model/IProductType';
import { ISearchConfig } from '../model/ISearchConfig';
import { IMotorcycle } from '../model/IMotorcycle';

@Injectable({
  providedIn: 'root'
})
export class ConstruirCompraService {


  constructor(private http: HttpClient) { }

  getProductsTypes(): Promise<IProducType[]> {

    return this.http.get<IProducType[]>(`${environment.searchEngineAPi}${Endpoint.GET_PRODUCT_TYPES}`).toPromise();
  }

  getMotorcicleBrands(): Promise<ISearchConfig[]> {
    return this.http.get<ISearchConfig[]>(`${environment.searchEngineAPi}${Endpoint.GET_MOTORCYCLE_BRANDS}`).toPromise();
  }

  getMotorcicleByBrand( motorcyleBrand: number): Promise<IMotorcycle[]> {
    return this.http.get<IMotorcycle[]>(`${environment.searchEngineAPi}${Endpoint.GET_MOTORCYCLE_BY_BRAND}/${motorcyleBrand}`).toPromise();
  }


  getTypeProducCategory(productType: number): Promise<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.searchEngineAPi}${Endpoint.GET_PRODUCT_CATEGORY}/${productType}`).toPromise();
  }

}
