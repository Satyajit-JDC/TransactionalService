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
import type { MaintainRegulationTransactionTypeApi } from './MaintainRegulationTransactionTypeApi';
import {
  MaintainTransactionType,
  MaintainTransactionTypeType
} from './MaintainTransactionType';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import {
  TransactionCategory,
  TransactionCategoryType
} from './TransactionCategory';

/**
 * This class represents the entity "MaintainRegulationTransactionType" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationTransactionType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationTransactionTypeType<T>
{
  /**
   * Technical entity name for MaintainRegulationTransactionType.
   */
  static _entityName = 'MaintainRegulationTransactionType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationTransactionType entity
   */
  static _keys = ['ID', 'IsActiveEntity'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Created At.
   * @nullable
   */
  declare createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modified At.
   * @nullable
   */
  declare modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Modified By.
   * Maximum length: 255.
   * @nullable
   */
  declare modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Type Transaction Type.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionTypeTransactionType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Regulation Type Regulation Type.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationTypeRegulationType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Transaction Category Category.
   * Maximum length: 4.
   * @nullable
   */
  declare transactionCategoryCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Active Entity.
   */
  declare isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Has Active Entity.
   */
  declare hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Has Draft Entity.
   */
  declare hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * One-to-one navigation property to the {@link MaintainTransactionType} entity.
   */
  declare transactionType?: MaintainTransactionType<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationType} entity.
   */
  declare regulationType?: MaintainRegulationType<T> | null;
  /**
   * One-to-one navigation property to the {@link TransactionCategory} entity.
   */
  declare transactionCategory?: TransactionCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationTransactionType} entity.
   */
  declare siblingEntity?: MaintainRegulationTransactionType<T> | null;

  constructor(_entityApi: MaintainRegulationTransactionTypeApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationTransactionTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  transactionTypeTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  transactionCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  transactionType?: MaintainTransactionTypeType<T> | null;
  regulationType?: MaintainRegulationTypeType<T> | null;
  transactionCategory?: TransactionCategoryType<T> | null;
  siblingEntity?: MaintainRegulationTransactionTypeType<T> | null;
}
