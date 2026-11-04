---
title: report:mail
---

## Description
Send one scheduled report now, whatever its schedule says.

The report covers the period it is set for, relative to today. What the schedule has already sent
is left alone: only the date of the last send changes.

The command ends with `1` when the report could not be sent to every recipient, or when the report
does not exist. Its output holds ids and counts only.

## Usage
```shell
report:mail <id>
```

## Arguments
 -    `id`  The id of the scheduled report. Required.

## Example
Send the report 3 now:
```shell
php Thelia report:mail 3
```

See [Scheduled reports](../../features/scheduled-reports.md).
