/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainMovementTypeToTransactionCategoryMapping } from './MaintainMovementTypeToTransactionCategoryMapping';
import { MaintainMovementTypeToTransactionCategoryMappingRequestBuilder } from './MaintainMovementTypeToTransactionCategoryMappingRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { ObjectTypeApi } from './ObjectTypeApi';
import { MaintainMovementTypeApi } from './MaintainMovementTypeApi';
import { ModeApi } from './ModeApi';
import { TransactionCategoryApi } from './TransactionCategoryApi';
import { ImpactApi } from './ImpactApi';
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
export class MaintainMovementTypeToTransactionCategoryMappingApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
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
  ): MaintainMovementTypeToTransactionCategoryMappingApi<DeSerializersT> {
    return new MaintainMovementTypeToTransactionCategoryMappingApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link movementType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MOVEMENT_TYPE: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MODE: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      ModeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CATEGORY: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      TransactionCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeToTransactionCategoryMappingApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      ObjectTypeApi<DeSerializersT>,
      MaintainMovementTypeApi<DeSerializersT>,
      ModeApi<DeSerializersT>,
      TransactionCategoryApi<DeSerializersT>,
      ImpactApi<DeSerializersT>,
      MaintainMovementTypeToTransactionCategoryMappingApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      OBJECT_TYPE: new OneToOneLink('objectType', this, linkedApis[1]),
      MOVEMENT_TYPE: new OneToOneLink('movementType', this, linkedApis[2]),
      MODE: new OneToOneLink('mode', this, linkedApis[3]),
      TRANSACTION_CATEGORY: new OneToOneLink(
        'transactionCategory',
        this,
        linkedApis[4]
      ),
      IMPACT: new OneToOneLink('impact', this, linkedApis[5]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[6])
    };
    return this;
  }

  entityConstructor = MaintainMovementTypeToTransactionCategoryMapping;

  requestBuilder(): MaintainMovementTypeToTransactionCategoryMappingRequestBuilder<DeSerializersT> {
    return new MaintainMovementTypeToTransactionCategoryMappingRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
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
    typeof MaintainMovementTypeToTransactionCategoryMapping,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainMovementTypeToTransactionCategoryMapping,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_TYPE_CODE: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOVEMENT_TYPE_ID: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    ORIGIN_RELEVANT: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN_MATERIAL_RELEVANT: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_RELEVANT: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESTINATION_MATERIAL_RELEVANT: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODE_CODE: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CATEGORY_CATEGORY: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPACT_CATEGORY: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>,
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
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link movementType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MOVEMENT_TYPE: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link mode} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MODE: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      ModeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link transactionCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TRANSACTION_CATEGORY: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      TransactionCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeToTransactionCategoryMappingApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializers>
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
         * Static representation of the {@link movementTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVEMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'movementType_ID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link originRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_RELEVANT: fieldBuilder.buildEdmTypeField(
          'originRelevant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link originMaterialRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN_MATERIAL_RELEVANT: fieldBuilder.buildEdmTypeField(
          'originMaterialRelevant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_RELEVANT: fieldBuilder.buildEdmTypeField(
          'destinationRelevant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link destinationMaterialRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESTINATION_MATERIAL_RELEVANT: fieldBuilder.buildEdmTypeField(
          'destinationMaterialRelevant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE_CODE: fieldBuilder.buildEdmTypeField(
          'mode_code',
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
          MaintainMovementTypeToTransactionCategoryMapping
        )
      };
    }

    return this._schema;
  }
}
