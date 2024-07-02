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
import { Za_MaterialCharacteristics_R } from './Za_MaterialCharacteristics_R';

/**
 * Request builder class for operations supported on the {@link Za_MaterialCharacteristics_R} entity.
 */
export class Za_MaterialCharacteristics_RRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Za_MaterialCharacteristics_R<T>, T> {
  /**
   * Returns a request builder for querying all `Za_MaterialCharacteristics_R` entities.
   * @returns A request builder for creating requests to retrieve all `Za_MaterialCharacteristics_R` entities.
   */
  getAll(): GetAllRequestBuilder<Za_MaterialCharacteristics_R<T>, T> {
    return new GetAllRequestBuilder<Za_MaterialCharacteristics_R<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `Za_MaterialCharacteristics_R` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Za_MaterialCharacteristics_R`.
   */
  create(
    entity: Za_MaterialCharacteristics_R<T>
  ): CreateRequestBuilder<Za_MaterialCharacteristics_R<T>, T> {
    return new CreateRequestBuilder<Za_MaterialCharacteristics_R<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Za_MaterialCharacteristics_R` entity based on its keys.
   * @param objectKey Key property. See {@link Za_MaterialCharacteristics_R.objectKey}.
   * @param internalCharacteristic Key property. See {@link Za_MaterialCharacteristics_R.internalCharacteristic}.
   * @param characteristicValueCounter Key property. See {@link Za_MaterialCharacteristics_R.characteristicValueCounter}.
   * @param identifierObjectClass Key property. See {@link Za_MaterialCharacteristics_R.identifierObjectClass}.
   * @param classType Key property. See {@link Za_MaterialCharacteristics_R.classType}.
   * @param internalCounter Key property. See {@link Za_MaterialCharacteristics_R.internalCounter}.
   * @returns A request builder for creating requests to retrieve one `Za_MaterialCharacteristics_R` entity based on its keys.
   */
  getByKey(
    objectKey: DeserializedType<T, 'Edm.String'>,
    internalCharacteristic: DeserializedType<T, 'Edm.String'>,
    characteristicValueCounter: DeserializedType<T, 'Edm.String'>,
    identifierObjectClass: DeserializedType<T, 'Edm.String'>,
    classType: DeserializedType<T, 'Edm.String'>,
    internalCounter: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Za_MaterialCharacteristics_R<T>, T> {
    return new GetByKeyRequestBuilder<Za_MaterialCharacteristics_R<T>, T>(
      this.entityApi,
      {
        ObjectKey: objectKey,
        InternalCharacteristic: internalCharacteristic,
        CharacteristicValueCounter: characteristicValueCounter,
        IdentifierObjectClass: identifierObjectClass,
        ClassType: classType,
        InternalCounter: internalCounter
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Za_MaterialCharacteristics_R`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Za_MaterialCharacteristics_R`.
   */
  update(
    entity: Za_MaterialCharacteristics_R<T>
  ): UpdateRequestBuilder<Za_MaterialCharacteristics_R<T>, T> {
    return new UpdateRequestBuilder<Za_MaterialCharacteristics_R<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Za_MaterialCharacteristics_R`.
   * @param objectKey Key property. See {@link Za_MaterialCharacteristics_R.objectKey}.
   * @param internalCharacteristic Key property. See {@link Za_MaterialCharacteristics_R.internalCharacteristic}.
   * @param characteristicValueCounter Key property. See {@link Za_MaterialCharacteristics_R.characteristicValueCounter}.
   * @param identifierObjectClass Key property. See {@link Za_MaterialCharacteristics_R.identifierObjectClass}.
   * @param classType Key property. See {@link Za_MaterialCharacteristics_R.classType}.
   * @param internalCounter Key property. See {@link Za_MaterialCharacteristics_R.internalCounter}.
   * @returns A request builder for creating requests that delete an entity of type `Za_MaterialCharacteristics_R`.
   */
  delete(
    objectKey: string,
    internalCharacteristic: string,
    characteristicValueCounter: string,
    identifierObjectClass: string,
    classType: string,
    internalCounter: string
  ): DeleteRequestBuilder<Za_MaterialCharacteristics_R<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Za_MaterialCharacteristics_R`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Za_MaterialCharacteristics_R` by taking the entity as a parameter.
   */
  delete(
    entity: Za_MaterialCharacteristics_R<T>
  ): DeleteRequestBuilder<Za_MaterialCharacteristics_R<T>, T>;
  delete(
    objectKeyOrEntity: any,
    internalCharacteristic?: string,
    characteristicValueCounter?: string,
    identifierObjectClass?: string,
    classType?: string,
    internalCounter?: string
  ): DeleteRequestBuilder<Za_MaterialCharacteristics_R<T>, T> {
    return new DeleteRequestBuilder<Za_MaterialCharacteristics_R<T>, T>(
      this.entityApi,
      objectKeyOrEntity instanceof Za_MaterialCharacteristics_R
        ? objectKeyOrEntity
        : {
            ObjectKey: objectKeyOrEntity!,
            InternalCharacteristic: internalCharacteristic!,
            CharacteristicValueCounter: characteristicValueCounter!,
            IdentifierObjectClass: identifierObjectClass!,
            ClassType: classType!,
            InternalCounter: internalCounter!
          }
    );
  }
}
