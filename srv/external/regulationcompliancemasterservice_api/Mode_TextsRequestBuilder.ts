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
import { Mode_Texts } from './Mode_Texts';

/**
 * Request builder class for operations supported on the {@link Mode_Texts} entity.
 */
export class Mode_TextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Mode_Texts<T>, T> {
  /**
   * Returns a request builder for querying all `Mode_Texts` entities.
   * @returns A request builder for creating requests to retrieve all `Mode_Texts` entities.
   */
  getAll(): GetAllRequestBuilder<Mode_Texts<T>, T> {
    return new GetAllRequestBuilder<Mode_Texts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Mode_Texts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Mode_Texts`.
   */
  create(entity: Mode_Texts<T>): CreateRequestBuilder<Mode_Texts<T>, T> {
    return new CreateRequestBuilder<Mode_Texts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Mode_Texts` entity based on its keys.
   * @param locale Key property. See {@link Mode_Texts.locale}.
   * @param code Key property. See {@link Mode_Texts.code}.
   * @returns A request builder for creating requests to retrieve one `Mode_Texts` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Mode_Texts<T>, T> {
    return new GetByKeyRequestBuilder<Mode_Texts<T>, T>(this.entityApi, {
      locale: locale,
      code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Mode_Texts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Mode_Texts`.
   */
  update(entity: Mode_Texts<T>): UpdateRequestBuilder<Mode_Texts<T>, T> {
    return new UpdateRequestBuilder<Mode_Texts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Mode_Texts`.
   * @param locale Key property. See {@link Mode_Texts.locale}.
   * @param code Key property. See {@link Mode_Texts.code}.
   * @returns A request builder for creating requests that delete an entity of type `Mode_Texts`.
   */
  delete(locale: string, code: string): DeleteRequestBuilder<Mode_Texts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Mode_Texts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Mode_Texts` by taking the entity as a parameter.
   */
  delete(entity: Mode_Texts<T>): DeleteRequestBuilder<Mode_Texts<T>, T>;
  delete(
    localeOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<Mode_Texts<T>, T> {
    return new DeleteRequestBuilder<Mode_Texts<T>, T>(
      this.entityApi,
      localeOrEntity instanceof Mode_Texts
        ? localeOrEntity
        : {
            locale: localeOrEntity!,
            code: code!
          }
    );
  }
}
