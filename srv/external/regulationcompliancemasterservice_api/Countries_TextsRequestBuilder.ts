/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Countries_Texts } from './Countries_Texts';

/**
 * Request builder class for operations supported on the {@link Countries_Texts} entity.
 */
export class Countries_TextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Countries_Texts<T>, T> {
  /**
   * Returns a request builder for querying all `Countries_Texts` entities.
   * @returns A request builder for creating requests to retrieve all `Countries_Texts` entities.
   */
  getAll(): GetAllRequestBuilder<Countries_Texts<T>, T> {
    return new GetAllRequestBuilder<Countries_Texts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Countries_Texts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Countries_Texts`.
   */
  create(
    entity: Countries_Texts<T>
  ): CreateRequestBuilder<Countries_Texts<T>, T> {
    return new CreateRequestBuilder<Countries_Texts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Countries_Texts` entity based on its keys.
   * @param locale Key property. See {@link Countries_Texts.locale}.
   * @param code Key property. See {@link Countries_Texts.code}.
   * @returns A request builder for creating requests to retrieve one `Countries_Texts` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Countries_Texts<T>, T> {
    return new GetByKeyRequestBuilder<Countries_Texts<T>, T>(this.entityApi, {
      locale: locale,
      code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Countries_Texts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Countries_Texts`.
   */
  update(
    entity: Countries_Texts<T>
  ): UpdateRequestBuilder<Countries_Texts<T>, T> {
    return new UpdateRequestBuilder<Countries_Texts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Countries_Texts`.
   * @param locale Key property. See {@link Countries_Texts.locale}.
   * @param code Key property. See {@link Countries_Texts.code}.
   * @returns A request builder for creating requests that delete an entity of type `Countries_Texts`.
   */
  delete(
    locale: string,
    code: string
  ): DeleteRequestBuilder<Countries_Texts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Countries_Texts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Countries_Texts` by taking the entity as a parameter.
   */
  delete(
    entity: Countries_Texts<T>
  ): DeleteRequestBuilder<Countries_Texts<T>, T>;
  delete(
    localeOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<Countries_Texts<T>, T> {
    return new DeleteRequestBuilder<Countries_Texts<T>, T>(
      this.entityApi,
      localeOrEntity instanceof Countries_Texts
        ? localeOrEntity
        : {
            locale: localeOrEntity!,
            code: code!
          }
    );
  }
}
