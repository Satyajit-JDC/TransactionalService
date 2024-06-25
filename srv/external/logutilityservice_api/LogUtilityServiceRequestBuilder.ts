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
import { LogUtilityService } from './LogUtilityService';

/**
 * Request builder class for operations supported on the {@link LogUtilityService} entity.
 */
export class LogUtilityServiceRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LogUtilityService<T>, T> {
  /**
   * Returns a request builder for querying all `LogUtilityService` entities.
   * @returns A request builder for creating requests to retrieve all `LogUtilityService` entities.
   */
  getAll(): GetAllRequestBuilder<LogUtilityService<T>, T> {
    return new GetAllRequestBuilder<LogUtilityService<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LogUtilityService` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LogUtilityService`.
   */
  create(
    entity: LogUtilityService<T>
  ): CreateRequestBuilder<LogUtilityService<T>, T> {
    return new CreateRequestBuilder<LogUtilityService<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LogUtilityService` entity based on its keys.
   * @param id Key property. See {@link LogUtilityService.id}.
   * @returns A request builder for creating requests to retrieve one `LogUtilityService` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<LogUtilityService<T>, T> {
    return new GetByKeyRequestBuilder<LogUtilityService<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LogUtilityService`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LogUtilityService`.
   */
  update(
    entity: LogUtilityService<T>
  ): UpdateRequestBuilder<LogUtilityService<T>, T> {
    return new UpdateRequestBuilder<LogUtilityService<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LogUtilityService`.
   * @param id Key property. See {@link LogUtilityService.id}.
   * @returns A request builder for creating requests that delete an entity of type `LogUtilityService`.
   */
  delete(id: string): DeleteRequestBuilder<LogUtilityService<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LogUtilityService`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LogUtilityService` by taking the entity as a parameter.
   */
  delete(
    entity: LogUtilityService<T>
  ): DeleteRequestBuilder<LogUtilityService<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<LogUtilityService<T>, T> {
    return new DeleteRequestBuilder<LogUtilityService<T>, T>(
      this.entityApi,
      idOrEntity instanceof LogUtilityService ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
