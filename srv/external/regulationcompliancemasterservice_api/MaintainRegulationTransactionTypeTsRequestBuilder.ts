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
import { MaintainRegulationTransactionTypeTs } from './MaintainRegulationTransactionTypeTs';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationTransactionTypeTs} entity.
 */
export class MaintainRegulationTransactionTypeTsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationTransactionTypeTs<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationTransactionTypeTs` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationTransactionTypeTs` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationTransactionTypeTs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationTransactionTypeTs`.
   */
  create(
    entity: MaintainRegulationTransactionTypeTs<T>
  ): CreateRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationTransactionTypeTs` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationTransactionTypeTs.id}.
   * @param transactionType Key property. See {@link MaintainRegulationTransactionTypeTs.transactionType}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionTypeTs.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationTransactionTypeTs` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    transactionType: DeserializedType<T, 'Edm.String'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRegulationTransactionTypeTs<T>,
      T
    >(this.entityApi, {
      ID: id,
      transactionType: transactionType,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationTransactionTypeTs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationTransactionTypeTs`.
   */
  update(
    entity: MaintainRegulationTransactionTypeTs<T>
  ): UpdateRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionTypeTs`.
   * @param id Key property. See {@link MaintainRegulationTransactionTypeTs.id}.
   * @param transactionType Key property. See {@link MaintainRegulationTransactionTypeTs.transactionType}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionTypeTs.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionTypeTs`.
   */
  delete(
    id: string,
    transactionType: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionTypeTs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionTypeTs` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationTransactionTypeTs<T>
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T>;
  delete(
    idOrEntity: any,
    transactionType?: string,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationTransactionTypeTs<T>, T>(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationTransactionTypeTs
        ? idOrEntity
        : {
            ID: idOrEntity!,
            transactionType: transactionType!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
