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
import type { MaintainRegulationSubScenarioToScenarioApi } from './MaintainRegulationSubScenarioToScenarioApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import {
  TransactionSourceScenario,
  TransactionSourceScenarioType
} from './TransactionSourceScenario';
import { ObjectCategory, ObjectCategoryType } from './ObjectCategory';
import { RegulationSubType, RegulationSubTypeType } from './RegulationSubType';

/**
 * This class represents the entity "MaintainRegulationSubScenarioToScenario" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationSubScenarioToScenario<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationSubScenarioToScenarioType<T>
{
  /**
   * Technical entity name for MaintainRegulationSubScenarioToScenario.
   */
  static _entityName = 'MaintainRegulationSubScenarioToScenario';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationSubScenarioToScenario entity
   */
  static _keys = ['regulationSubScenario_category', 'IsActiveEntity'];
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
   * Transaction Source Scenario Category.
   * Maximum length: 5.
   * @nullable
   */
  declare transactionSourceScenarioCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Object Category Category.
   * Maximum length: 3.
   * @nullable
   */
  declare objectCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulation Sub Scenario Category.
   * Maximum length: 20.
   */
  declare regulationSubScenarioCategory: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 50.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link TransactionSourceScenario} entity.
   */
  declare transactionSourceScenario?: TransactionSourceScenario<T> | null;
  /**
   * One-to-one navigation property to the {@link ObjectCategory} entity.
   */
  declare objectCategory?: ObjectCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link RegulationSubType} entity.
   */
  declare regulationSubScenario?: RegulationSubType<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationSubScenarioToScenario} entity.
   */
  declare siblingEntity?: MaintainRegulationSubScenarioToScenario<T> | null;

  constructor(_entityApi: MaintainRegulationSubScenarioToScenarioApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationSubScenarioToScenarioType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  transactionSourceScenarioCategory?: DeserializedType<T, 'Edm.String'> | null;
  objectCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  regulationSubScenarioCategory: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  transactionSourceScenario?: TransactionSourceScenarioType<T> | null;
  objectCategory?: ObjectCategoryType<T> | null;
  regulationSubScenario?: RegulationSubTypeType<T> | null;
  siblingEntity?: MaintainRegulationSubScenarioToScenarioType<T> | null;
}
