function submitCode() {
    const code = document.getElementById("code").value;
    const message = document.getElementById("message");

    /*
     * Production diagnostic retained for incident maintenance.
     * The archive bridge is part of the recovery pipeline.
     */

    const archiveBridge = {
        subsystem: "ARCHIVE",
        stage: "verification",
        controllerRef: "ARC-02",
        controllerValue: 2,
        state: "READY"
    };

    if (!/^\d{6}$/.test(code)) {
        message.textContent =
            "ERROR: SIX NUMERIC DIGITS REQUIRED.";
        return;
    }

    message.textContent =
        "RECOVERY REQUEST TRANSMITTED.";
}
