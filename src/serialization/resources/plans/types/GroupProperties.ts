/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { LagoApi } from "@fern-api/lago";
import * as core from "../../../../core";

export const GroupProperties: core.serialization.ObjectSchema<
    serializers.GroupProperties.Raw,
    LagoApi.GroupProperties
> = core.serialization.object({
    groupId: core.serialization.property("group_id", core.serialization.string().optional()),
    values: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace GroupProperties {
    interface Raw {
        group_id?: string | null;
        values?: Record<string, unknown> | null;
    }
}