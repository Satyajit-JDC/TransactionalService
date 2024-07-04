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
import { MaintainRegulationType } from './MaintainRegulationType';

/**
 * Request builder class for operations supported on the {@link MaintainRegulationType} entity.
 */
export class MaintainRegulationTypeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaintainRegulationType<T>, T> {
  /**
   * Returns a request builder for querying all `MaintainRegulationType` entities.
   * @returns A request builder for creating requests to retrieve all `MaintainRegulationType` entities.
   */
  getAll(): GetAllRequestBuilder<MaintainRegulationType<T>, T> {
    return new GetAllRequestBuilder<MaintainRegulationType<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaintainRegulationType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaintainRegulationType`.
   */
  create(
    entity: MaintainRegulationType<T>
  ): CreateRequestBuilder<MaintainRegulationType<T>, T> {
    return new CreateRequestBuilder<MaintainRegulationType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaintainRegulationType` entity based on its keys.
   * @param regulationType Key property. See {@link MaintainRegulationType.regulationType}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationType.isActiveEntity}.
   * @returns A request builder for creating requests to retrieve one `MaintainRegulationType` entity based on its keys.
   */
  getByKey(
    regulationType: DeserializedType<T, 'Edm.String'>,
    isActiveEntity: DeserializedType<T, 'Edm.Boolean'>
  ): GetByKeyRequestBuilder<MaintainRegulationType<T>, T> {
    return new GetByKeyRequestBuilder<MaintainRegulationType<T>, T>(
      this.entityApi,
      {
        regulationType: regulationType,
        IsActiveEntity: isActiveEntity
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaintainRegulationType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaintainRegulationType`.
   */
  update(
    entity: MaintainRegulationType<T>
  ): UpdateRequestBuilder<MaintainRegulationType<T>, T> {
    return new UpdateRequestBuilder<MaintainRegulationType<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationType`.
   * @param regulationType Key property. See {@link MaintainRegulationType.regulationType}.
   * @param isActiveEntity Key property. See {@link MaintainRegulationType.isActiveEntity}.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationType`.
   */
  delete(
    regulationType: string,
    isActiveEntity: boolean
  ): DeleteRequestBuilder<MaintainRegulationType<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaintainRegulationType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaintainRegulationType` by taking the entity as a parameter.
   */
  delete(
    entity: MaintainRegulationType<T>
  ): DeleteRequestBuilder<MaintainRegulationType<T>, T>;
  delete(
    regulationTypeOrEntity: any,
    isActiveEntity?: boolean
  ): DeleteRequestBuilder<MaintainRegulationType<T>, T> {
    return new DeleteRequestBuilder<MaintainRegulationType<T>, T>(
      this.entityApi,
      regulationTypeOrEntity instanceof MaintainRegulationType
        ? regulationTypeOrEntity
        : {
            regulationType: regulationTypeOrEntity!,
            IsActiveEntity: isActiveEntity!
          }
    );
  }
}
