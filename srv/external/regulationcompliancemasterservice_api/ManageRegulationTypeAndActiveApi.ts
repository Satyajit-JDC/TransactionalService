/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ManageRegulationTypeAndActive } from './ManageRegulationTypeAndActive';
import { ManageRegulationTypeAndActiveRequestBuilder } from './ManageRegulationTypeAndActiveRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { MaintainRegulationGroupApi } from './MaintainRegulationGroupApi';
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
export class ManageRegulationTypeAndActiveApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ManageRegulationTypeAndActive<DeSerializersT>, DeSerializersT>
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
  ): ManageRegulationTypeAndActiveApi<DeSerializersT> {
    return new ManageRegulationTypeAndActiveApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_GROUP: OneToOneLink<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT,
      ManageRegulationTypeAndActiveApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      MaintainRegulationGroupApi<DeSerializersT>,
      ManageRegulationTypeAndActiveApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      REGULATION_GROUP: new OneToOneLink(
        'regulationGroup',
        this,
        linkedApis[1]
      ),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = ManageRegulationTypeAndActive;

  requestBuilder(): ManageRegulationTypeAndActiveRequestBuilder<DeSerializersT> {
    return new ManageRegulationTypeAndActiveRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ManageRegulationTypeAndActive<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ManageRegulationTypeAndActive<DeSerializersT>,
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
    typeof ManageRegulationTypeAndActive,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ManageRegulationTypeAndActive,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REGULATION_TYPE_ID: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVE: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      true,
      true
    >;
    REGULATION_GROUP_ID: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      true,
      true
    >;
    REGULATION_GROUP_REGULATION_GROUP: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      ManageRegulationTypeAndActive<DeSerializers>,
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
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_GROUP: OneToOneLink<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationGroupApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT,
      ManageRegulationTypeAndActiveApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ManageRegulationTypeAndActive<DeSerializers>>;
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
         * Static representation of the {@link active} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVE: fieldBuilder.buildEdmTypeField('active', 'Edm.Boolean', true),
        /**
         * Static representation of the {@link regulationGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'regulationGroup_ID',
          'Edm.Guid',
          true
        ),
        /**
         * Static representation of the {@link regulationGroupRegulationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_GROUP_REGULATION_GROUP: fieldBuilder.buildEdmTypeField(
          'regulationGroup_regulationGroup',
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
        ALL_FIELDS: new AllFields('*', ManageRegulationTypeAndActive)
      };
    }

    return this._schema;
  }
}
