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
import { MaintainFuelMapping } from './MaintainFuelMapping';

/**
 * Request builder class for operations supported on the {@link MaintainFuelMapping} entity.
 */
export class MaintainFuelMappingRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainFuelMapping<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainFuelMapping` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainFuelMapping` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainFuelMapping<T>, T> {
    return new GetAllRequestBuilder<MaintainFuelMapping<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainFuelMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainFuelMapping`.
   */
  create(
    entity: MaintainFuelMapping<T>
  ): CreateRequestBuilder<MaintainFuelMapping<T>, T> {
    return new CreateRequestBuilder<MaintainFuelMapping<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainFuelMapping` entity based on its keys.
   * @param id Key property. See {@link MaintainFuelMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainFuelMapping.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainFuelMapping` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainFuelMapping<T>, T> {
    return new GetByKeyRequestBuilder<MaintainFuelMapping<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainFuelMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainFuelMapping`.
   */
  update(
    entity: MaintainFuelMapping<T>
  ): UpdateRequestBuilder<MaintainFuelMapping<T>, T> {
    return new UpdateRequestBuilder<MaintainFuelMapping<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainFuelMapping`.
   * @param id Key property. See {@link MaintainFuelMapping.id}.
   * @param isActiveEntity Key property. See {@link MaintainFuelMapping.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainFuelMapping`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainFuelMapping<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainFuelMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainFuelMapping` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainFuelMapping<T>
  ): DeleteRequestBuilder<MaintainFuelMapping<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainFuelMapping<T>, T> {
    return new DeleteRequestBuilder<MaintainFuelMapping<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainFuelMapping
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
