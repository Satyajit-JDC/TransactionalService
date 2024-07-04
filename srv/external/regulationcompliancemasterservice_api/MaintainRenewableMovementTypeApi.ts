/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRenewableMovementType } from './MaintainRenewableMovementType';
import { MaintainRenewableMovementTypeRequestBuilder } from './MaintainRenewableMovementTypeRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { ObjectTypeApi } from './ObjectTypeApi';
import { MaintainMovementTypeApi } from './MaintainMovementTypeApi';
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
export class MaintainRenewableMovementTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MaintainRenewableMovementType<DeSerializersT>, DeSerializersT>
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
  ): MaintainRenewableMovementTypeApi<DeSerializersT> {
    return new MaintainRenewableMovementTypeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryMovementType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_MOVEMENT_TYPE: OneToOneLink<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainRenewableMovementTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      ObjectTypeApi<DeSerializersT>,
      MaintainMovementTypeApi<DeSerializersT>,
      MaintainRenewableMovementTypeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      OBJECT_TYPE: new OneToOneLink('ObjectType', this, linkedApis[1]),
      INVENTORY_MOVEMENT_TYPE: new OneToOneLink(
        'inventoryMovementType',
        this,
        linkedApis[2]
      ),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = MaintainRenewableMovementType;

  requestBuilder(): MaintainRenewableMovementTypeRequestBuilder<DeSerializersT> {
    return new MaintainRenewableMovementTypeRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainRenewableMovementType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRenewableMovementType<DeSerializersT>,
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
    typeof MaintainRenewableMovementType,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRenewableMovementType,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_TYPE_CODE: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INVENTORY_MOVEMENT_TYPE_ID: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    CONTRACT_RELEVANT: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONTRACT_SIDE: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RELEVANT_MOVEMENT_TYPE: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainRenewableMovementType<DeSerializers>,
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
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link inventoryMovementType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_MOVEMENT_TYPE: OneToOneLink<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainRenewableMovementTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainRenewableMovementType<DeSerializers>>;
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
          'ObjectType_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inventoryMovementTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INVENTORY_MOVEMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'inventoryMovementType_ID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link contractRelevant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_RELEVANT: fieldBuilder.buildEdmTypeField(
          'contractRelevant',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link contractSide} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTRACT_SIDE: fieldBuilder.buildEdmTypeField(
          'contractSide',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link relevantMovementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RELEVANT_MOVEMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'relevantMovementType',
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
        ALL_FIELDS: new AllFields('*', MaintainRenewableMovementType)
      };
    }

    return this._schema;
  }
}
