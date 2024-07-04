/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationObjectType } from './MaintainRegulationObjectType';
import { MaintainRegulationObjectTypeRequestBuilder } from './MaintainRegulationObjectTypeRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { ObjectTypeApi } from './ObjectTypeApi';
import { ObjectCategoryApi } from './ObjectCategoryApi';
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
export class MaintainRegulationObjectTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MaintainRegulationObjectType<DeSerializersT>, DeSerializersT>
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
  ): MaintainRegulationObjectTypeApi<DeSerializersT> {
    return new MaintainRegulationObjectTypeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_CATEGORY: OneToOneLink<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      ObjectCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationObjectTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      ObjectTypeApi<DeSerializersT>,
      ObjectCategoryApi<DeSerializersT>,
      MaintainRegulationObjectTypeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      OBJECT_TYPE: new OneToOneLink('objectType', this, linkedApis[1]),
      OBJECT_CATEGORY: new OneToOneLink('objectCategory', this, linkedApis[2]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = MaintainRegulationObjectType;

  requestBuilder(): MaintainRegulationObjectTypeRequestBuilder<DeSerializersT> {
    return new MaintainRegulationObjectTypeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaintainRegulationObjectType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRegulationObjectType<DeSerializersT>,
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
    typeof MaintainRegulationObjectType,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRegulationObjectType,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_ID: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_TYPE_CODE: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_CATEGORY_CATEGORY: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainRegulationObjectType<DeSerializers>,
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
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_CATEGORY: OneToOneLink<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      ObjectCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationObjectTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainRegulationObjectType<DeSerializers>>;
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
         * Static representation of the {@link objectCategoryCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_CATEGORY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'objectCategory_category',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', MaintainRegulationObjectType)
      };
    }

    return this._schema;
  }
}
