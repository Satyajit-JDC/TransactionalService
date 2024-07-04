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
import type { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import {
  RegulationCategory,
  RegulationCategoryType
} from './RegulationCategory';
import { Countries, CountriesType } from './Countries';
import { RegulationUom, RegulationUomType } from './RegulationUom';

/**
 * This class represents the entity "MaintainRegulationType" of service "RegulationComplianceMasterService".
 */
export class MaintainRegulationType<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MaintainRegulationTypeType<T>
{
  /**
   * Technical entity name for MaintainRegulationType.
   */
  static _entityName = 'MaintainRegulationType';
  /**
   * Default url path for the according service.
   */
  static _defaultBasePath = '/service/RegulationComplianceMasterService';
  /**
   * All key fields of the MaintainRegulationType entity
   */
  static _keys = ['regulationType', 'IsActiveEntity'];
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
   * Regulation Type.
   * Maximum length: 5.
   */
  declare regulationType: DeserializedType<T, 'Edm.String'>;
  /**
   * Regulation Category Category.
   * Maximum length: 5.
   * @nullable
   */
  declare regulationCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Region Code.
   * Maximum length: 3.
   * @nullable
   */
  declare regionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Code.
   * Maximum length: 3.
   * @nullable
   */
  declare countryCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 50.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Material Yearly.
   * Maximum length: 2.
   * @nullable
   */
  declare materialYearly?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fuel Uom.
   * Maximum length: 4.
   * @nullable
   */
  declare fuelUom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fuel Alternate Uom.
   * Maximum length: 4.
   * @nullable
   */
  declare fuelAlternateUom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Regulation Uo M Category.
   * Maximum length: 3.
   * @nullable
   */
  declare regulationUoMCategory?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link RegulationCategory} entity.
   */
  declare regulationCategory?: RegulationCategory<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  declare region?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link Countries} entity.
   */
  declare country?: Countries<T> | null;
  /**
   * One-to-one navigation property to the {@link RegulationUom} entity.
   */
  declare regulationUoM?: RegulationUom<T> | null;
  /**
   * One-to-one navigation property to the {@link MaintainRegulationType} entity.
   */
  declare siblingEntity?: MaintainRegulationType<T> | null;

  constructor(_entityApi: MaintainRegulationTypeApi<T>) {
    super(_entityApi);
  }
}

export interface MaintainRegulationTypeType<
  T extends DeSerializers = DefaultDeSerializers
> {
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  regulationType: DeserializedType<T, 'Edm.String'>;
  regulationCategoryCategory?: DeserializedType<T, 'Edm.String'> | null;
  regionCode?: DeserializedType<T, 'Edm.String'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  materialYearly?: DeserializedType<T, 'Edm.String'> | null;
  fuelUom?: DeserializedType<T, 'Edm.String'> | null;
  fuelAlternateUom?: DeserializedType<T, 'Edm.String'> | null;
  regulationUoMCategory?: DeserializedType<T, 'Edm.String'> | null;
  isActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasActiveEntity: DeserializedType<T, 'Edm.Boolean'>;
  hasDraftEntity: DeserializedType<T, 'Edm.Boolean'>;
  regulationCategory?: RegulationCategoryType<T> | null;
  region?: CountriesType<T> | null;
  country?: CountriesType<T> | null;
  regulationUoM?: RegulationUomType<T> | null;
  siblingEntity?: MaintainRegulationTypeType<T> | null;
}
