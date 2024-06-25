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
import type { PassRetainIndicatorApi } from './PassRetainIndicatorApi';

/**
 * This class represents the entity "PassRetainIndicator" of service "RegulationComplianceMasterService".
 */
export class PassRetainIndicator<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PassRetainIndicatorType<T>
{
  /**
   * Technical entity name for PassRetainIndicator.
   */
  static _entityName = 'PassRetainIndicator';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the PassRetainIndicator entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 6.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PassRetainIndicatorApi<T>) {
    super(_entityApi);
  }
}

export interface PassRetainIndicatorType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
