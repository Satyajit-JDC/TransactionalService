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
import type { TransactionCategoryApi } from './TransactionCategoryApi';

/**
 * This class represents the entity "TransactionCategory" of service "RegulationComplianceMasterService".
 */
export class TransactionCategory<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TransactionCategoryType<T>
{
  /**
   * Technical entity name for TransactionCategory.
   */
  static _entityName = 'TransactionCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the TransactionCategory entity
   */
  static _keys = ['category'];
  /**
   * Category.
   * Maximum length: 4.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 100.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
