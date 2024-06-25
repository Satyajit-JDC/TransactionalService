/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Countries } from './Countries';
import { CountriesRequestBuilder } from './CountriesRequestBuilder';
import { Countries_TextsApi } from './Countries_TextsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CountriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Countries<DeSerializersT>, DeSerializersT>
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
  ): CountriesApi<DeSerializersT> {
    return new CountriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      Countries_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      Countries_TextsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      Countries_TextsApi<DeSerializersT>,
      Countries_TextsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TEXTS: new OneToManyLink('texts', this, linkedApis[0]),
      LOCALIZED: new OneToOneLink('localized', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Countries;

  requestBuilder(): CountriesRequestBuilder<DeSerializersT> {
    return new CountriesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Countries<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Countries<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Countries<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Countries, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Countries, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCR: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      Countries<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      Countries_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Countries<DeSerializersT>,
      DeSerializersT,
      Countries_TextsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Countries<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link descr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCR: fieldBuilder.buildEdmTypeField('descr', 'Edm.String', true),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('code', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Countries)
      };
    }

    return this._schema;
  }
}
