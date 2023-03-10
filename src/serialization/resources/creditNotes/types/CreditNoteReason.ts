/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const CreditNoteReason: core.serialization.Schema<serializers.CreditNoteReason.Raw, LagoApi.CreditNoteReason> =
    core.serialization.enum_([
        "duplicated_charge",
        "product_unsatisfactory",
        "order_change",
        "order_cancellation",
        "fraudulent_charge",
        "other",
    ]);

export declare namespace CreditNoteReason {
    type Raw =
        | "duplicated_charge"
        | "product_unsatisfactory"
        | "order_change"
        | "order_cancellation"
        | "fraudulent_charge"
        | "other";
}
