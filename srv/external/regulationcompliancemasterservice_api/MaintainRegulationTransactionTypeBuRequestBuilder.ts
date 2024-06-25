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
import { MaintainRegulationTransactionTypeBu } from './MaintainRegulationTransactionTypeBu';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationTransactionTypeBu} entity.
 */
export class MaintainRegulationTransactionTypeBuRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationTransactionTypeBu<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationTransactionTypeBu` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationTransactionTypeBu` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationTransactionTypeBu` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationTransactionTypeBu`.
   */
  create(
    entity: MaintainRegulationTransactionTypeBu<T>
  ): CreateRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationTransactionTypeBu` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationTransactionTypeBu.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionTypeBu.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationTransactionTypeBu` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRegulationTransactionTypeBu<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationTransactionTypeBu`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationTransactionTypeBu`.
   */
  update(
    entity: MaintainRegulationTransactionTypeBu<T>
  ): UpdateRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionTypeBu`.
   * @param id Key property. See {@link MaintainRegulationTransactionTypeBu.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionTypeBu.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionTypeBu`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionTypeBu`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionTypeBu` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationTransactionTypeBu<T>
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationTransactionTypeBu<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationTransactionTypeBu
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
