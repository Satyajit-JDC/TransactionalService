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
import { MaintainActionSubScenarioMapping } from './MaintainActionSubScenarioMapping';

/**
 * Request builder class for operations supported on the {@link MaintainActionSubScenarioMapping} entity.
 */
export class MaintainActionSubScenarioMappingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainActionSubScenarioMapping<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainActionSubScenarioMapping` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainActionSubScenarioMapping` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainActionSubScenarioMapping<T>, T> {
    return new GetAllRequestBuilder<MaintainActionSubScenarioMapping<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainActionSubScenarioMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainActionSubScenarioMapping`.
   */
  create(
    entity: MaintainActionSubScenarioMapping<T>
  ): CreateRequestBuilder<MaintainActionSubScenarioMapping<T>, T> {
    return new CreateRequestBuilder<MaintainActionSubScenarioMapping<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainActionSubScenarioMapping` entity based on its keys.
   * @param id Key property. See {@link MaintainActionSubScenarioMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainActionSubScenarioMapping.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainActionSubScenarioMapping` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainActionSubScenarioMapping<T>, T> {
    return new GetByKeyRequestBuilder<MaintainActionSubScenarioMapping<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainActionSubScenarioMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainActionSubScenarioMapping`.
   */
  update(
    entity: MaintainActionSubScenarioMapping<T>
  ): UpdateRequestBuilder<MaintainActionSubScenarioMapping<T>, T> {
    return new UpdateRequestBuilder<MaintainActionSubScenarioMapping<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainActionSubScenarioMapping`.
   * @param id Key property. See {@link MaintainActionSubScenarioMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainActionSubScenarioMapping.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainActionSubScenarioMapping`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainActionSubScenarioMapping<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainActionSubScenarioMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainActionSubScenarioMapping` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainActionSubScenarioMapping<T>
  ): DeleteRequestBuilder<MaintainActionSubScenarioMapping<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainActionSubScenarioMapping<T>, T> {
    return new DeleteRequestBuilder<MaintainActionSubScenarioMapping<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainActionSubScenarioMapping
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
