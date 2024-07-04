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
import { MaintainIdRangeForReconciliationGroup } from './MaintainIdRangeForReconciliationGroup';

/**
 * Request builder class for operations supported on the {@link MaintainIdRangeForReconciliationGroup} entity.
 */
export class MaintainIdRangeForReconciliationGroupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainIdRangeForReconciliationGroup` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainIdRangeForReconciliationGroup` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T> {
    return new GetAllRequestBuilder<
      MaintainIdRangeForReconciliationGroup<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainIdRangeForReconciliationGroup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainIdRangeForReconciliationGroup`.
   */
  create(
    entity: MaintainIdRangeForReconciliationGroup<T>
  ): CreateRequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T> {
    return new CreateRequestBuilder<
      MaintainIdRangeForReconciliationGroup<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainIdRangeForReconciliationGroup` entity based on its keys.
   * @param id Key property. See {@link MaintainIdRangeForReconciliationGroup.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForReconciliationGroup.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainIdRangeForReconciliationGroup` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainIdRangeForReconciliationGroup<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainIdRangeForReconciliationGroup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainIdRangeForReconciliationGroup`.
   */
  update(
    entity: MaintainIdRangeForReconciliationGroup<T>
  ): UpdateRequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T> {
    return new UpdateRequestBuilder<
      MaintainIdRangeForReconciliationGroup<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForReconciliationGroup`.
   * @param id Key property. See {@link MaintainIdRangeForReconciliationGroup.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForReconciliationGroup.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForReconciliationGroup`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForReconciliationGroup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForReconciliationGroup` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainIdRangeForReconciliationGroup<T>
  ): DeleteRequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForReconciliationGroup<T>, T> {
    return new DeleteRequestBuilder<
      MaintainIdRangeForReconciliationGroup<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainIdRangeForReconciliationGroup
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
