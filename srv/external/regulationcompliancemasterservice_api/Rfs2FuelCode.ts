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
import type { Rfs2FuelCodeApi } from './Rfs2FuelCodeApi';

/**
 * This class represents the entity "RFS2FuelCode" of service "RegulationComplianceMasterService".
 */
export class Rfs2FuelCode<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Rfs2FuelCodeType<T>
{
  /**
   * Technical entity name for Rfs2FuelCode.
   */
  static _entityName = 'RFS2FuelCode';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Rfs2FuelCode entity
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

  constructor(_entityApi: Rfs2FuelCodeApi<T>) {
    super(_entityApi);
  }
}

export interface Rfs2FuelCodeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
