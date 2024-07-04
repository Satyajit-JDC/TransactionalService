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
import { MaintainMovementType } from './MaintainMovementType';

/**
 * Request builder class for operations supported on the {@link MaintainMovementType} entity.
 */
export class MaintainMovementTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainMovementType<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainMovementType` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainMovementType` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainMovementType<T>, T> {
    return new GetAllRequestBuilder<MaintainMovementType<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainMovementType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainMovementType`.
   */
  create(
    entity: MaintainMovementType<T>
  ): CreateRequestBuilder<MaintainMovementType<T>, T> {
    return new CreateRequestBuilder<MaintainMovementType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainMovementType` entity based on its keys.
   * @param id Key property. See {@link MaintainMovementType.id}.
   * @param isActiveEntity Key property. See {@link MaintainMovementType.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainMovementType` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainMovementType<T>, T> {
    return new GetByKeyRequestBuilder<MaintainMovementType<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainMovementType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainMovementType`.
   */
  update(
    entity: MaintainMovementType<T>
  ): UpdateRequestBuilder<MaintainMovementType<T>, T> {
    return new UpdateRequestBuilder<MaintainMovementType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainMovementType`.
   * @param id Key property. See {@link MaintainMovementType.id}.
   * @param isActiveEntity Key property. See {@link MaintainMovementType.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainMovementType`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainMovementType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainMovementType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainMovementType` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainMovementType<T>
  ): DeleteRequestBuilder<MaintainMovementType<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainMovementType<T>, T> {
    return new DeleteRequestBuilder<MaintainMovementType<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainMovementType
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
