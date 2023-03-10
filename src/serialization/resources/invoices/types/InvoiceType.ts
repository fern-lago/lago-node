/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const InvoiceType: core.serialization.Schema<serializers.InvoiceType.Raw, LagoApi.InvoiceType> =
    core.serialization.enum_(["charge", "add_on", "subscription", "credit"]);

export declare namespace InvoiceType {
    type Raw = "charge" | "add_on" | "subscription" | "credit";
}
