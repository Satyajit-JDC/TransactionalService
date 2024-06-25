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
import { ObjectType_Texts } from './ObjectType_Texts';

/**
 * Request builder class for operations supported on the {@link ObjectType_Texts} entity.
 */
export class ObjectType_TextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ObjectType_Texts<T>, T> {
  /**
   * Returns a request builder for querying all `ObjectType_Texts` entities.
   * @returns A request builder for creating requests to retrieve all `ObjectType_Texts` entities.
   */
  getAll(): GetAllRequestBuilder<ObjectType_Texts<T>, T> {
    return new GetAllRequestBuilder<ObjectType_Texts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ObjectType_Texts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ObjectType_Texts`.
   */
  create(
    entity: ObjectType_Texts<T>
  ): CreateRequestBuilder<ObjectType_Texts<T>, T> {
    return new CreateRequestBuilder<ObjectType_Texts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ObjectType_Texts` entity based on its keys.
   * @param locale Key property. See {@link ObjectType_Texts.locale}.
   * @param code Key property. See {@link ObjectType_Texts.code}.
   * @returns A request builder for creating requests to retrieve one `ObjectType_Texts` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ObjectType_Texts<T>, T> {
    return new GetByKeyRequestBuilder<ObjectType_Texts<T>, T>(this.entityApi, {
      locale: locale,
      code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ObjectType_Texts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ObjectType_Texts`.
   */
  update(
    entity: ObjectType_Texts<T>
  ): UpdateRequestBuilder<ObjectType_Texts<T>, T> {
    return new UpdateRequestBuilder<ObjectType_Texts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ObjectType_Texts`.
   * @param locale Key property. See {@link ObjectType_Texts.locale}.
   * @param code Key property. See {@link ObjectType_Texts.code}.
   * @returns A request builder for creating requests that delete an entity of type `ObjectType_Texts`.
   */
  delete(
    locale: string,
    code: string
  ): DeleteRequestBuilder<ObjectType_Texts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ObjectType_Texts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ObjectType_Texts` by taking the entity as a parameter.
   */
  delete(
    entity: ObjectType_Texts<T>
  ): DeleteRequestBuilder<ObjectType_Texts<T>, T>;
  delete(
    localeOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<ObjectType_Texts<T>, T> {
    return new DeleteRequestBuilder<ObjectType_Texts<T>, T>(
      this.entityApi,
      localeOrEntity instanceof ObjectType_Texts
        ? localeOrEntity
        : {
            locale: localeOrEntity!,
            code: code!
          }
    );
  }
}
