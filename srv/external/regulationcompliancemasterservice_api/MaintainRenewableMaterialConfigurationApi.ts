/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRenewableMaterialConfiguration } from './MaintainRenewableMaterialConfiguration';
import { MaintainRenewableMaterialConfigurationRequestBuilder } from './MaintainRenewableMaterialConfigurationRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { ObjectTypeApi } from './ObjectTypeApi';
import { Rfs2DebitTypeApi } from './Rfs2DebitTypeApi';
import { FuelCodeApi } from './FuelCodeApi';
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
export class MaintainRenewableMaterialConfigurationApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT
    >
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
  ): MaintainRenewableMaterialConfigurationApi<DeSerializersT> {
    return new MaintainRenewableMaterialConfigurationApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rvoType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RVO_TYPE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      Rfs2DebitTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    D_CODE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      FuelCodeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      MaintainRenewableMaterialConfigurationApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      ObjectTypeApi<DeSerializersT>,
      Rfs2DebitTypeApi<DeSerializersT>,
      FuelCodeApi<DeSerializersT>,
      MaintainRenewableMaterialConfigurationApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      OBJECT_TYPE: new OneToOneLink('objectType', this, linkedApis[1]),
      RVO_TYPE: new OneToOneLink('rvoType', this, linkedApis[2]),
      D_CODE: new OneToOneLink('dCode', this, linkedApis[3]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = MaintainRenewableMaterialConfiguration;

  requestBuilder(): MaintainRenewableMaterialConfigurationRequestBuilder<DeSerializersT> {
    return new MaintainRenewableMaterialConfigurationRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainRenewableMaterialConfiguration<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRenewableMaterialConfiguration<DeSerializersT>,
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
    typeof MaintainRenewableMaterialConfiguration,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRenewableMaterialConfiguration,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_ID: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_TYPE_CODE: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    YEAR: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    RVO_TYPE_CATEGORY: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    D_CODE_CATEGORY: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBLIGATION_PERCENT: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    RIN_MULTIPLIER: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainRenewableMaterialConfiguration<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link rvoType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RVO_TYPE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      Rfs2DebitTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dCode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    D_CODE: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      FuelCodeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT,
      MaintainRenewableMaterialConfigurationApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MaintainRenewableMaterialConfiguration<DeSerializers>
    >;
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
         * Static representation of the {@link regulationTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'regulationType_ID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link regulationTypeRegulationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_TYPE_REGULATION_TYPE: fieldBuilder.buildEdmTypeField(
          'regulationType_regulationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link objectTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'objectType_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link year} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEAR: fieldBuilder.buildEdmTypeField('year', 'Edm.Int32', true),
        /**
         * Static representation of the {@link rvoTypeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RVO_TYPE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'rvoType_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dCodeCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        D_CODE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'dCode_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link material} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL: fieldBuilder.buildEdmTypeField(
          'material',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link obligationPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBLIGATION_PERCENT: fieldBuilder.buildEdmTypeField(
          'obligationPercent',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link rinMultiplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RIN_MULTIPLIER: fieldBuilder.buildEdmTypeField(
          'rinMultiplier',
          'Edm.Int32',
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
        ALL_FIELDS: new AllFields('*', MaintainRenewableMaterialConfiguration)
      };
    }

    return this._schema;
  }
}
