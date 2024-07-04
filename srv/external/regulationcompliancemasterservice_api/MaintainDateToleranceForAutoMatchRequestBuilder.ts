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
import { MaintainDateToleranceForAutoMatch } from './MaintainDateToleranceForAutoMatch';

/**
 * Request builder class for operations supported on the {@link MaintainDateToleranceForAutoMatch} entity.
 */
export class MaintainDateToleranceForAutoMatchRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainDateToleranceForAutoMatch<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainDateToleranceForAutoMatch` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainDateToleranceForAutoMatch` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T> {
    return new GetAllRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainDateToleranceForAutoMatch` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainDateToleranceForAutoMatch`.
   */
  create(
    entity: MaintainDateToleranceForAutoMatch<T>
  ): CreateRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T> {
    return new CreateRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainDateToleranceForAutoMatch` entity based on its keys.
   * @param id Key property. See {@link MaintainDateToleranceForAutoMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainDateToleranceForAutoMatch.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainDateToleranceForAutoMatch` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T> {
    return new GetByKeyRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainDateToleranceForAutoMatch`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainDateToleranceForAutoMatch`.
   */
  update(
    entity: MaintainDateToleranceForAutoMatch<T>
  ): UpdateRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T> {
    return new UpdateRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainDateToleranceForAutoMatch`.
   * @param id Key property. See {@link MaintainDateToleranceForAutoMatch.id}.
   * @param isActiveEntity Key property. See {@link MaintainDateToleranceForAutoMatch.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainDateToleranceForAutoMatch`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainDateToleranceForAutoMatch`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainDateToleranceForAutoMatch` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainDateToleranceForAutoMatch<T>
  ): DeleteRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T> {
    return new DeleteRequestBuilder<MaintainDateToleranceForAutoMatch<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainDateToleranceForAutoMatch
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
