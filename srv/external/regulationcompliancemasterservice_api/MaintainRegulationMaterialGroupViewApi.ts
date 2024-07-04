/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationMaterialGroupView } from './MaintainRegulationMaterialGroupView';
import { MaintainRegulationMaterialGroupViewRequestBuilder } from './MaintainRegulationMaterialGroupViewRequestBuilder';
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
export class MaintainRegulationMaterialGroupViewApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
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
  ): MaintainRegulationMaterialGroupViewApi<DeSerializersT> {
    return new MaintainRegulationMaterialGroupViewApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationMaterialGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_MATERIAL_GROUP: OneToOneLink<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationMaterialGroupApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MaintainRegulationMaterialGroupApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_MATERIAL_GROUP: new OneToOneLink(
        'regulationMaterialGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = MaintainRegulationMaterialGroupView;

  requestBuilder(): MaintainRegulationMaterialGroupViewRequestBuilder<DeSerializersT> {
    return new MaintainRegulationMaterialGroupViewRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MaintainRegulationMaterialGroupView<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRegulationMaterialGroupView<DeSerializersT>,
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
    typeof MaintainRegulationMaterialGroupView,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRegulationMaterialGroupView,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRegulationMaterialGroupView<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_MATERIAL_GROUP_REGULATION_MATERIAL_GROUP: OrderableEdmTypeField<
      MaintainRegulationMaterialGroupView<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MaintainRegulationMaterialGroupView<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      MaintainRegulationMaterialGroupView<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationMaterialGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_MATERIAL_GROUP: OneToOneLink<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationMaterialGroupApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainRegulationMaterialGroupView<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link regulationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_TYPE: fieldBuilder.buildEdmTypeField(
          'regulationType',
          'Edm.String',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'category',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaintainRegulationMaterialGroupView)
      };
    }

    return this._schema;
  }
}
