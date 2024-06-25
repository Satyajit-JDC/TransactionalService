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
import type { MaintainRegulationMaterialGroupViewApi } from './MaintainRegulationMaterialGroupViewApi';
import {
  MaintainRegulationMaterialGroup,
  MaintainRegulationMaterialGroupType
} from './MaintainRegulationMaterialGroup';

/**
 * This class represents the entity "MaintainRegulationMaterialGroupView" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationMaterialGroupView<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationMaterialGroupViewType<T>
{
  /**
   * Technical entity name for MaintainRegulationMaterialGroupView.
   */
  static _entityName = 'MaintainRegulationMaterialGroupView';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationMaterialGroupView entity
   */
  static _keys: any = [];
  /**
   * Regulation Type.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulation Material Group Id.
   * @nullable
   */
  declare regulationMaterialGroupId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Regulation Material Group Regulation Material Group.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationMaterialGroupRegulationMaterialGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Description.
   * Maximum length: 50.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Category.
   * Maximum length: 3.
   * @nullable
   */
  declare category?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationMaterialGroup} entity.
   */
  declare regulationMaterialGroup?: MaintainRegulationMaterialGroup<T> | null;

  constructor(_entityApi: MaintainRegulationMaterialGroupViewApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationMaterialGroupViewType<
  T extends DeSerializers = DefaultDeSerializers
> {
  regulationType?: DeserializedType<T, 'Edm.String'> | null;
  regulationMaterialGroupId?: DeserializedType<T, 'Edm.Guid'> | null;
  regulationMaterialGroupRegulationMaterialGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  category?: DeserializedType<T, 'Edm.String'> | null;
  regulationMaterialGroup?: MaintainRegulationMaterialGroupType<T> | null;
}
