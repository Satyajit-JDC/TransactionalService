/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainIdRangeForRenewableObjects } from './MaintainIdRangeForRenewableObjects';
import { MaintainIdRangeForRenewableObjectsRequestBuilder } from './MaintainIdRangeForRenewableObjectsRequestBuilder';
import { RegulationSubCategoryApi } from './RegulationSubCategoryApi';
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
export class MaintainIdRangeForRenewableObjectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
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
  ): MaintainIdRangeForRenewableObjectsApi<DeSerializersT> {
    return new MaintainIdRangeForRenewableObjectsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT,
      RegulationSubCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT,
      MaintainIdRangeForRenewableObjectsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RegulationSubCategoryApi<DeSerializersT>,
      MaintainIdRangeForRenewableObjectsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_SUB_SCENARIO: new OneToOneLink(
        'regulationSubScenario',
        this,
        linkedApis[0]
      ),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = MaintainIdRangeForRenewableObjects;

  requestBuilder(): MaintainIdRangeForRenewableObjectsRequestBuilder<DeSerializersT> {
    return new MaintainIdRangeForRenewableObjectsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainIdRangeForRenewableObjects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainIdRangeForRenewableObjects<DeSerializersT>,
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
    typeof MaintainIdRangeForRenewableObjects,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainIdRangeForRenewableObjects,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REGULATION_SUB_SCENARIO_CATEGORY: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NUMBER_OF_START: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    NUMBER_OF_END: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    IN_ACTIVE: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjects<DeSerializers>,
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
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT,
      RegulationSubCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT,
      MaintainIdRangeForRenewableObjectsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainIdRangeForRenewableObjects<DeSerializers>>;
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
         * Static representation of the {@link inActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_ACTIVE: fieldBuilder.buildEdmTypeField(
          'inActive',
          'Edm.Boolean',
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
        ALL_FIELDS: new AllFields('*', MaintainIdRangeForRenewableObjects)
      };
    }

    return this._schema;
  }
}
