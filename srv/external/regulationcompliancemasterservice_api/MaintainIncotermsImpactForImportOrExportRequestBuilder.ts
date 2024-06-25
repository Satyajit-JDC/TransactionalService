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
import { MaintainIncotermsImpactForImportOrExport } from './MaintainIncotermsImpactForImportOrExport';

/**
 * Request builder class for operations supported on the {@link MaintainIncotermsImpactForImportOrExport} entity.
 */
export class MaintainIncotermsImpactForImportOrExportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainIncotermsImpactForImportOrExport<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainIncotermsImpactForImportOrExport` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainIncotermsImpactForImportOrExport` entities.
   */
  getAll(): GetAllRequestBuilder<
    MaintainIncotermsImpactForImportOrExport<T>,
    T
  > {
    return new GetAllRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `MaintainIncotermsImpactForImportOrExport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainIncotermsImpactForImportOrExport`.
   */
  create(
    entity: MaintainIncotermsImpactForImportOrExport<T>
  ): CreateRequestBuilder<MaintainIncotermsImpactForImportOrExport<T>, T> {
    return new CreateRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `MaintainIncotermsImpactForImportOrExport` entity based on its keys.
   * @param id Key property. See {@link MaintainIncotermsImpactForImportOrExport.id}.
   * @param incoTerm Key property. See {@link MaintainIncotermsImpactForImportOrExport.incoTerm}.
   * @param isActiveEntity Key property. See {@link MaintainIncotermsImpactForImportOrExport.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainIncotermsImpactForImportOrExport` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>,
    incoTerm: DeserializedType<T, 'Edm.String'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainIncotermsImpactForImportOrExport<T>, T> {
    return new GetByKeyRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<T>,
      T
    >(this.entityApi, {
      ID: id,
      incoTerm: incoTerm,
      IsActiveEntity: isActiveEntity
    });
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainIncotermsImpactForImportOrExport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainIncotermsImpactForImportOrExport`.
   */
  update(
    entity: MaintainIncotermsImpactForImportOrExport<T>
  ): UpdateRequestBuilder<MaintainIncotermsImpactForImportOrExport<T>, T> {
    return new UpdateRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainIncotermsImpactForImportOrExport`.
   * @param id Key property. See {@link MaintainIncotermsImpactForImportOrExport.id}.
   * @param incoTerm Key property. See {@link MaintainIncotermsImpactForImportOrExport.incoTerm}.
   * @param isActiveEntity Key property. See {@link MaintainIncotermsImpactForImportOrExport.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIncotermsImpactForImportOrExport`.
   */
  delete(
    id: string,
    incoTerm: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainIncotermsImpactForImportOrExport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainIncotermsImpactForImportOrExport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainIncotermsImpactForImportOrExport` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainIncotermsImpactForImportOrExport<T>
  ): DeleteRequestBuilder<MaintainIncotermsImpactForImportOrExport<T>, T>;
  delete(
    idOrEntity: any,
    incoTerm?: string,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainIncotermsImpactForImportOrExport<T>, T> {
    return new DeleteRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<T>,
      T
    >(
      this.entityApi,
      idOrEntity instanceof MaintainIncotermsImpactForImportOrExport
        ? idOrEntity
        : {
            ID: idOrEntity!,
            incoTerm: incoTerm!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
