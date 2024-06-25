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
import type { MaintainRenewableMaterialConfigurationApi } from './MaintainRenewableMaterialConfigurationApi';
import {
  MaintainRegulationType,
  MaintainRegulationTypeType
} from './MaintainRegulationType';
import { ObjectType, ObjectTypeType } from './ObjectType';
import { Rfs2DebitType, Rfs2DebitTypeType } from './Rfs2DebitType';
import { FuelCode, FuelCodeType } from './FuelCode';

/**
 * This class represents the entity "MaintainRenewableMaterialConfiguration" of service "RegulationComplianceMasterService".
 */
export class MaintainRenewableMaterialConfiguration<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRenewableMaterialConfigurationType<T>
{
  /**
   * Technical entity name for MaintainRenewableMaterialConfiguration.
   */
  static _entityName = 'MaintainRenewableMaterialConfiguration';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRenewableMaterialConfiguration entity
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
   * Year.
   * @nullable
   */
  declare year?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Rvo Type Category.
   * Maximum length: 3.
   * @nullable
   */
  declare rvoTypeCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * D Code Category.
   * Maximum length: 3.
   * @nullable
   */
  declare dCodeCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material.
   * @nullable
   */
  declare material?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Obligation Percent.
   * @nullable
   */
  declare obligationPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Rin Multiplier.
   * @nullable
   */
  declare rinMultiplier?: DeserializedType<T, 'Edm.Int32'> | null;
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
   * One-to-one navigation property to the {@link Rfs2DebitType} entity.
   */
  declare rvoType?: Rfs2DebitType<T> | null;
  /**
   * One-to-one navigation property to the {@link FuelCode} entity.
   */
  declare dCode?: FuelCode<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRenewableMaterialConfiguration} entity.
   */
  declare siblingEntity?: MaintainRenewableMaterialConfiguration<T> | null;

  constructor(_entityApi: MaintainRenewableMaterialConfigurationApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRenewableMaterialConfigurationType<
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
  year?: DeserializedType<T, 'Edm.Int32'> | null;
  rvoTypeCategory?: DeserializedType<T, 'Edm.String'> | null;
  dCodeCategory?: DeserializedType<T, 'Edm.String'> | null;
  material?: DeserializedType<T, 'Edm.String'> | null;
  obligationPercent?: DeserializedType<T, 'Edm.Decimal'> | null;
  rinMultiplier?: DeserializedType<T, 'Edm.Int32'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationType?: MaintainRegulationTypeType<T> | null;
  objectType?: ObjectTypeType<T> | null;
  rvoType?: Rfs2DebitTypeType<T> | null;
  dCode?: FuelCodeType<T> | null;
  siblingEntity?: MaintainRenewableMaterialConfigurationType<T> | null;
}
