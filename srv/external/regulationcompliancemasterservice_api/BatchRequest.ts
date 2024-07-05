/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  MaintainRegulationType,
  MaintainTransactionType,
  MaintainRegulationTransactionType,
  MaintainFuelMapping,
  MaintainRegulationObjectType,
  MaintainRegulationGroup,
  MaintainRegulationMaterialGroup,
  MaintainAdjustmentReasonCode,
  MaintainInventoryPostingPlant,
  MaintainIncotermsImpactForImportOrExport,
  MaintainDateToleranceForAutoMatch,
  MaintainVolumeToleranceForAutoMatch,
  MaintainRegulationTransactionTypeWithImpact,
  MaintainMovementType,
  MaintainMovementTypeToTransactionCategoryMapping,
  MaintainRenewableMovementType,
  MaintainRfs2Material,
  MaintainCompanyIdToPlantMapping,
  MaintainCompanyIdOrPlantToFacilityIdMapping,
  MaintainRegulationSubScenarioToScenario,
  MaintainActionSubScenarioMapping,
  ManageRegulationTypeAndActive,
  ManageRegulationTypeAndObjectCategory,
  MaintainIdRangeForRenewableObjectSequence,
  MaintainRegulationGroupView,
  MaintainRegulationMaterialGroupView,
  MaintainIdRangeForRenewableObject,
  MaintainIdRangeForReconciliationGroup,
  RegulationCategory,
  Countries,
  RegulationUom,
  TransactionCategory,
  FuelCategory,
  FuelSubCategory,
  ObjectType,
  ObjectCategory,
  Impact,
  PassRetainIndicator,
  Mode,
  Rfs2DebitType,
  Rfs2FuelCode,
  TransactionSourceScenario,
  RegulationSubType,
  ActionInventory,
  Countries_Texts,
  ObjectType_Texts,
  Mode_Texts,
  GetNextRenewableIdParameters
} from './index';

/**
 * Batch builder for operations supported on the Regulationcompliancemasterservice Api.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultRegulationcompliancemasterserviceApiPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Regulationcompliancemasterservice Api.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    WriteRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<
    WriteRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
    | Array<
        WriteRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
      >,
  ...rest: Array<
    WriteRegulationcompliancemasterserviceApiRequestBuilder<DeSerializersT>
  >
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultRegulationcompliancemasterserviceApiPath =
  '/service/RegulationComplianceMasterService';
export type ReadRegulationcompliancemasterserviceApiRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<MaintainRegulationType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MaintainTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationGroup<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationMaterialGroup<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainAdjustmentReasonCode<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainInventoryPostingPlant<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainDateToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainVolumeToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MaintainRfs2Material<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MaintainCompanyIdToPlantMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainIdRangeForRenewableObject<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<RegulationUom<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TransactionCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FuelCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FuelSubCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ObjectType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ObjectCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Impact<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PassRetainIndicator<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Mode<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Rfs2DebitType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Rfs2FuelCode<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TransactionSourceScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<RegulationSubType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ActionInventory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Countries_Texts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ObjectType_Texts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Mode_Texts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MaintainRegulationType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationGroup<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationMaterialGroup<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainAdjustmentReasonCode<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainInventoryPostingPlant<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainDateToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainVolumeToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MaintainRfs2Material<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MaintainCompanyIdToPlantMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainIdRangeForRenewableObject<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<RegulationUom<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TransactionCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FuelCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FuelSubCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ObjectType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ObjectCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Impact<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PassRetainIndicator<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Mode<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Rfs2DebitType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Rfs2FuelCode<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TransactionSourceScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<RegulationSubType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ActionInventory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Countries_Texts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ObjectType_Texts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Mode_Texts<DeSerializersT>, DeSerializersT>;
export type WriteRegulationcompliancemasterserviceApiRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<MaintainRegulationType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintainRegulationType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintainRegulationType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MaintainTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationTransactionType<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationObjectType<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationGroup<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationGroup<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationGroup<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationMaterialGroup<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationMaterialGroup<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationMaterialGroup<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainAdjustmentReasonCode<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainAdjustmentReasonCode<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainAdjustmentReasonCode<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainInventoryPostingPlant<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainInventoryPostingPlant<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainInventoryPostingPlant<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainIncotermsImpactForImportOrExport<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainDateToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainDateToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainDateToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainVolumeToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainVolumeToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainVolumeToleranceForAutoMatch<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationTransactionTypeWithImpact<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainMovementTypeToTransactionCategoryMapping<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MaintainRfs2Material<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintainRfs2Material<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintainRfs2Material<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MaintainCompanyIdToPlantMapping<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainCompanyIdToPlantMapping<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainCompanyIdToPlantMapping<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityIdMapping<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainActionSubScenarioMapping<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ManageRegulationTypeAndActive<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ManageRegulationTypeAndObjectCategory<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainIdRangeForRenewableObjectSequence<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationGroupView<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationMaterialGroupView<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainIdRangeForRenewableObject<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainIdRangeForRenewableObject<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainIdRangeForRenewableObject<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainIdRangeForReconciliationGroup<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<RegulationUom<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RegulationUom<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RegulationUom<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TransactionCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TransactionCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TransactionCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FuelCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FuelCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FuelCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FuelSubCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FuelSubCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FuelSubCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ObjectType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ObjectType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ObjectType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ObjectCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ObjectCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ObjectCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Impact<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Impact<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Impact<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PassRetainIndicator<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PassRetainIndicator<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PassRetainIndicator<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Mode<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Mode<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Mode<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Rfs2DebitType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Rfs2DebitType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Rfs2DebitType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Rfs2FuelCode<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Rfs2FuelCode<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Rfs2FuelCode<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TransactionSourceScenario<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TransactionSourceScenario<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TransactionSourceScenario<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<RegulationSubType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RegulationSubType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RegulationSubType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ActionInventory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ActionInventory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ActionInventory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Countries_Texts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Countries_Texts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Countries_Texts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ObjectType_Texts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ObjectType_Texts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ObjectType_Texts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Mode_Texts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Mode_Texts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Mode_Texts<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      GetNextRenewableIdParameters<DeSerializersT>,
      string | null
    >;
