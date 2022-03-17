---
title: Bulk Data Insertion API endpoints
description: All of the available endpoints related to the BDIA.
---

# Bulk Data Insertion API endpoints

Once you have met all [prerequisites](index.md), have a [correctly formatted file](file-format.md) and have checked your file for syntax errors with our [validation](#validate) tool, you can begin making API calls to Adobe's ingestion endpoint for this API.

## Primary ingestion endpoint

The file ingestion endpoint is found here.

`POST https://analytics-collection.adobe.io/aa/collect/v1/events`

Include all of the required headers with each API call:

* **`Authorization`**: Required for authentication with the API. Format is the string `"Bearer {ACCESS_TOKEN}`.
* **`x-api-key`**: Required for authentication with the API. Found in the Adobe I/O console under the JWT service credentials as "Client ID".
* **`x-adobe-vgid`**: Required for this endpoint. The visitor group ID. See [Visitor groups](visitor-groups.md).
* **`x-adobe-idempotency-key`**: Optional. Allows you to manually specify the `file_id` of the file contained in the API call. If you do not send this header, Adobe automatically generates a `file_id` for you and includes it in the response JSON object.

You must also add the file, which should be compressed in gzip format, and included as multipart/form-data.

The `https://analytics-collection.adobe.io` domain automatically routes your API call to the best region for processing. However, if you are legally required to have your data processed in a specific part of the world, you can use one of the following regional host names for API calls:

* **US processing**: `https://analytics-collection-va7.adobe.io`
* **European processing**: `https://analytics-collection-nld2.adobe.io`

<CodeBlock slots="heading, code" repeat="2" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST -H "accept: application/json" \
    -H "Authorization: Bearer {ACCESS_TOKEN}" \
    -H "x-api-key: {API_KEY/CLIENT_ID}" \
    -H "x-adobe-vgid: example_group" \
    -F file=@/tmp/ingest_file.gz \
    "https://analytics-collection.adobe.io/aa/collect/v1/events"
```

#### Response

```json
{
  "file_id": "5c04f400-fca5-420c-9c36-b94aaec55e69",
  "visitor_group_id": "example_group",
  "size": 355600,
  "received_date": 1506553535,
  "processing_start_date": 1506553492,
  "processing_end_date": 1506553492,
  "file_reader_complete_date": 1506553492,
  "rows": 10000,
  "invalid_rows": 42,
  "upload_name": "ingest_file.gz",
  "status": "string",
  "status_code": "UPLOADED",
  "processing_log": "string",
  "success": "File is valid"
}
```

### Response object details

When you upload a file to this endpoint, Adobe returns a JSON object that can contain the following fields:

Field | Data type | Description
--- | --- | ---
`file_id` | string | Unique identifier for the file upload transaction. Automatically generated by Adobe unless you include the `x-adobe-idempotency-key` header in the API call.
`visitor_group` | string | Name of the visitor group as stated in the `x-adobe-vgid` header. See [Visitor groups](visitor-groups.md).
`size` | long | The size of the uploaded file in bytes.
`received_date` | long | The Unix timestamp when the file was received
`rows` | integer | The number of rows contained in the file
`invalid_rows` | integer | The number of invalid rows identified in the file
`upload_name` | string | The name of the file included in the request
`status_code` | string | The status of the file upload. Valid values include `UPLOADED` or `REJECTED`.
`status` | string | More verbose details around the `status_code`
`processing_log` | string | Details around specific issues encountered. If an error type has 10 or less problem rows, they are explicitly mentioned. If an error type has more than 10 problem rows, summarized results are provided.

## Validate

Before uploading your first file, Adobe strongly recommends running the file through the validation endpoint. Please note, you should not send EVERY file to this endpoint. This endpoint exists to validate file format before you begin uploading them to the `events` endpoint. Files uploaded to this endpoint are not stored on Adobe's servers or processed. This API is synchronous and returns an immediate reply that states the file's validation status. If a file fails validation, the reason is also returned. See [Troubleshoot uploads](troubleshooting.md) for more information.

`POST https://analytics-collection.adobe.io/aa/collect/v1/events/validate`

<CodeBlock slots="heading, code" repeat="3" languages="CURL,JSON"/>

#### Request

```sh
curl -X POST -H "accept: application/json" \
    -H "Authorization: Bearer {ACCESS_TOKEN}" \
    -H "x-api-key: {API_KEY/CLIENT_ID}" \
    -H "x-adobe-vgid: example_group" \
    -F file=@/tmp/ingest_file.gz \
    "https://analytics.adobe.io/aa/collect/v1/events/validate"
```

#### Success response

```json
{
    "success": "file is valid"
}
```

#### Failure response - invalid rows

```json
{
    "error": "File has 2 rows that do not conform to the required CSV format! (Ex: row #59)"
}
```