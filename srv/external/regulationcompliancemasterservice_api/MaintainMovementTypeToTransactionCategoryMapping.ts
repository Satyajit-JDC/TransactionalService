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
import type { MaintainMovementTypeToTransactionCategoryMappingApi } from './MaintainMovementTypeToTransactionCategoryMappingApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import { ObjectType, ObjectTypeType } from './ObjectType';
import {
  MaintainMovementType,
  MaintainMovementTypeType
} from './MaintainMovementType';
import { Mode, ModeType } from './Mode';
import {
  TransactionCategory,
  TransactionCategoryType
} from './TransactionCategory';
import { Impact, ImpactType } from './Impact';

/**
 * This class represents the entity "MaintainMovementTypeToTransactionCategoryMapping" of service "RegulationComplianceMasterService".
 */
export class MaintainMovementTypeToTransactionCategoryMapping<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainMovementTypeToTransactionCategoryMappingType<T>
{
  /**
   * Technical entity name for MaintainMovementTypeToTransactionCategoryMapping.
   */
  static _entityName = 'MaintainMovementTypeToTransactionCategoryMapping';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainMovementTypeToTransactionCategoryMapping entity
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
   * Movement Type Id.
   * @nullable
   */
  declare movementTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
  /**
   * Origin Relevant.
   * @nullable
   */
  declare originRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Origin Material Relevant.
   * @nullable
   */
  declare originMaterialRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Relevant.
   * @nullable
   */
  declare destinationRelevant?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Destination Material Relevant.
   * @nullable
   */
  declare destinationMaterialRelevant?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Mode Code.
   * Maximum length: 1.
   * @nullable
   */
  declare modeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transaction Category Category.
   * Maximum length: 4.
   * @nullable
   */
  declare transactionCategoryCategory?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Impact Category.
   * Maximum length: 2.
   * @nullable
   */
  declare impactCategory?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link MaintainMovementType} entity.
   */
  declare movementType?: MaintainMovementType<T> | null;
  /**
   * One-to-one navigation property to the {@link Mode} entity.
   */
  declare mode?: Mode<T> | null;
  /**
   * One-to-one navigation property to the {@link TransactionCategory} entity.
   */
  declare transactionCategory?: TransactionCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link Impact} entity.
   */
  declare impact?: Impact<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainMovementTypeToTransactionCategoryMapping} entity.
   */
  declare siblingEntity?: MaintainMovementTypeToTransactionCategoryMapping<T> | null;

  constructor(
    _entityApi: MaintainMovementTypeToTransactionCategoryMappingApi<T>
  ) {
    super(_entityApi);
  }
}

export interface MaintainMovementTypeToTransactionCategoryMappingType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  objectTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  movementTypeId?: DeserializedType<T, 'Edm.Guid'> | null;
  originRelevant?: DeserializedType<T, 'Edm.String'> | null;
  originMaterialRelevant?: DeserializedType<T, 'Edm.String'> | null;
  destinationRelevant?: DeserializedType<T, 'Edm.String'> | null;
  destinationMaterialRelevant?: DeserializedType<T, 'Edm.String'> | null;
  modeCode?: DeserializedType<T, 'Edm.String'> | null;
  transactionCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  impactCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  objectType?: ObjectTypeType<T> | null;
  movementType?: MaintainMovementTypeType<T> | null;
  mode?: ModeType<T> | null;
  transactionCategory?: TransactionCategoryType<T> | null;
  impact?: ImpactType<T> | null;
  siblingEntity?: MaintainMovementTypeToTransactionCategoryMappingType<T> | null;
}
