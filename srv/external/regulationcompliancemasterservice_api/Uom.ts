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
import type { UomApi } from './UomApi';

/**
 * This class represents the entity "UOM" of service "RegulationComplianceMasterService".
 */
export class Uom<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UomType<T>
{
  /**
   * Technical entity name for Uom.
   */
  static _entityName = 'UOM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the Uom entity
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

  constructor(_entityApi: UomApi<T>) {
    super(_entityApi);
  }
}

export interface UomType<T extends DeSerializers = DefaultDeSerializers> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
