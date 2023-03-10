/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const WalletInputObject: core.serialization.ObjectSchema<
    serializers.WalletInputObject.Raw,
    LagoApi.WalletInputObject
> = core.serialization.object({
    name: core.serialization.string().optional(),
    rateAmount: core.serialization.property("rate_amount", core.serialization.number().optional()),
    currency: core.serialization.string().optional(),
    paidCredits: core.serialization.property("paid_credits", core.serialization.number().optional()),
    grantedCredits: core.serialization.property("granted_credits", core.serialization.number().optional()),
    externalCustomerId: core.serialization.property("external_customer_id", core.serialization.string().optional()),
    expirationAt: core.serialization.property("expiration_at", core.serialization.string().optional()),
});

export declare namespace WalletInputObject {
    interface Raw {
        name?: string | null;
        rate_amount?: number | null;
        currency?: string | null;
        paid_credits?: number | null;
        granted_credits?: number | null;
        external_customer_id?: string | null;
        expiration_at?: string | null;
    }
}
