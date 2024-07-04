/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationTransactionTypeWithImpact } from './MaintainRegulationTransactionTypeWithImpact';
import { MaintainRegulationTransactionTypeWithImpactRequestBuilder } from './MaintainRegulationTransactionTypeWithImpactRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { MaintainTransactionTypeApi } from './MaintainTransactionTypeApi';
import { TransactionCategoryApi } from './TransactionCategoryApi';
import { ImpactApi } from './ImpactApi';
import { PassRetainIndicatorApi } from './PassRetainIndicatorApi';
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
export class MaintainRegulationTransactionTypeWithImpactApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
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
  ): MaintainRegulationTransactionTypeWithImpactApi<DeSerializersT> {
    return new MaintainRegulationTransactionTypeWithImpactApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_TYPE: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      MaintainTransactionTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CATEGORY: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      TransactionCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link passRetainIndicator} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PASS_RETAIN_INDICATOR: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      PassRetainIndicatorApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTransactionTypeWithImpactApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      MaintainTransactionTypeApi<DeSerializersT>,
      TransactionCategoryApi<DeSerializersT>,
      ImpactApi<DeSerializersT>,
      PassRetainIndicatorApi<DeSerializersT>,
      MaintainRegulationTransactionTypeWithImpactApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      TRANSACTION_TYPE: new OneToOneLink(
        'transactionType',
        this,
        linkedApis[1]
      ),
      TRANSACTION_CATEGORY: new OneToOneLink(
        'transactionCategory',
        this,
        linkedApis[2]
      ),
      IMPACT: new OneToOneLink('impact', this, linkedApis[3]),
      PASS_RETAIN_INDICATOR: new OneToOneLink(
        'passRetainIndicator',
        this,
        linkedApis[4]
      ),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[5])
    };
    return this;
  }

  entityConstructor = MaintainRegulationTransactionTypeWithImpact;

  requestBuilder(): MaintainRegulationTransactionTypeWithImpactRequestBuilder<DeSerializersT> {
    return new MaintainRegulationTransactionTypeWithImpactRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
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
    typeof MaintainRegulationTransactionTypeWithImpact,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRegulationTransactionTypeWithImpact,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_ID: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_TYPE_TRANSACTION_TYPE: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CATEGORY_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPACT_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASS_RETAIN_INDICATOR_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>,
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
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_TYPE: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      MaintainTransactionTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CATEGORY: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      TransactionCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link passRetainIndicator} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PASS_RETAIN_INDICATOR: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      PassRetainIndicatorApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTransactionTypeWithImpactApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MaintainRegulationTransactionTypeWithImpact<DeSerializers>
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
         * Static representation of the {@link transactionTypeTransactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE_TRANSACTION_TYPE: fieldBuilder.buildEdmTypeField(
          'transactionType_transactionType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transactionCategoryCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'transactionCategory_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link impactCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMPACT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'impact_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link passRetainIndicatorCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASS_RETAIN_INDICATOR_CATEGORY: fieldBuilder.buildEdmTypeField(
          'passRetainIndicator_category',
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
        ALL_FIELDS: new AllFields(
          '*',
          MaintainRegulationTransactionTypeWithImpact
        )
      };
    }

    return this._schema;
  }
}
