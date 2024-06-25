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
import { Mode } from './Mode';

/**
 * Request builder class for operations supported on the {@link Mode} entity.
 */
export class ModeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Mode<T>, T> {
  /**
   * Returns a request builder for querying all `Mode` entities.
   * @returns A request builder for creating requests to retrieve all `Mode` entities.
   */
  getAll(): GetAllRequestBuilder<Mode<T>, T> {
    return new GetAllRequestBuilder<Mode<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Mode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Mode`.
   */
  create(entity: Mode<T>): CreateRequestBuilder<Mode<T>, T> {
    return new CreateRequestBuilder<Mode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Mode` entity based on its keys.
   * @param code Key property. See {@link Mode.code}.
   * @returns A request builder for creating requests to retrieve one `Mode` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Mode<T>, T> {
    return new GetByKeyRequestBuilder<Mode<T>, T>(this.entityApi, {
      code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Mode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Mode`.
   */
  update(entity: Mode<T>): UpdateRequestBuilder<Mode<T>, T> {
    return new UpdateRequestBuilder<Mode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Mode`.
   * @param code Key property. See {@link Mode.code}.
   * @returns A request builder for creating requests that delete an entity of type `Mode`.
   */
  delete(code: string): DeleteRequestBuilder<Mode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Mode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Mode` by taking the entity as a parameter.
   */
  delete(entity: Mode<T>): DeleteRequestBuilder<Mode<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Mode<T>, T> {
    return new DeleteRequestBuilder<Mode<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Mode ? codeOrEntity : { code: codeOrEntity! }
    );
  }
}
