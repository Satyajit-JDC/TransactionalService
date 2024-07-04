/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainIncotermsImpactForImportOrExport } from './MaintainIncotermsImpactForImportOrExport';
import { MaintainIncotermsImpactForImportOrExportRequestBuilder } from './MaintainIncotermsImpactForImportOrExportRequestBuilder';
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
export class MaintainIncotermsImpactForImportOrExportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
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
  ): MaintainIncotermsImpactForImportOrExportApi<DeSerializersT> {
    return new MaintainIncotermsImpactForImportOrExportApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT,
      MaintainIncotermsImpactForImportOrExportApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ImpactApi<DeSerializersT>,
      MaintainIncotermsImpactForImportOrExportApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      IMPACT: new OneToOneLink('impact', this, linkedApis[0]),
      SIBLING_ENTITY: new OneToOneLink('SiblingEntity', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = MaintainIncotermsImpactForImportOrExport;

  requestBuilder(): MaintainIncotermsImpactForImportOrExportRequestBuilder<DeSerializersT> {
    return new MaintainIncotermsImpactForImportOrExportRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
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
    typeof MaintainIncotermsImpactForImportOrExport,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainIncotermsImpactForImportOrExport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_AT: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INCO_TERM: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IMPACT_CATEGORY: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_ACTIVE_ENTITY: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    HAS_DRAFT_ENTITY: OrderableEdmTypeField<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link impact} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IMPACT: OneToOneLink<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT,
      ImpactApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link siblingEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SIBLING_ENTITY: OneToOneLink<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT,
      MaintainIncotermsImpactForImportOrExportApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      MaintainIncotermsImpactForImportOrExport<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link incoTerm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCO_TERM: fieldBuilder.buildEdmTypeField(
          'incoTerm',
          'Edm.String',
          false
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
        ALL_FIELDS: new AllFields('*', MaintainIncotermsImpactForImportOrExport)
      };
    }

    return this._schema;
  }
}
