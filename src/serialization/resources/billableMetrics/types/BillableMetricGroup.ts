/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const BillableMetricGroup: core.serialization.ObjectSchema<
    serializers.BillableMetricGroup.Raw,
    LagoApi.BillableMetricGroup
> = core.serialization.object({
    key: core.serialization.string().optional(),
    values: core.serialization.list(core.serialization.unknown()).optional(),
});

export declare namespace BillableMetricGroup {
    interface Raw {
        key?: string | null;
        values?: unknown[] | null;
    }
}