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
import { MaintainVolumeToleranceForAutoMatch } from './MaintainVolumeToleranceForAutoMatch';

/**
 * Request builder class for operations supported on the {@link MaintainVolumeToleranceForAutoMatch} entity.
 */
export class MaintainVolumeToleranceForAutoMatchRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainVolumeToleranceForAutoMatch` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainVolumeToleranceForAutoMatch` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T> {
    return new GetAllRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainVolumeToleranceForAutoMatch` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainVolumeToleranceForAutoMatch`.
   */
  create(
    entity: MaintainVolumeToleranceForAutoMatch<T>
  ): CreateRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T> {
    return new CreateRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainVolumeToleranceForAutoMatch` entity based on its keys.
   * @param id Key property. See {@link MaintainVolumeToleranceForAutoMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainVolumeToleranceForAutoMatch.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainVolumeToleranceForAutoMatch` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainVolumeToleranceForAutoMatch<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainVolumeToleranceForAutoMatch`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainVolumeToleranceForAutoMatch`.
   */
  update(
    entity: MaintainVolumeToleranceForAutoMatch<T>
  ): UpdateRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T> {
    return new UpdateRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainVolumeToleranceForAutoMatch`.
   * @param id Key property. See {@link MaintainVolumeToleranceForAutoMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainVolumeToleranceForAutoMatch.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainVolumeToleranceForAutoMatch`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainVolumeToleranceForAutoMatch`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainVolumeToleranceForAutoMatch` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainVolumeToleranceForAutoMatch<T>
  ): DeleteRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T> {
    return new DeleteRequestBuilder<MaintainVolumeToleranceForAutoMatch<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainVolumeToleranceForAutoMatch
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
