/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainActionSubScenarioMapping } from './MaintainActionSubScenarioMapping';
import { MaintainActionSubScenarioMappingRequestBuilder } from './MaintainActionSubScenarioMappingRequestBuilder';
import { RegulationSubTypeApi } from './RegulationSubTypeApi';
import { ActionInventoryApi } from './ActionInventoryApi';
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
export class MaintainActionSubScenarioMappingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MaintainActionSubScenarioMapping<DeSerializersT>, DeSerializersT>
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
  ): MaintainActionSubScenarioMappingApi<DeSerializersT> {
    return new MaintainActionSubScenarioMappingApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link action} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTION: OneToOneLink<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT,
      ActionInventoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT,
      MaintainActionSubScenarioMappingApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RegulationSubTypeApi<DeSerializersT>,
      ActionInventoryApi<DeSerializersT>,
      MaintainActionSubScenarioMappingApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_SUB_SCENARIO: new OneToOneLink(
        'regulationSubScenario',
        this,
        linkedApis[0]
      ),
      ACTION: new OneToOneLink('action', this, linkedApis[1]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = MaintainActionSubScenarioMapping;

  requestBuilder(): MaintainActionSubScenarioMappingRequestBuilder<DeSerializersT> {
    return new MaintainActionSubScenarioMappingRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainActionSubScenarioMapping<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainActionSubScenarioMapping<DeSerializersT>,
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
    typeof MaintainActionSubScenarioMapping,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainActionSubScenarioMapping,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_SUB_SCENARIO_CATEGORY: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_CATEGORY: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainActionSubScenarioMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link action} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTION: OneToOneLink<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT,
      ActionInventoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT,
      MaintainActionSubScenarioMappingApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainActionSubScenarioMapping<DeSerializers>>;
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
         * Static representation of the {@link regulationSubScenarioCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_SUB_SCENARIO_CATEGORY: fieldBuilder.buildEdmTypeField(
          'regulationSubScenario_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actionCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_CATEGORY: fieldBuilder.buildEdmTypeField(
          'action_category',
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
        ALL_FIELDS: new AllFields('*', MaintainActionSubScenarioMapping)
      };
    }

    return this._schema;
  }
}
