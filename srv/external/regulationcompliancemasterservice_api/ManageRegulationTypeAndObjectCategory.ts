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
import type { ManageRegulationTypeAndObjectCategoryApi } from './ManageRegulationTypeAndObjectCategoryApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import { ObjectCategory, ObjectCategoryType } from './ObjectCategory';
import {
  MaintainRegulationMaterialGroup,
  MaintainRegulationMaterialGroupType
} from './MaintainRegulationMaterialGroup';

/**
 * This class represents the entity "ManageRegulationTypeAndObjectCategory" of service "RegulationComplianceMasterService".
 */
export class ManageRegulationTypeAndObjectCategory<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ManageRegulationTypeAndObjectCategoryType<T>
{
  /**
   * Technical entity name for ManageRegulationTypeAndObjectCategory.
   */
  static _entityName = 'ManageRegulationTypeAndObjectCategory';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the ManageRegulationTypeAndObjectCategory entity
   */
  static _keys = ['ID', 'IsActiveEntity'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
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
   * Object Category Category.
   * Maximum length: 3.
   * @nullable
   */
  declare objectCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link ObjectCategory} entity.
   */
  declare objectCategory?: ObjectCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationMaterialGroup} entity.
   */
  declare regulationMaterialGroup?: MaintainRegulationMaterialGroup<T> | null;
  /**
   * One-to-one navigation property to the {@link ManageRegulationTypeAndObjectCategory} entity.
   */
  declare siblingEntity?: ManageRegulationTypeAndObjectCategory<T> | null;

  constructor(_entityApi: ManageRegulationTypeAndObjectCategoryApi<T>) {
    super(_entityApi);
  }
}

export interface ManageRegulationTypeAndObjectCategoryType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  objectCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  regulationMaterialGroupRegulationMaterialGroup?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  objectCategory?: ObjectCategoryType<T> | null;
  regulationMaterialGroup?: MaintainRegulationMaterialGroupType<T> | null;
  siblingEntity?: ManageRegulationTypeAndObjectCategoryType<T> | null;
}
