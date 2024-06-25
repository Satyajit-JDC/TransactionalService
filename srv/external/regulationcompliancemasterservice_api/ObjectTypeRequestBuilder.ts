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
import { ObjectType } from './ObjectType';

/**
 * Request builder class for operations supported on the {@link ObjectType} entity.
 */
export class ObjectTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ObjectType<T>, T> {
  /**
   * Returns a request builder for querying all `ObjectType` entities.
   * @returns A request builder for creating requests to retrieve all `ObjectType` entities.
   */
  getAll(): GetAllRequestBuilder<ObjectType<T>, T> {
    return new GetAllRequestBuilder<ObjectType<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ObjectType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ObjectType`.
   */
  create(entity: ObjectType<T>): CreateRequestBuilder<ObjectType<T>, T> {
    return new CreateRequestBuilder<ObjectType<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ObjectType` entity based on its keys.
   * @param code Key property. See {@link ObjectType.code}.
   * @returns A request builder for creating requests to retrieve one `ObjectType` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ObjectType<T>, T> {
    return new GetByKeyRequestBuilder<ObjectType<T>, T>(this.entityApi, {
      code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ObjectType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ObjectType`.
   */
  update(entity: ObjectType<T>): UpdateRequestBuilder<ObjectType<T>, T> {
    return new UpdateRequestBuilder<ObjectType<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ObjectType`.
   * @param code Key property. See {@link ObjectType.code}.
   * @returns A request builder for creating requests that delete an entity of type `ObjectType`.
   */
  delete(code: string): DeleteRequestBuilder<ObjectType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ObjectType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ObjectType` by taking the entity as a parameter.
   */
  delete(entity: ObjectType<T>): DeleteRequestBuilder<ObjectType<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ObjectType<T>, T> {
    return new DeleteRequestBuilder<ObjectType<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ObjectType
        ? codeOrEntity
        : { code: codeOrEntity! }
    );
  }
}
