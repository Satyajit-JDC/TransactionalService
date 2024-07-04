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
import type { MaintainRegulationTransactionTypeWithImpactApi } from './MaintainRegulationTransactionTypeWithImpactApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import {
  MaintainTransactionType,
  MaintainTransactionTypeType
} from './MaintainTransactionType';
import {
  TransactionCategory,
  TransactionCategoryType
} from './TransactionCategory';
import { Impact, ImpactType } from './Impact';
import {
  PassRetainIndicator,
  PassRetainIndicatorType
} from './PassRetainIndicator';

/**
 * This class represents the entity "MaintainRegulationTransactionTypeWithImpact" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationTransactionTypeWithImpact<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationTransactionTypeWithImpactType<T>
{
  /**
   * Technical entity name for MaintainRegulationTransactionTypeWithImpact.
   */
  static _entityName = 'MaintainRegulationTransactionTypeWithImpact';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationTransactionTypeWithImpact entity
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
   * Regulation Type Regulation Type.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationTypeRegulationType?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Transaction Category Category.
   * Maximum length: 4.
   * @nullable
   */
  declare transactionCategoryCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Impact Category.
   * Maximum length: 2.
   * @nullable
   */
  declare impactCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pass Retain Indicator Category.
   * Maximum length: 6.
   * @nullable
   */
  declare passRetainIndicatorCategory?: DeserializedType<
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
   * One-to-one navigation property to the {@link MaintainRegulationType} entity.
   */
  declare regulationType?: MaintainRegulationType<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainTransactionType} entity.
   */
  declare transactionType?: MaintainTransactionType<T> | null;
  /**
   * One-to-one navigation property to the {@link TransactionCategory} entity.
   */
  declare transactionCategory?: TransactionCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link Impact} entity.
   */
  declare impact?: Impact<T> | null;
  /**
   * One-to-one navigation property to the {@link PassRetainIndicator} entity.
   */
  declare passRetainIndicator?: PassRetainIndicator<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationTransactionTypeWithImpact} entity.
   */
  declare siblingEntity?: MaintainRegulationTransactionTypeWithImpact<T> | null;

  constructor(_entityApi: MaintainRegulationTransactionTypeWithImpactApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationTransactionTypeWithImpactType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  transactionTypeTransactionType?: DeserializedType<T, 'Edm.String'> | null;
  transactionCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  impactCategory?: DeserializedType<T, 'Edm.String'> | null;
  passRetainIndicatorCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  transactionType?: MaintainTransactionTypeType<T> | null;
  transactionCategory?: TransactionCategoryType<T> | null;
  impact?: ImpactType<T> | null;
  passRetainIndicator?: PassRetainIndicatorType<T> | null;
  siblingEntity?: MaintainRegulationTransactionTypeWithImpactType<T> | null;
}
