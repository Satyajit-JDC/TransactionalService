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
import type { TransactionSourceScenarioApi } from './TransactionSourceScenarioApi';

/**
 * This class represents the entity "TransactionSourceScenario" of service "RegulationComplianceMasterService".
 */
export class TransactionSourceScenario<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionSourceScenarioType<T>
{
  /**
   * Technical entity name for TransactionSourceScenario.
   */
  static _entityName = 'TransactionSourceScenario';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the TransactionSourceScenario entity
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

  constructor(_entityApi: TransactionSourceScenarioApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionSourceScenarioType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
