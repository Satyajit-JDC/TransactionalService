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
import type { ManageRegulationTypeAndActiveApi } from './ManageRegulationTypeAndActiveApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import {
  MaintainRegulationGroup,
  MaintainRegulationGroupType
} from './MaintainRegulationGroup';

/**
 * This class represents the entity "ManageRegulationTypeAndActive" of service "RegulationComplianceMasterService".
 */
export class ManageRegulationTypeAndActive<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ManageRegulationTypeAndActiveType<T>
{
  /**
   * Technical entity name for ManageRegulationTypeAndActive.
   */
  static _entityName = 'ManageRegulationTypeAndActive';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the ManageRegulationTypeAndActive entity
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
   * Active.
   * @nullable
   */
  declare active?: DeserializedType<T, 'Edm.Boolean'> | null;
  /**
   * Regulation Group Id.
   * @nullable
   */
  declare regulationGroupId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Regulation Group Regulation Group.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationGroupRegulationGroup?: DeserializedType<
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
   * One-to-one navigation property to the {@link MaintainRegulationGroup} entity.
   */
  declare regulationGroup?: MaintainRegulationGroup<T> | null;
  /**
   * One-to-one navigation property to the {@link ManageRegulationTypeAndActive} entity.
   */
  declare siblingEntity?: ManageRegulationTypeAndActive<T> | null;

  constructor(_entityApi: ManageRegulationTypeAndActiveApi<T>) {
    super(_entityApi);
  }
}

export interface ManageRegulationTypeAndActiveType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  regulationTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  active?: DeserializedType<T, 'Edm.Boolean'> | null;
  regulationGroupId?: DeserializedType<T, 'Edm.Guid'> | null;
  regulationGroupRegulationGroup?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  regulationGroup?: MaintainRegulationGroupType<T> | null;
  siblingEntity?: ManageRegulationTypeAndActiveType<T> | null;
}
