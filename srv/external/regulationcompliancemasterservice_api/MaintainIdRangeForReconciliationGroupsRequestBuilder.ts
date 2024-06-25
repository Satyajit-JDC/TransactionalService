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
import { MaintainIdRangeForReconciliationGroups } from './MaintainIdRangeForReconciliationGroups';

/**
 * Request builder class for operations supported on the {@link MaintainIdRangeForReconciliationGroups} entity.
 */
export class MaintainIdRangeForReconciliationGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainIdRangeForReconciliationGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainIdRangeForReconciliationGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T> {
    return new GetAllRequestBuilder<
      MaintainIdRangeForReconciliationGroups<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainIdRangeForReconciliationGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainIdRangeForReconciliationGroups`.
   */
  create(
    entity: MaintainIdRangeForReconciliationGroups<T>
  ): CreateRequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T> {
    return new CreateRequestBuilder<
      MaintainIdRangeForReconciliationGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainIdRangeForReconciliationGroups` entity based on its keys.
   * @param id Key property. See {@link MaintainIdRangeForReconciliationGroups.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForReconciliationGroups.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainIdRangeForReconciliationGroups` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainIdRangeForReconciliationGroups<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainIdRangeForReconciliationGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainIdRangeForReconciliationGroups`.
   */
  update(
    entity: MaintainIdRangeForReconciliationGroups<T>
  ): UpdateRequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T> {
    return new UpdateRequestBuilder<
      MaintainIdRangeForReconciliationGroups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForReconciliationGroups`.
   * @param id Key property. See {@link MaintainIdRangeForReconciliationGroups.id}.
   * @param isActiveEntity Key property. See {@link MaintainIdRangeForReconciliationGroups.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForReconciliationGroups`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForReconciliationGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForReconciliationGroups` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainIdRangeForReconciliationGroups<T>
  ): DeleteRequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainIdRangeForReconciliationGroups<T>, T> {
    return new DeleteRequestBuilder<
      MaintainIdRangeForReconciliationGroups<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainIdRangeForReconciliationGroups
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
