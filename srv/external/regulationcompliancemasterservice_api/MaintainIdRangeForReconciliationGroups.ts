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
import type { MaintainIdRangeForReconciliationGroupsApi } from './MaintainIdRangeForReconciliationGroupsApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';

/**
 * This class represents the entity "MaintainIdRangeForReconciliationGroups" of service "RegulationComplianceMasterService".
 */
export class MaintainIdRangeForReconciliationGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainIdRangeForReconciliationGroupsType<T>
{
  /**
   * Technical entity name for MaintainIdRangeForReconciliationGroups.
   */
  static _entityName = 'MaintainIdRangeForReconciliationGroups';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainIdRangeForReconciliationGroups entity
   */
  static _keys = ['ID', 'IsActiveEntity'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Regulation Type Id.
   * @nullable
   */
  declare regulationTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
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
   * One-to-one navigation property to the {@link MaintainIdRangeForReconciliationGroups} entity.
   */
  declare siblingEntity?: MaintainIdRangeForReconciliationGroups<T> | null;

  constructor(_entityApi: MaintainIdRangeForReconciliationGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainIdRangeForReconciliationGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  regulationTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  numberOfStart?: DeserializedType<T, 'Edm.Int32'> | null;
  numberOfEnd?: DeserializedType<T, 'Edm.Int32'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  siblingEntity?: MaintainIdRangeForReconciliationGroupsType<T> | null;
}
