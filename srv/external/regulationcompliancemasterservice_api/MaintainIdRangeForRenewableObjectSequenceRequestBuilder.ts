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
import { MaintainIdRangeForRenewableObjectSequence } from './MaintainIdRangeForRenewableObjectSequence';

/**
 * Request builder class for operations supported on the {@link MaintainIdRangeForRenewableObjectSequence} entity.
 */
export class MaintainIdRangeForRenewableObjectSequenceRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainIdRangeForRenewableObjectSequence<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainIdRangeForRenewableObjectSequence` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainIdRangeForRenewableObjectSequence` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainIdRangeForRenewableObjectSequence<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainIdRangeForRenewableObjectSequence` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainIdRangeForRenewableObjectSequence`.
   */
  create(
    entity: MaintainIdRangeForRenewableObjectSequence<T>
  ): CreateRequestBuilder<MaintainIdRangeForRenewableObjectSequence<T>, T> {
    return new CreateRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainIdRangeForRenewableObjectSequence` entity based on its keys.
   * @param id Key property. See {@link MaintainIdRangeForRenewableObjectSequence.id}.
   * @returns A request builder for creating requests to retrieve one `MaintainIdRangeForRenewableObjectSequence` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<MaintainIdRangeForRenewableObjectSequence<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<T>,
      T
    >(this.entityApi, { ID: id });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainIdRangeForRenewableObjectSequence`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainIdRangeForRenewableObjectSequence`.
   */
  update(
    entity: MaintainIdRangeForRenewableObjectSequence<T>
  ): UpdateRequestBuilder<MaintainIdRangeForRenewableObjectSequence<T>, T> {
    return new UpdateRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForRenewableObjectSequence`.
   * @param id Key property. See {@link MaintainIdRangeForRenewableObjectSequence.id}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForRenewableObjectSequence`.
   */
  delete(
    id: string
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObjectSequence<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainIdRangeForRenewableObjectSequence`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIdRangeForRenewableObjectSequence` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainIdRangeForRenewableObjectSequence<T>
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObjectSequence<T>, T>;
  delete(
    idOrEntity: any
  ): DeleteRequestBuilder<MaintainIdRangeForRenewableObjectSequence<T>, T> {
    return new DeleteRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainIdRangeForRenewableObjectSequence
        ? idOrEntity
        : { ID: idOrEntity! }
    );
  }
}
