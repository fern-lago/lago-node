/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const WalletTransactionInputObject: core.serialization.ObjectSchema<
    serializers.WalletTransactionInputObject.Raw,
    LagoApi.WalletTransactionInputObject
> = core.serialization.object({
    walletId: core.serialization.property("wallet_id", core.serialization.string().optional()),
    paidCredits: core.serialization.property("paid_credits", core.serialization.number().optional()),
    grantedCredits: core.serialization.property("granted_credits", core.serialization.number().optional()),
});

export declare namespace WalletTransactionInputObject {
    interface Raw {
        wallet_id?: string | null;
        paid_credits?: number | null;
        granted_credits?: number | null;
    }
}