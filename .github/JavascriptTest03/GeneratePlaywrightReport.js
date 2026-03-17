function generatePlaywrightReport(results) {
    let passedCount = 0;
    let failedCount = 0;
    let skippedCount = 0;
    let totalDuration = 0;
    const failedNames = [];

    for (const step of results) {
        // 1. Total duration
        totalDuration += step.durationMs;

        // 2. Count Test statuses and collect failed names if any
        if (step.status === "passed") {
            passedCount++;
        } else if (step.status === "failed") {
            failedCount++;
            failedNames.push(step.name);
        } else if (step.status === "skipped") {
            skippedCount++;
        }
    }

    // 3. Generate the formatted report
    const report = `
    --- PLAYWRIGHT TEST SUMMARY ---
    Total Steps:    ${results.length}
    Passed:         ${passedCount}
    Failed:         ${failedCount}
    Skipped:        ${skippedCount}
    Total Duration: ${totalDuration}ms
    Failed Steps:   ${failedNames.length > 0 ? failedNames.join(", ") : "None"}
    -------------------------------
    `;

    console.log(report.trim());
}