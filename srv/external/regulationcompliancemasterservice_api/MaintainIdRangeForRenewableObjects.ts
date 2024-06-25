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
import type { MaintainIdRangeForRenewableObjectsApi } from './MaintainIdRangeForRenewableObjectsApi';
import {
  RegulationSubCategory,
  RegulationSubCategoryType
} from './RegulationSubCategory';

/**
 * This class represents the entity "MaintainIdRangeForRenewableObjects" of service "RegulationComplianceMasterService".
 */
export class MaintainIdRangeForRenewableObjects<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainIdRangeForRenewableObjectsType<T>
{
  /**
   * Technical entity name for MaintainIdRangeForRenewableObjects.
   */
  static _entityName = 'MaintainIdRangeForRenewableObjects';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainIdRangeForRenewableObjects entity
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
   * Number Of Start.
   * @nullable
   */
  declare numberOfStart?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Number Of End.
   * @nullable
   */
  declare numberOfEnd?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * In Active.
   * @nullable
   */
  declare inActive?: DeserializedType<T, 'Edm.Boolean'> | null;
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
   * One-to-one navigation property to the {@link RegulationSubCategory} entity.
   */
  declare regulationSubScenario?: RegulationSubCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainIdRangeForRenewableObjects} entity.
   */
  declare siblingEntity?: MaintainIdRangeForRenewableObjects<T> | null;

  constructor(_entityApi: MaintainIdRangeForRenewableObjectsApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainIdRangeForRenewableObjectsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  regulationSubScenarioCategory?: DeserializedType<T, 'Edm.String'> | null;
  numberOfStart?: DeserializedType<T, 'Edm.Int32'> | null;
  numberOfEnd?: DeserializedType<T, 'Edm.Int32'> | null;
  inActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationSubScenario?: RegulationSubCategoryType<T> | null;
  siblingEntity?: MaintainIdRangeForRenewableObjectsType<T> | null;
}
