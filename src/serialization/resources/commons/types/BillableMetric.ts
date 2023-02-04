/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const BillableMetric: core.serialization.ObjectSchema<serializers.BillableMetric.Raw, LagoApi.BillableMetric> =
    core.serialization.object({
        billableMetric: core.serialization.property(
            "billable_metric",
            core.serialization.lazyObject(async () => (await import("../../..")).BillableMetricObject).optional()
        ),
    });

export declare namespace BillableMetric {
    interface Raw {
        billable_metric?: serializers.BillableMetricObject.Raw | null;
    }
}
