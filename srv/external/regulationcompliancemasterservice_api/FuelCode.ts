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
import type { FuelCodeApi } from './FuelCodeApi';

/**
 * This class represents the entity "FuelCode" of service "RegulationComplianceMasterService".
 */
export class FuelCode<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements FuelCodeType<T>
{
  /**
   * Technical entity name for FuelCode.
   */
  static _entityName = 'FuelCode';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the FuelCode entity
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

  constructor(_entityApi: FuelCodeApi<T>) {
    super(_entityApi);
  }
}

export interface FuelCodeType<T extends DeSerializers = DefaultDeSerializers> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
