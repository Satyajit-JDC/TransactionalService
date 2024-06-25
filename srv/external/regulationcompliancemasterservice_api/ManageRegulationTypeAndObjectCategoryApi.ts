/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ManageRegulationTypeAndObjectCategory } from './ManageRegulationTypeAndObjectCategory';
import { ManageRegulationTypeAndObjectCategoryRequestBuilder } from './ManageRegulationTypeAndObjectCategoryRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { ObjectCategoryApi } from './ObjectCategoryApi';
import { MaintainRegulationMaterialGroupApi } from './MaintainRegulationMaterialGroupApi';
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
export class ManageRegulationTypeAndObjectCategoryApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
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
  ): ManageRegulationTypeAndObjectCategoryApi<DeSerializersT> {
    return new ManageRegulationTypeAndObjectCategoryApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_CATEGORY: OneToOneLink<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      ObjectCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationMaterialGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_MATERIAL_GROUP: OneToOneLink<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationMaterialGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      ManageRegulationTypeAndObjectCategoryApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      ObjectCategoryApi<DeSerializersT>,
      MaintainRegulationMaterialGroupApi<DeSerializersT>,
      ManageRegulationTypeAndObjectCategoryApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      OBJECT_CATEGORY: new OneToOneLink('objectCategory', this, linkedApis[1]),
      REGULATION_MATERIAL_GROUP: new OneToOneLink(
        'regulationMaterialGroup',
        this,
        linkedApis[2]
      ),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = ManageRegulationTypeAndObjectCategory;

  requestBuilder(): ManageRegulationTypeAndObjectCategoryRequestBuilder<DeSerializersT> {
    return new ManageRegulationTypeAndObjectCategoryRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ManageRegulationTypeAndObjectCategory<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ManageRegulationTypeAndObjectCategory<DeSerializersT>,
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
    typeof ManageRegulationTypeAndObjectCategory,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ManageRegulationTypeAndObjectCategory,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REGULATION_TYPE_ID: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_CATEGORY_CATEGORY: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_MATERIAL_GROUP_ID: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    REGULATION_MATERIAL_GROUP_REGULATION_MATERIAL_GROUP: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      ManageRegulationTypeAndObjectCategory<DeSerializers>,
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
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_CATEGORY: OneToOneLink<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      ObjectCategoryApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationMaterialGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_MATERIAL_GROUP: OneToOneLink<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationMaterialGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT,
      ManageRegulationTypeAndObjectCategoryApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ManageRegulationTypeAndObjectCategory<DeSerializers>>;
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
         * Static representation of the {@link objectCategoryCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_CATEGORY_CATEGORY: fieldBuilder.buildEdmTypeField(
          'objectCategory_category',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link regulationMaterialGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_MATERIAL_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'regulationMaterialGroup_ID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link regulationMaterialGroupRegulationMaterialGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_MATERIAL_GROUP_REGULATION_MATERIAL_GROUP:
          fieldBuilder.buildEdmTypeField(
            'regulationMaterialGroup_regulationMaterialGroup',
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
        ALL_FIELDS: new AllFields('*', ManageRegulationTypeAndObjectCategory)
      };
    }

    return this._schema;
  }
}
