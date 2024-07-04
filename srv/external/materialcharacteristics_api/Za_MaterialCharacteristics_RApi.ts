/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Za_MaterialCharacteristics_R } from './Za_MaterialCharacteristics_R';
import { Za_MaterialCharacteristics_RRequestBuilder } from './Za_MaterialCharacteristics_RRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class Za_MaterialCharacteristics_RApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Za_MaterialCharacteristics_R<DeSerializersT>, DeSerializersT>
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
  ): Za_MaterialCharacteristics_RApi<DeSerializersT> {
    return new Za_MaterialCharacteristics_RApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Za_MaterialCharacteristics_R;

  requestBuilder(): Za_MaterialCharacteristics_RRequestBuilder<DeSerializersT> {
    return new Za_MaterialCharacteristics_RRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Za_MaterialCharacteristics_R<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Za_MaterialCharacteristics_R<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Za_MaterialCharacteristics_R<DeSerializersT>,
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
    typeof Za_MaterialCharacteristics_R,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Za_MaterialCharacteristics_R,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    OBJECT_KEY: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_CHARACTERISTIC: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CHARACTERISTIC_VALUE_COUNTER: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IDENTIFIER_OBJECT_CLASS: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLASS_TYPE: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INTERNAL_COUNTER: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGULATION_GROUP: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REGULATION_MATERIAL_GROUP: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FUEL_CATEGORY: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_DESCRIPTION: OrderableEdmTypeField<
      Za_MaterialCharacteristics_R<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Za_MaterialCharacteristics_R<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link objectKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OBJECT_KEY: fieldBuilder.buildEdmTypeField(
          'ObjectKey',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internalCharacteristic} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_CHARACTERISTIC: fieldBuilder.buildEdmTypeField(
          'InternalCharacteristic',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link characteristicValueCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTERISTIC_VALUE_COUNTER: fieldBuilder.buildEdmTypeField(
          'CharacteristicValueCounter',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link identifierObjectClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFIER_OBJECT_CLASS: fieldBuilder.buildEdmTypeField(
          'IdentifierObjectClass',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link classType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_TYPE: fieldBuilder.buildEdmTypeField(
          'ClassType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link internalCounter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INTERNAL_COUNTER: fieldBuilder.buildEdmTypeField(
          'InternalCounter',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regulationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_GROUP: fieldBuilder.buildEdmTypeField(
          'RegulationGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link regulationMaterialGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REGULATION_MATERIAL_GROUP: fieldBuilder.buildEdmTypeField(
          'RegulationMaterialGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fuelCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FUEL_CATEGORY: fieldBuilder.buildEdmTypeField(
          'FuelCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link materialDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MaterialDescription',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Za_MaterialCharacteristics_R)
      };
    }

    return this._schema;
  }
}
