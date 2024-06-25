/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { FuelSubCategoryApi } from './FuelSubCategoryApi';

/**
 * This class represents the entity "FuelSubCategory" of service "RegulationComplianceMasterService".
 */
export class FuelSubCategory<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FuelSubCategoryType<T>
{
  /**
   * Technical entity name for FuelSubCategory.
   */
  static _entityName = 'FuelSubCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the FuelSubCategory entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 3.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: FuelSubCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface FuelSubCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
