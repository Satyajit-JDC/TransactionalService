/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainIdRangeForRenewableObjectSequence } from './MaintainIdRangeForRenewableObjectSequence';
import { MaintainIdRangeForRenewableObjectSequenceRequestBuilder } from './MaintainIdRangeForRenewableObjectSequenceRequestBuilder';
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
export class MaintainIdRangeForRenewableObjectSequenceApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
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
  ): MaintainIdRangeForRenewableObjectSequenceApi<DeSerializersT> {
    return new MaintainIdRangeForRenewableObjectSequenceApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RegulationSubTypeApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_SUB_SCENARIO: new OneToOneLink(
        'regulationSubScenario',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = MaintainIdRangeForRenewableObjectSequence;

  requestBuilder(): MaintainIdRangeForRenewableObjectSequenceRequestBuilder<DeSerializersT> {
    return new MaintainIdRangeForRenewableObjectSequenceRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
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
    typeof MaintainIdRangeForRenewableObjectSequence,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainIdRangeForRenewableObjectSequence,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_SUB_SCENARIO_CATEGORY: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_ACTIVE: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    CURRENT_SEQENCE: OrderableEdmTypeField<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationSubScenario} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_SUB_SCENARIO: OneToOneLink<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT,
      RegulationSubTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MaintainIdRangeForRenewableObjectSequence<DeSerializers>
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
         * Static representation of the {@link regulationSubScenarioCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_SUB_SCENARIO_CATEGORY: fieldBuilder.buildEdmTypeField(
          'regulationSubScenario_category',
          'Edm.String',
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
         * Static representation of the {@link currentSeqence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_SEQENCE: fieldBuilder.buildEdmTypeField(
          'currentSeqence',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          MaintainIdRangeForRenewableObjectSequence
        )
      };
    }

    return this._schema;
  }
}
