/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const BillingTime: core.serialization.Schema<serializers.BillingTime.Raw, LagoApi.BillingTime> =
    core.serialization.enum_(["calendar", "anniversary"]);

export declare namespace BillingTime {
    type Raw = "calendar" | "anniversary";
}
