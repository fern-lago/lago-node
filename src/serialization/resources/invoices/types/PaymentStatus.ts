/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const PaymentStatus: core.serialization.Schema<serializers.PaymentStatus.Raw, LagoApi.PaymentStatus> =
    core.serialization.enum_(["pending", "succeeded", "failed"]);

export declare namespace PaymentStatus {
    type Raw = "pending" | "succeeded" | "failed";
}