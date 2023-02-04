/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const PlanInterval: core.serialization.Schema<serializers.PlanInterval.Raw, LagoApi.PlanInterval> =
    core.serialization.enum_(["weekly", "monthly", "yearly"]);

export declare namespace PlanInterval {
    type Raw = "weekly" | "monthly" | "yearly";
}
