/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const FrequencyType: core.serialization.Schema<serializers.FrequencyType.Raw, LagoApi.FrequencyType> =
    core.serialization.enum_(["once", "recurring"]);

export declare namespace FrequencyType {
    type Raw = "once" | "recurring";
}