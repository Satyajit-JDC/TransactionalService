/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationSubScenarioAction } from './MaintainRegulationSubScenarioAction';
import { MaintainRegulationSubScenarioActionRequestBuilder } from './MaintainRegulationSubScenarioActionRequestBuilder';
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
export class MaintainRegulationSubScenarioActionApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
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
  ): MaintainRegulationSubScenarioActionApi<DeSerializersT> {
    return new MaintainRegulationSubScenarioActionApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link action} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTION: OneToOneLink<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT,
      ActionInventoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationSubScenarioActionApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RegulationSubTypeApi<DeSerializersT>,
      ActionInventoryApi<DeSerializersT>,
      MaintainRegulationSubScenarioActionApi<DeSerializersT>
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

  entityConstructor = MaintainRegulationSubScenarioAction;

  requestBuilder(): MaintainRegulationSubScenarioActionRequestBuilder<DeSerializersT> {
    return new MaintainRegulationSubScenarioActionRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainRegulationSubScenarioAction<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRegulationSubScenarioAction<DeSerializersT>,
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
    typeof MaintainRegulationSubScenarioAction,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRegulationSubScenarioAction,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainRegulationSubScenarioAction<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REGULATION_SUB_SCENARIO_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioAction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioAction<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioAction<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioAction<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainRegulationSubScenarioAction<DeSerializers>,
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
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link action} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACTION: OneToOneLink<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT,
      ActionInventoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationSubScenarioActionApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainRegulationSubScenarioAction<DeSerializers>>;
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
        ALL_FIELDS: new AllFields('*', MaintainRegulationSubScenarioAction)
      };
    }

    return this._schema;
  }
}
