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
import type { RegulationUomApi } from './RegulationUomApi';

/**
 * This class represents the entity "RegulationUOM" of service "RegulationComplianceMasterService".
 */
export class RegulationUom<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RegulationUomType<T>
{
  /**
   * Technical entity name for RegulationUom.
   */
  static _entityName = 'RegulationUOM';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the RegulationUom entity
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

  constructor(_entityApi: RegulationUomApi<T>) {
    super(_entityApi);
  }
}

export interface RegulationUomType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
