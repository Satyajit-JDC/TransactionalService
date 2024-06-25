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
  MaintainRegulationTransactionTypeTs,
  MaintainFuelMapping,
  MaintainRegulationObjecttype,
  MaintainRegulationGroup,
  MaintainRegulationMaterialGroup,
  MaintainAdjustmentReasonCode,
  MaintainInventoryPostingPlant,
  MaintainIncotermsImpactForImportOrExport,
  MaintainRegulationToleranceForDateMatch,
  MaintainRegulatonToleranceForVolumeMatch,
  MaintainRegulationTransactionTypeBu,
  MaintainMovementType,
  MaintainMovementTypeToTransactionCategoryImpact,
  MaintainRenewableMovementType,
  MaintainRenewableMaterialConfiguration,
  MaintainCompanyIdToPlant,
  MaintainCompanyIdOrPlantToFacilityId,
  MaintainRegulationSubScenarioToScenario,
  MaintainRegulationSubScenarioAction,
  ManageRegulationTypeAndActive,
  ManageRegulationTypeAndObjectCategory,
  MaintainIdRangeForRenewableObjectSequence,
  MaintainRegulationGroupView,
  MaintainRegulationMaterialGroupView,
  MaintainIdRangeForRenewableObjects,
  MaintainIdRangeForReconciliationGroups,
  RegulationCategory,
  Countries,
  Uom,
  TransactionCategory,
  FuelCategory,
  FuelSubCategory,
  ObjectType,
  ObjectCategory,
  Impact,
  PassRetainIndicator,
  Mode,
  Rfs2DebitType,
  FuelCode,
  TransactionSourceScenario,
  RegulationSubCategory,
  Action,
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
      MaintainRegulationTransactionTypeTs<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MaintainRegulationObjecttype<DeSerializersT>,
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
      MaintainRegulationToleranceForDateMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationTransactionTypeBu<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainCompanyIdToPlant<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityId<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
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
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      MaintainIdRangeForReconciliationGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Uom<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TransactionCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FuelCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FuelSubCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ObjectType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ObjectCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Impact<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PassRetainIndicator<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Mode<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Rfs2DebitType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FuelCode<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TransactionSourceScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<RegulationSubCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Action<DeSerializersT>, DeSerializersT>
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
      MaintainRegulationTransactionTypeTs<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MaintainRegulationObjecttype<DeSerializersT>,
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
      MaintainRegulationToleranceForDateMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationTransactionTypeBu<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRenewableMovementType<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainCompanyIdToPlant<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityId<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationSubScenarioToScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
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
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      MaintainIdRangeForReconciliationGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Uom<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TransactionCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FuelCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FuelSubCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ObjectType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ObjectCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Impact<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PassRetainIndicator<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Mode<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Rfs2DebitType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FuelCode<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TransactionSourceScenario<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      RegulationSubCategory<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Action<DeSerializersT>, DeSerializersT>
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
      MaintainRegulationTransactionTypeTs<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationTransactionTypeTs<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationTransactionTypeTs<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintainFuelMapping<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MaintainRegulationObjecttype<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationObjecttype<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationObjecttype<DeSerializersT>,
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
      MaintainRegulationToleranceForDateMatch<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationToleranceForDateMatch<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationToleranceForDateMatch<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulatonToleranceForVolumeMatch<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainRegulationTransactionTypeBu<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationTransactionTypeBu<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationTransactionTypeBu<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaintainMovementType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainMovementTypeToTransactionCategoryImpact<DeSerializersT>,
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
  | CreateRequestBuilder<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRenewableMaterialConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainCompanyIdToPlant<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainCompanyIdToPlant<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainCompanyIdToPlant<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityId<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityId<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainCompanyIdOrPlantToFacilityId<DeSerializersT>,
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
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainRegulationSubScenarioAction<DeSerializersT>,
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
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainIdRangeForRenewableObjects<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      MaintainIdRangeForReconciliationGroups<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MaintainIdRangeForReconciliationGroups<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MaintainIdRangeForReconciliationGroups<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RegulationCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Uom<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Uom<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Uom<DeSerializersT>, DeSerializersT>
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
  | CreateRequestBuilder<FuelCode<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FuelCode<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FuelCode<DeSerializersT>, DeSerializersT>
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
  | CreateRequestBuilder<RegulationSubCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RegulationSubCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RegulationSubCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Action<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Action<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Action<DeSerializersT>, DeSerializersT>
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
