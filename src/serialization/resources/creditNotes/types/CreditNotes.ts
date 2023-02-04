/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const CreditNotes: core.serialization.ObjectSchema<serializers.CreditNotes.Raw, LagoApi.CreditNotes> =
    core.serialization.object({
        creditNotes: core.serialization.property(
            "credit_notes",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).CreditNoteObject))
                .optional()
        ),
    });

export declare namespace CreditNotes {
    interface Raw {
        credit_notes?: serializers.CreditNoteObject.Raw[] | null;
    }
}
