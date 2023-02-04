/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const WalletInput: core.serialization.ObjectSchema<serializers.WalletInput.Raw, LagoApi.WalletInput> =
    core.serialization.object({
        wallet: core.serialization.lazyObject(async () => (await import("../../..")).WalletInputObject).optional(),
    });

export declare namespace WalletInput {
    interface Raw {
        wallet?: serializers.WalletInputObject.Raw | null;
    }
}
