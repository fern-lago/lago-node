/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { LagoApi } from "@fern-api/lago";

/**
 * @example
 *     {
 *         groups: [{
 *                 lagoId: "b7ab2926-1de8-4428-9bcd-779314ac129b",
 *                 key: "group_key",
 *                 value: "group_value"
 *             }]
 *     }
 */
export interface Groups {
    groups?: LagoApi.GroupObject[];
}