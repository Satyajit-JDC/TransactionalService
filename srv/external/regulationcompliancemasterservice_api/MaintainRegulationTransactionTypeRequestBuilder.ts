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
import { MaintainRegulationTransactionType } from './MaintainRegulationTransactionType';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationTransactionType} entity.
 */
export class MaintainRegulationTransactionTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationTransactionType<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationTransactionType` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationTransactionType` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationTransactionType<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationTransactionType<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationTransactionType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationTransactionType`.
   */
  create(
    entity: MaintainRegulationTransactionType<T>
  ): CreateRequestBuilder<MaintainRegulationTransactionType<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationTransactionType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationTransactionType` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationTransactionType.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionType.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationTransactionType` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationTransactionType<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRegulationTransactionType<T>, T>(
      this.entityApi,
      {
        ID: id,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationTransactionType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationTransactionType`.
   */
  update(
    entity: MaintainRegulationTransactionType<T>
  ): UpdateRequestBuilder<MaintainRegulationTransactionType<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationTransactionType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionType`.
   * @param id Key property. See {@link MaintainRegulationTransactionType.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionType.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionType`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionType` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationTransactionType<T>
  ): DeleteRequestBuilder<MaintainRegulationTransactionType<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionType<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationTransactionType<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationTransactionType
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
