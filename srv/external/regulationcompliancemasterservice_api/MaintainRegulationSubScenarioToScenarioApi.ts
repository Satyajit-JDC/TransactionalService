/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationSubScenarioToScenario } from './MaintainRegulationSubScenarioToScenario';
import { MaintainRegulationSubScenarioToScenarioRequestBuilder } from './MaintainRegulationSubScenarioToScenarioRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { TransactionSourceScenarioApi } from './TransactionSourceScenarioApi';
import { ObjectCategoryApi } from './ObjectCategoryApi';
import { RegulationSubTypeApi } from './RegulationSubTypeApi';
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
export class MaintainRegulationSubScenarioToScenarioApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
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
  ): MaintainRegulationSubScenarioToScenarioApi<DeSerializersT> {
    return new MaintainRegulationSubScenarioToScenarioApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionSourceScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_SOURCE_SCENARIO: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      TransactionSourceScenarioApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_CATEGORY: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      ObjectCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationSubScenarioToScenarioApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      TransactionSourceScenarioApi<DeSerializersT>,
      ObjectCategoryApi<DeSerializersT>,
      RegulationSubTypeApi<DeSerializersT>,
      MaintainRegulationSubScenarioToScenarioApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      TRANSACTION_SOURCE_SCENARIO: new OneToOneLink(
        'transactionSourceScenario',
        this,
        linkedApis[1]
      ),
      OBJECT_CATEGORY: new OneToOneLink('objectCategory', this, linkedApis[2]),
      REGULATION_SUB_SCENARIO: new OneToOneLink(
        'regulationSubScenario',
        this,
        linkedApis[3]
      ),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = MaintainRegulationSubScenarioToScenario;

  requestBuilder(): MaintainRegulationSubScenarioToScenarioRequestBuilder<DeSerializersT> {
    return new MaintainRegulationSubScenarioToScenarioRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainRegulationSubScenarioToScenario<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRegulationSubScenarioToScenario<DeSerializersT>,
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
    typeof MaintainRegulationSubScenarioToScenario,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRegulationSubScenarioToScenario,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_AT: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_SOURCE_SCENARIO_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_CATEGORY_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_SUB_SCENARIO_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioToScenario<DeSerializers>,
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
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionSourceScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_SOURCE_SCENARIO: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      TransactionSourceScenarioApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_CATEGORY: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      ObjectCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationSubScenarioToScenarioApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MaintainRegulationSubScenarioToScenario<DeSerializers>
    >;
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
         * Static representation of the {@link regulationTypeRegulationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_TYPE_REGULATION_TYPE: fieldBuilder.buildEdmTypeField(
          'regulationType_regulationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionSourceScenarioCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_SOURCE_SCENARIO_CATEGORY: fieldBuilder.buildEdmTypeField(
          'transactionSourceScenario_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link objectCategoryCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_CATEGORY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'objectCategory_category',
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
          false
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
        ALL_FIELDS: new AllFields('*', MaintainRegulationSubScenarioToScenario)
      };
    }

    return this._schema;
  }
}
