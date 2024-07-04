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
import { MaintainRegulationTransactionTypeWithImpact } from './MaintainRegulationTransactionTypeWithImpact';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationTransactionTypeWithImpact} entity.
 */
export class MaintainRegulationTransactionTypeWithImpactRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationTransactionTypeWithImpact<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationTransactionTypeWithImpact` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationTransactionTypeWithImpact` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainRegulationTransactionTypeWithImpact<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationTransactionTypeWithImpact` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationTransactionTypeWithImpact`.
   */
  create(
    entity: MaintainRegulationTransactionTypeWithImpact<T>
  ): CreateRequestBuilder<MaintainRegulationTransactionTypeWithImpact<T>, T> {
    return new CreateRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationTransactionTypeWithImpact` entity based on its keys.
   * @param id Key property. See {@link MaintainRegulationTransactionTypeWithImpact.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionTypeWithImpact.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationTransactionTypeWithImpact` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationTransactionTypeWithImpact<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationTransactionTypeWithImpact`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationTransactionTypeWithImpact`.
   */
  update(
    entity: MaintainRegulationTransactionTypeWithImpact<T>
  ): UpdateRequestBuilder<MaintainRegulationTransactionTypeWithImpact<T>, T> {
    return new UpdateRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionTypeWithImpact`.
   * @param id Key property. See {@link MaintainRegulationTransactionTypeWithImpact.id}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationTransactionTypeWithImpact.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionTypeWithImpact`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeWithImpact<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationTransactionTypeWithImpact`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationTransactionTypeWithImpact` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationTransactionTypeWithImpact<T>
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeWithImpact<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationTransactionTypeWithImpact<T>, T> {
    return new DeleteRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainRegulationTransactionTypeWithImpact
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
