/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const WalletTransactionInput: core.serialization.ObjectSchema<
    serializers.WalletTransactionInput.Raw,
    LagoApi.WalletTransactionInput
> = core.serialization.object({
    walletTransaction: core.serialization.property(
        "wallet_transaction",
        core.serialization.lazyObject(async () => (await import("../../..")).WalletTransactionInputObject).optional()
    ),
});

export declare namespace WalletTransactionInput {
    interface Raw {
        wallet_transaction?: serializers.WalletTransactionInputObject.Raw | null;
    }
}