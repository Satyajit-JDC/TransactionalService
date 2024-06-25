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
import { MaintainRenewableMovementType } from './MaintainRenewableMovementType';

/**
 * Request builder class for operations supported on the {@link MaintainRenewableMovementType} entity.
 */
export class MaintainRenewableMovementTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRenewableMovementType<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRenewableMovementType` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRenewableMovementType` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRenewableMovementType<T>, T> {
    return new GetAllRequestBuilder<MaintainRenewableMovementType<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRenewableMovementType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRenewableMovementType`.
   */
  create(
    entity: MaintainRenewableMovementType<T>
  ): CreateRequestBuilder<MaintainRenewableMovementType<T>, T> {
    return new CreateRequestBuilder<MaintainRenewableMovementType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRenewableMovementType` entity based on its keys.
   * @param id Key property. See {@link MaintainRenewableMovementType.id}.
   * @param isActiveEntity Key property. See {@link MaintainRenewableMovementType.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRenewableMovementType` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRenewableMovementType<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRenewableMovementType<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRenewableMovementType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRenewableMovementType`.
   */
  update(
    entity: MaintainRenewableMovementType<T>
  ): UpdateRequestBuilder<MaintainRenewableMovementType<T>, T> {
    return new UpdateRequestBuilder<MaintainRenewableMovementType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRenewableMovementType`.
   * @param id Key property. See {@link MaintainRenewableMovementType.id}.
   * @param isActiveEntity Key property. See {@link MaintainRenewableMovementType.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRenewableMovementType`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRenewableMovementType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRenewableMovementType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRenewableMovementType` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRenewableMovementType<T>
  ): DeleteRequestBuilder<MaintainRenewableMovementType<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRenewableMovementType<T>, T> {
    return new DeleteRequestBuilder<MaintainRenewableMovementType<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRenewableMovementType
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
