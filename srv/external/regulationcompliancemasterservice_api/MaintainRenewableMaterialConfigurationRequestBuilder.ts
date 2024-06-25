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
import { MaintainRenewableMaterialConfiguration } from './MaintainRenewableMaterialConfiguration';

/**
 * Request builder class for operations supported on the {@link MaintainRenewableMaterialConfiguration} entity.
 */
export class MaintainRenewableMaterialConfigurationRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRenewableMaterialConfiguration<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRenewableMaterialConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRenewableMaterialConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRenewableMaterialConfiguration<T>, T> {
    return new GetAllRequestBuilder<
      MaintainRenewableMaterialConfiguration<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainRenewableMaterialConfiguration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRenewableMaterialConfiguration`.
   */
  create(
    entity: MaintainRenewableMaterialConfiguration<T>
  ): CreateRequestBuilder<MaintainRenewableMaterialConfiguration<T>, T> {
    return new CreateRequestBuilder<
      MaintainRenewableMaterialConfiguration<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainRenewableMaterialConfiguration` entity based on its keys.
   * @param id Key property. See {@link MaintainRenewableMaterialConfiguration.id}.
   * @param isActiveEntity Key property. See {@link MaintainRenewableMaterialConfiguration.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRenewableMaterialConfiguration` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRenewableMaterialConfiguration<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainRenewableMaterialConfiguration<T>,
      T
    >(this.entityApi, {
      ID: id,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRenewableMaterialConfiguration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRenewableMaterialConfiguration`.
   */
  update(
    entity: MaintainRenewableMaterialConfiguration<T>
  ): UpdateRequestBuilder<MaintainRenewableMaterialConfiguration<T>, T> {
    return new UpdateRequestBuilder<
      MaintainRenewableMaterialConfiguration<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRenewableMaterialConfiguration`.
   * @param id Key property. See {@link MaintainRenewableMaterialConfiguration.id}.
   * @param isActiveEntity Key property. See {@link MaintainRenewableMaterialConfiguration.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRenewableMaterialConfiguration`.
   */
  delete(
    id: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRenewableMaterialConfiguration<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRenewableMaterialConfiguration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRenewableMaterialConfiguration` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRenewableMaterialConfiguration<T>
  ): DeleteRequestBuilder<MaintainRenewableMaterialConfiguration<T>, T>;
  delete(
    idOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRenewableMaterialConfiguration<T>, T> {
    return new DeleteRequestBuilder<
      MaintainRenewableMaterialConfiguration<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainRenewableMaterialConfiguration
        ? idOrEntity
        : {
            ID: idOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
