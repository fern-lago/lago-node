/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const CreditNoteInputObject: core.serialization.ObjectSchema<
    serializers.CreditNoteInputObject.Raw,
    LagoApi.CreditNoteInputObject
> = core.serialization.object({
    invoiceId: core.serialization.property("invoice_id", core.serialization.string().optional()),
    reason: core.serialization.lazy(async () => (await import("../../..")).CreditNoteReason).optional(),
    description: core.serialization.string().optional(),
    creditAmountCents: core.serialization.property("credit_amount_cents", core.serialization.number().optional()),
    refundAmountCents: core.serialization.property("refund_amount_cents", core.serialization.number().optional()),
    items: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).CreditNoteItem))
        .optional(),
});

export declare namespace CreditNoteInputObject {
    interface Raw {
        invoice_id?: string | null;
        reason?: serializers.CreditNoteReason.Raw | null;
        description?: string | null;
        credit_amount_cents?: number | null;
        refund_amount_cents?: number | null;
        items?: serializers.CreditNoteItem.Raw[] | null;
    }
}
