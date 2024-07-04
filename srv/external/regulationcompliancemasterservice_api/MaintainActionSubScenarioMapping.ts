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
import type { MaintainActionSubScenarioMappingApi } from './MaintainActionSubScenarioMappingApi';
import { RegulationSubType, RegulationSubTypeType } from './RegulationSubType';
import { ActionInventory, ActionInventoryType } from './ActionInventory';

/**
 * This class represents the entity "MaintainActionSubScenarioMapping" of service "RegulationComplianceMasterService".
 */
export class MaintainActionSubScenarioMapping<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainActionSubScenarioMappingType<T>
{
  /**
   * Technical entity name for MaintainActionSubScenarioMapping.
   */
  static _entityName = 'MaintainActionSubScenarioMapping';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainActionSubScenarioMapping entity
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
   * Regulation Sub Scenario Category.
   * Maximum length: 20.
   * @nullable
   */
  declare regulationSubScenarioCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Action Category.
   * Maximum length: 10.
   * @nullable
   */
  declare actionCategory?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link RegulationSubType} entity.
   */
  declare regulationSubScenario?: RegulationSubType<T> | null;
  /**
   * One-to-one navigation property to the {@link ActionInventory} entity.
   */
  declare action?: ActionInventory<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainActionSubScenarioMapping} entity.
   */
  declare siblingEntity?: MaintainActionSubScenarioMapping<T> | null;

  constructor(_entityApi: MaintainActionSubScenarioMappingApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainActionSubScenarioMappingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationSubScenarioCategory?: DeserializedType<T, 'Edm.String'> | null;
  actionCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationSubScenario?: RegulationSubTypeType<T> | null;
  action?: ActionInventoryType<T> | null;
  siblingEntity?: MaintainActionSubScenarioMappingType<T> | null;
}
