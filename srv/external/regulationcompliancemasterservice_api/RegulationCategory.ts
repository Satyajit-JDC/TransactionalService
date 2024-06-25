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
import type { RegulationCategoryApi } from './RegulationCategoryApi';

/**
 * This class represents the entity "RegulationCategory" of service "RegulationComplianceMasterService".
 */
export class RegulationCategory<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RegulationCategoryType<T>
{
  /**
   * Technical entity name for RegulationCategory.
   */
  static _entityName = 'RegulationCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the RegulationCategory entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 5.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RegulationCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface RegulationCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
