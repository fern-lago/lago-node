/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const LagoApiEnvironment = {
    Production: "https://api.getlago.com/api/v1",
    Sandbox: "https://sandbox.example.com",
} as const;

export type LagoApiEnvironment = typeof LagoApiEnvironment.Production | typeof LagoApiEnvironment.Sandbox;