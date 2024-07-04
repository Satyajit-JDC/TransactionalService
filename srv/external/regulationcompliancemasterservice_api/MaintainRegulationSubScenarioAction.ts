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
import type { MaintainRegulationSubScenarioActionApi } from './MaintainRegulationSubScenarioActionApi';
import { RegulationSubType, RegulationSubTypeType } from './RegulationSubType';
import { ActionInventory, ActionInventoryType } from './ActionInventory';

/**
 * This class represents the entity "MaintainRegulationSubScenarioAction" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationSubScenarioAction<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationSubScenarioActionType<T>
{
  /**
   * Technical entity name for MaintainRegulationSubScenarioAction.
   */
  static _entityName = 'MaintainRegulationSubScenarioAction';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationSubScenarioAction entity
   */
  static _keys = ['ID', 'IsActiveEntity'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
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
   * One-to-one navigation property to the {@link MaintainRegulationSubScenarioAction} entity.
   */
  declare siblingEntity?: MaintainRegulationSubScenarioAction<T> | null;

  constructor(_entityApi: MaintainRegulationSubScenarioActionApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationSubScenarioActionType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  regulationSubScenarioCategory?: DeserializedType<T, 'Edm.String'> | null;
  actionCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationSubScenario?: RegulationSubTypeType<T> | null;
  action?: ActionInventoryType<T> | null;
  siblingEntity?: MaintainRegulationSubScenarioActionType<T> | null;
}
