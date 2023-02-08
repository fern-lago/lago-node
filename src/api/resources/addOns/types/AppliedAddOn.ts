/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { LagoApi } from "@fern-api/lago";

/**
 * @example
 *     {
 *         appliedAddOn: {
 *             lagoId: "b7ab2926-1de8-4428-9bcd-779314ac129b",
 *             lagoAddOnId: "b7ab2926-1de8-4428-9bcd-779314ac129b",
 *             addOnCode: "add-on-code",
 *             externalCustomerId: "5eb02857-a71e-4ea2-bcf9-57d3a41bc6ba",
 *             lagoCustomerId: "99a6094e-199b-4101-896a-54e927ce7bd7",
 *             amountCents: 123,
 *             amountCurrency: "EUR",
 *             createdAt: "2022-04-29T08:59:51Z"
 *         }
 *     }
 */
export interface AppliedAddOn {
    appliedAddOn?: LagoApi.AppliedAddOnObject;
}