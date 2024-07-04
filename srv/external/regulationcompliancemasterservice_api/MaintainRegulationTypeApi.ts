/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationType } from './MaintainRegulationType';
import { MaintainRegulationTypeRequestBuilder } from './MaintainRegulationTypeRequestBuilder';
import { RegulationCategoryApi } from './RegulationCategoryApi';
import { CountriesApi } from './CountriesApi';
import { RegulationUomApi } from './RegulationUomApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class MaintainRegulationTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaintainRegulationType<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): MaintainRegulationTypeApi<DeSerializersT> {
    return new MaintainRegulationTypeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_CATEGORY: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      RegulationCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link region} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGION: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationUoM} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_UO_M: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      RegulationUomApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RegulationCategoryApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      CountriesApi<DeSerializersT>,
      RegulationUomApi<DeSerializersT>,
      MaintainRegulationTypeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_CATEGORY: new OneToOneLink(
        'regulationCategory',
        this,
        linkedApis[0]
      ),
      REGION: new OneToOneLink('region', this, linkedApis[1]),
      COUNTRY: new OneToOneLink('country', this, linkedApis[2]),
      REGULATION_UO_M: new OneToOneLink('regulationUoM', this, linkedApis[3]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = MaintainRegulationType;

  requestBuilder(): MaintainRegulationTypeRequestBuilder<DeSerializersT> {
    return new MaintainRegulationTypeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaintainRegulationType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRegulationType<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof MaintainRegulationType,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRegulationType,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_AT: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGULATION_CATEGORY_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGION_CODE: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COUNTRY_CODE: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_YEARLY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUEL_UOM: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUEL_ALTERNATE_UOM: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_UO_M_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainRegulationType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_CATEGORY: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      RegulationCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link region} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGION: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link country} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COUNTRY: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      CountriesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationUoM} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_UO_M: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      RegulationUomApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainRegulationType<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link createdAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_AT: fieldBuilder.buildEdmTypeField(
          'createdAt',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modifiedAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_AT: fieldBuilder.buildEdmTypeField(
          'modifiedAt',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link modifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'modifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regulationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_TYPE: fieldBuilder.buildEdmTypeField(
          'regulationType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regulationCategoryCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_CATEGORY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'regulationCategory_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGION_CODE: fieldBuilder.buildEdmTypeField(
          'region_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link countryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COUNTRY_CODE: fieldBuilder.buildEdmTypeField(
          'country_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialYearly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_YEARLY: fieldBuilder.buildEdmTypeField(
          'materialYearly',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fuelUom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_UOM: fieldBuilder.buildEdmTypeField('fuelUom', 'Edm.String', true),
        /**
         * Static representation of the {@link fuelAlternateUom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_ALTERNATE_UOM: fieldBuilder.buildEdmTypeField(
          'fuelAlternateUom',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regulationUoMCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_UO_M_CATEGORY: fieldBuilder.buildEdmTypeField(
          'regulationUoM_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActiveEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE_ENTITY: fieldBuilder.buildEdmTypeField(
          'IsActiveEntity',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link hasActiveEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_ACTIVE_ENTITY: fieldBuilder.buildEdmTypeField(
          'HasActiveEntity',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link hasDraftEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HAS_DRAFT_ENTITY: fieldBuilder.buildEdmTypeField(
          'HasDraftEntity',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaintainRegulationType)
      };
    }

    return this._schema;
  }
}
