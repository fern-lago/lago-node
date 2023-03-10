/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { LagoApi } from "@fern-api/lago";

/**
 * @example
 *     {
 *         lagoId: "b7ab2926-1de8-4428-9bcd-779314ac129b",
 *         name: "bm_name",
 *         code: "bm_code",
 *         description: "description",
 *         aggregationType: LagoApi.AggregationType.SumAgg,
 *         fieldName: "amount_sum",
 *         createdAt: "2022-04-29T08:59:51Z",
 *         group: {},
 *         activeSubscriptionsCount: 0,
 *         draftInvoicesCount: 0
 *     }
 */
export interface BillableMetricObject {
    lagoId?: string;
    /** The name of the billable metric. */
    name?: string;
    code?: string;
    description?: string;
    createdAt?: string;
    fieldName?: string;
    aggregationType?: LagoApi.AggregationType;
    group?: LagoApi.BillableMetricGroup;
    activeSubscriptionsCount?: number;
    draftInvoicesCount?: number;
}
