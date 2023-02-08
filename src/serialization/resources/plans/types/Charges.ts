/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const Charges: core.serialization.ObjectSchema<serializers.Charges.Raw, LagoApi.Charges> =
    core.serialization.object({
        id: core.serialization.string().optional(),
        billableMetricId: core.serialization.property("billable_metric_id", core.serialization.string().optional()),
        chargeModel: core.serialization.property(
            "charge_model",
            core.serialization.lazy(async () => (await import("../../..")).ChargeModel).optional()
        ),
        properties: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
        groupProperties: core.serialization.property(
            "group_properties",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).GroupProperties))
                .optional()
        ),
    });

export declare namespace Charges {
    interface Raw {
        id?: string | null;
        billable_metric_id?: string | null;
        charge_model?: serializers.ChargeModel.Raw | null;
        properties?: Record<string, unknown> | null;
        group_properties?: serializers.GroupProperties.Raw[] | null;
    }
}