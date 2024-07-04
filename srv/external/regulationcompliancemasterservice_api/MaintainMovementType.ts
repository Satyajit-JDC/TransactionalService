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
import type { MaintainMovementTypeApi } from './MaintainMovementTypeApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import { ObjectType, ObjectTypeType } from './ObjectType';
import { Impact, ImpactType } from './Impact';

/**
 * This class represents the entity "MaintainMovementType" of service "RegulationComplianceMasterService".
 */
export class MaintainMovementType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainMovementTypeType<T>
{
  /**
   * Technical entity name for MaintainMovementType.
   */
  static _entityName = 'MaintainMovementType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainMovementType entity
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
   * Movement Type.
   * Maximum length: 4.
   * @nullable
   */
  declare movementType?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sub Object Scenario.
   * @nullable
   */
  declare subObjectScenario?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Impact Category.
   * Maximum length: 2.
   * @nullable
   */
  declare impactCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Scenario.
   * @nullable
   */
  declare sourceScenario?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Negative Impact.
   * @nullable
   */
  declare negativeImpact?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * With Reference.
   * @nullable
   */
  declare withReference?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link Impact} entity.
   */
  declare impact?: Impact<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainMovementType} entity.
   */
  declare siblingEntity?: MaintainMovementType<T> | null;

  constructor(_entityApi: MaintainMovementTypeApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainMovementTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Guid'>;
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  movementType?: DeserializedType<T, 'Edm.String'> | null;
  regulationTypeRegulationType?: DeserializedType<T, 'Edm.String'> | null;
  objectTypeCode?: DeserializedType<T, 'Edm.String'> | null;
  subObjectScenario?: DeserializedType<T, 'Edm.String'> | null;
  impactCategory?: DeserializedType<T, 'Edm.String'> | null;
  sourceScenario?: DeserializedType<T, 'Edm.String'> | null;
  negativeImpact?: DeserializedType<T, 'Edm.String'> | null;
  withReference?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  objectType?: ObjectTypeType<T> | null;
  impact?: ImpactType<T> | null;
  siblingEntity?: MaintainMovementTypeType<T> | null;
}
