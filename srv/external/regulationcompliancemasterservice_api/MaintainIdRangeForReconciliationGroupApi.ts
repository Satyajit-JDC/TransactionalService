/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainIdRangeForReconciliationGroup } from './MaintainIdRangeForReconciliationGroup';
import { MaintainIdRangeForReconciliationGroupRequestBuilder } from './MaintainIdRangeForReconciliationGroupRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
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
export class MaintainIdRangeForReconciliationGroupApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
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
  ): MaintainIdRangeForReconciliationGroupApi<DeSerializersT> {
    return new MaintainIdRangeForReconciliationGroupApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT,
      MaintainIdRangeForReconciliationGroupApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      MaintainIdRangeForReconciliationGroupApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = MaintainIdRangeForReconciliationGroup;

  requestBuilder(): MaintainIdRangeForReconciliationGroupRequestBuilder<DeSerializersT> {
    return new MaintainIdRangeForReconciliationGroupRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainIdRangeForReconciliationGroup<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainIdRangeForReconciliationGroup<DeSerializersT>,
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
    typeof MaintainIdRangeForReconciliationGroup,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainIdRangeForReconciliationGroup,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_START: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NUMBER_OF_END: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainIdRangeForReconciliationGroup<DeSerializers>,
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
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT,
      MaintainIdRangeForReconciliationGroupApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainIdRangeForReconciliationGroup<DeSerializers>>;
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
         * Static representation of the {@link regulationTypeRegulationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_TYPE_REGULATION_TYPE: fieldBuilder.buildEdmTypeField(
          'regulationType_regulationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link numberOfStart} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_START: fieldBuilder.buildEdmTypeField(
          'numberOfStart',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link numberOfEnd} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_END: fieldBuilder.buildEdmTypeField(
          'numberOfEnd',
          'Edm.Int32',
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
        ALL_FIELDS: new AllFields('*', MaintainIdRangeForReconciliationGroup)
      };
    }

    return this._schema;
  }
}
