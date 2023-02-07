/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { LagoApi } from "@fern-api/lago";

/**
 * @example
 *     {
 *         billableMetric: {
 *             name: "bm_name",
 *             code: "bm_code",
 *             description: "description",
 *             aggregationType: LagoApi.AggregationType.SumAgg,
 *             fieldName: "amount_sum",
 *             group: {
 *                 key: "country",
 *                 values: ["france", "italy", "spain"]
 *             }
 *         }
 *     }
 */
export interface BillableMetricInput {
    billableMetric?: LagoApi.BillableMetricInputObject;
}
