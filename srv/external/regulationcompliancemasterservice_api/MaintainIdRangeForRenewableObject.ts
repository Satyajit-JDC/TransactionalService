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
import type { MaintainIdRangeForRenewableObjectApi } from './MaintainIdRangeForRenewableObjectApi';
import { RegulationSubType, RegulationSubTypeType } from './RegulationSubType';

/**
 * This class represents the entity "MaintainIdRangeForRenewableObject" of service "RegulationComplianceMasterService".
 */
export class MaintainIdRangeForRenewableObject<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainIdRangeForRenewableObjectType<T>
{
  /**
   * Technical entity name for MaintainIdRangeForRenewableObject.
   */
  static _entityName = 'MaintainIdRangeForRenewableObject';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainIdRangeForRenewableObject entity
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
   * One-to-one navigation property to the {@link RegulationSubType} entity.
   */
  declare regulationSubScenario?: RegulationSubType<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainIdRangeForRenewableObject} entity.
   */
  declare siblingEntity?: MaintainIdRangeForRenewableObject<T> | null;

  constructor(_entityApi: MaintainIdRangeForRenewableObjectApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainIdRangeForRenewableObjectType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationSubScenarioCategory?: DeserializedType<T, 'Edm.String'> | null;
  numberOfStart?: DeserializedType<T, 'Edm.Int32'> | null;
  numberOfEnd?: DeserializedType<T, 'Edm.Int32'> | null;
  inActive?: DeserializedType<T, 'Edm.Boolean'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationSubScenario?: RegulationSubTypeType<T> | null;
  siblingEntity?: MaintainIdRangeForRenewableObjectType<T> | null;
}
