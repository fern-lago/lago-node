/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const TransactionStatus: core.serialization.Schema<
    serializers.TransactionStatus.Raw,
    LagoApi.TransactionStatus
> = core.serialization.enum_(["pending", "settled"]);

export declare namespace TransactionStatus {
    type Raw = "pending" | "settled";
}