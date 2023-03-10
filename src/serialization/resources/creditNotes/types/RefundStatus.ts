/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const RefundStatus: core.serialization.Schema<serializers.RefundStatus.Raw, LagoApi.RefundStatus> =
    core.serialization.enum_(["pending", "succeeded", "failed"]);

export declare namespace RefundStatus {
    type Raw = "pending" | "succeeded" | "failed";
}
