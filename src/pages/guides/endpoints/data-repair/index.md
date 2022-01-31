---
title: Data Repair API
description: Delete or edit Adobe Analytics data.
---

# Data Repair API

The Data Repair API provides you with a way to delete or edit your existing Adobe Analytics data.  Repair requests are made by you submitting a job definition to the Data Repair API, which includes the Report Suite, date range, variables and actions to be applied to your data.

<InlineAlert variant="warning" slots="text"/>

Use of the Data Repair API permanently deletes or edits existing Adobe Analytics data. Adobe recommends that you take a careful approach when executing Data Repair API jobs to minimize accidental deletion or alteration of your data. Read through all pages of this guide carefully before using the Data Repair API.

## Prerequisites

Before using the Data Repair API, make sure that all the following prerequisites are met:

* Confirm that your Sales Order includes the use of the Data Repair API. The Data Repair API is a paid service. Reach out to your Adobe Account Manager for details and confirmation of your status.
* You successfully authenticate with the Adobe Analytics 2.0 API using a JSON Web Token (JWT). OAuth is not supported. See [Getting started with the Analytics API](../../index.md) to make sure that you have the correct API permissions in the Adobe Admin Console, create an API client on Adobe I/O, and that you successfully authenticate. Make sure that you include the "Data Repair API" permission item when creating a product profile in the Adobe Admin Console.

   ![data repair permission](../../../images/data-repair-permission.png)

## Workflow

Adobe recommends a careful and methodical approach when using the Data Repair API due to its ability to permanently delete or edit your data. The following steps provide multiple checkpoints to minimize the risk of accidental data deletion. Review the data after each step to confirm that the data repair job completes as expected. Adobe recommends that you create a data repair job for each of the following in order:

* A **development** Report Suite for **one day** of data.
* A **development** Report Suite for **one month** of data.
* The **production** Report Suite for **one day** of data.
* The **production** Report Suite for **one month** of data.
* Once all of your testing and validation is complete, you can proceed with the **full date range** of the data repair for **production** data.

The following steps provide a typical Data Repair API request workflow:

1. **Estimate repair size**: The Data Repair API incurs charges based on the number of Data Rows Scanned. The [Server call estimate](server-call-estimate.md) endpoint is a required step to help you estimate the cost of a repair. It returns a count of the Server Call volume for the Report Suite date range. The endpoint also returns a `validationToken`, which is required for step 2.

1. **Create a data repair job**: Use the [Job](job.md) endpoint to create a data repair job. This endpoint requires a Report Suite, date range, `validationToken` (from [Server call estimate](server-call-estimate.md)), and a [Job definition](json-body.md). A Job ID is returned when a data repair job is created.

1. **Monitor progress**: Use the [Job ID](job.md#view-an-individual-job) endpoint to monitor the status of a data repair job at any point after a data repair job submission. Completion time of a data repair job depends on its size; small jobs can complete within hours while large jobs can take multiple days.

1. **Review completed jobs**: Use the [Job list](job.md#view-a-job-list) endpoint to keep track of all existing and completed jobs.