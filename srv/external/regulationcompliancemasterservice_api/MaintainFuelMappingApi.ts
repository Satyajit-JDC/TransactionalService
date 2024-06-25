/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainFuelMapping } from './MaintainFuelMapping';
import { MaintainFuelMappingRequestBuilder } from './MaintainFuelMappingRequestBuilder';
import { FuelCategoryApi } from './FuelCategoryApi';
import { FuelSubCategoryApi } from './FuelSubCategoryApi';
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
export class MaintainFuelMappingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
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
  ): MaintainFuelMappingApi<DeSerializersT> {
    return new MaintainFuelMappingApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link fuelType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUEL_TYPE: OneToOneLink<
      MaintainFuelMapping<DeSerializersT>,
      DeSerializersT,
      FuelCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fuelSubType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUEL_SUB_TYPE: OneToOneLink<
      MaintainFuelMapping<DeSerializersT>,
      DeSerializersT,
      FuelSubCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainFuelMapping<DeSerializersT>,
      DeSerializersT,
      MaintainFuelMappingApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      FuelCategoryApi<DeSerializersT>,
      FuelSubCategoryApi<DeSerializersT>,
      MaintainFuelMappingApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      FUEL_TYPE: new OneToOneLink('fuelType', this, linkedApis[0]),
      FUEL_SUB_TYPE: new OneToOneLink('fuelSubType', this, linkedApis[1]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = MaintainFuelMapping;

  requestBuilder(): MaintainFuelMappingRequestBuilder<DeSerializersT> {
    return new MaintainFuelMappingRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaintainFuelMapping<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainFuelMapping<DeSerializersT>,
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
    typeof MaintainFuelMapping,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainFuelMapping,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUEL_TYPE_CATEGORY: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FUEL_SUB_TYPE_CATEGORY: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainFuelMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fuelType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUEL_TYPE: OneToOneLink<
      MaintainFuelMapping<DeSerializersT>,
      DeSerializersT,
      FuelCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link fuelSubType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FUEL_SUB_TYPE: OneToOneLink<
      MaintainFuelMapping<DeSerializersT>,
      DeSerializersT,
      FuelSubCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainFuelMapping<DeSerializersT>,
      DeSerializersT,
      MaintainFuelMappingApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainFuelMapping<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Guid', false),
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
         * Static representation of the {@link fuelTypeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_TYPE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'fuelType_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fuelSubTypeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_SUB_TYPE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'fuelSubType_category',
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
        ALL_FIELDS: new AllFields('*', MaintainFuelMapping)
      };
    }

    return this._schema;
  }
}
