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
import type { RegulationSubTypeApi } from './RegulationSubTypeApi';

/**
 * This class represents the entity "RegulationSubType" of service "RegulationComplianceMasterService".
 */
export class RegulationSubType<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RegulationSubTypeType<T>
{
  /**
   * Technical entity name for RegulationSubType.
   */
  static _entityName = 'RegulationSubType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the RegulationSubType entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 20.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RegulationSubTypeApi<T>) {
    super(_entityApi);
  }
}

export interface RegulationSubTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
