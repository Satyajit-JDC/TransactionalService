/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaintainRegulationGroupView } from './MaintainRegulationGroupView';
import { MaintainRegulationGroupViewRequestBuilder } from './MaintainRegulationGroupViewRequestBuilder';
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
export class MaintainRegulationGroupViewApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MaintainRegulationGroupView<DeSerializersT>, DeSerializersT>
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
  ): MaintainRegulationGroupViewApi<DeSerializersT> {
    return new MaintainRegulationGroupViewApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link regulationGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_GROUP: OneToOneLink<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationGroupApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [MaintainRegulationGroupApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      REGULATION_GROUP: new OneToOneLink('regulationGroup', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = MaintainRegulationGroupView;

  requestBuilder(): MaintainRegulationGroupViewRequestBuilder<DeSerializersT> {
    return new MaintainRegulationGroupViewRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaintainRegulationGroupView<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaintainRegulationGroupView<DeSerializersT>,
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
    typeof MaintainRegulationGroupView,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaintainRegulationGroupView,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REGULATION_TYPE: OrderableEdmTypeField<
      MaintainRegulationGroupView<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REGULATION_GROUP_REGULATION_GROUP: OrderableEdmTypeField<
      MaintainRegulationGroupView<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MaintainRegulationGroupView<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link regulationGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REGULATION_GROUP: OneToOneLink<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT,
      MaintainRegulationGroupApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<MaintainRegulationGroupView<DeSerializers>>;
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
         * Static representation of the {@link regulationGroupRegulationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_GROUP_REGULATION_GROUP: fieldBuilder.buildEdmTypeField(
          'regulationGroup_regulationGroup',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaintainRegulationGroupView)
      };
    }

    return this._schema;
  }
}
