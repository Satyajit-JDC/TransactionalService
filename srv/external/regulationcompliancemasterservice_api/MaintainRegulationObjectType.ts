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
import type { MaintainRegulationObjectTypeApi } from './MaintainRegulationObjectTypeApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import { ObjectType, ObjectTypeType } from './ObjectType';
import { ObjectCategory, ObjectCategoryType } from './ObjectCategory';

/**
 * This class represents the entity "MaintainRegulationObjectType" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationObjectType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationObjectTypeType<T>
{
  /**
   * Technical entity name for MaintainRegulationObjectType.
   */
  static _entityName = 'MaintainRegulationObjectType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationObjectType entity
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
   * Object Type Code.
   * Maximum length: 4.
   * @nullable
   */
  declare objectTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Object Category Category.
   * Maximum length: 3.
   * @nullable
   */
  declare objectCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link ObjectType} entity.
   */
  declare objectType?: ObjectType<T> | null;
  /**
   * One-to-one navigation property to the {@link ObjectCategory} entity.
   */
  declare objectCategory?: ObjectCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationObjectType} entity.
   */
  declare siblingEntity?: MaintainRegulationObjectType<T> | null;

  constructor(_entityApi: MaintainRegulationObjectTypeApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationObjectTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  objectTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  objectCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  objectType?: ObjectTypeType<T> | null;
  objectCategory?: ObjectCategoryType<T> | null;
  siblingEntity?: MaintainRegulationObjectTypeType<T> | null;
}
