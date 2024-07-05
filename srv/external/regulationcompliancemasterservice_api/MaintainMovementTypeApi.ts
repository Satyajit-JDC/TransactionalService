/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainMovementType } from './MaintainMovementType';
import { MaintainMovementTypeRequestBuilder } from './MaintainMovementTypeRequestBuilder';
import { MaintainRegulationTypeApi } from './MaintainRegulationTypeApi';
import { ObjectTypeApi } from './ObjectTypeApi';
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
export class MaintainMovementTypeApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaintainMovementType<DeSerializersT>, DeSerializersT>
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
  ): MaintainMovementTypeApi<DeSerializersT> {
    return new MaintainMovementTypeApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_TYPE: OneToOneLink<
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      MaintainRegulationTypeApi<DeSerializersT>,
      ObjectTypeApi<DeSerializersT>,
      ImpactApi<DeSerializersT>,
      MaintainMovementTypeApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_TYPE: new OneToOneLink('regulationType', this, linkedApis[0]),
      OBJECT_TYPE: new OneToOneLink('objectType', this, linkedApis[1]),
      IMPACT: new OneToOneLink('impact', this, linkedApis[2]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = MaintainMovementType;

  requestBuilder(): MaintainMovementTypeRequestBuilder<DeSerializersT> {
    return new MaintainMovementTypeRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaintainMovementType<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainMovementType<DeSerializersT>,
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
    typeof MaintainMovementType,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainMovementType,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MOVEMENT_TYPE: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_TYPE_REGULATION_TYPE: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OBJECT_TYPE_CODE: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_OBJECT_SCENARIO: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMPACT_CATEGORY: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_SCENARIO: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NEGATIVE_IMPACT: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WITH_REFERENCE: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainMovementType<DeSerializers>,
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
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link objectType} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OBJECT_TYPE: OneToOneLink<
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      ObjectTypeApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainMovementType<DeSerializersT>,
      DeSerializersT,
      MaintainMovementTypeApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainMovementType<DeSerializers>>;
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
         * Static representation of the {@link movementType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MOVEMENT_TYPE: fieldBuilder.buildEdmTypeField(
          'movementType',
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
         * Static representation of the {@link subObjectScenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_OBJECT_SCENARIO: fieldBuilder.buildEdmTypeField(
          'subObjectScenario',
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
         * Static representation of the {@link sourceScenario} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_SCENARIO: fieldBuilder.buildEdmTypeField(
          'sourceScenario',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link negativeImpact} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NEGATIVE_IMPACT: fieldBuilder.buildEdmTypeField(
          'negativeImpact',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link withReference} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITH_REFERENCE: fieldBuilder.buildEdmTypeField(
          'withReference',
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
        ALL_FIELDS: new AllFields('*', MaintainMovementType)
      };
    }

    return this._schema;
  }
}
