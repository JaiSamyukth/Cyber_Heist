# 🔐 CYBER HEIST

## OPERATION: BLACKOUT
### INCIDENT RESPONSE CASE: BLACKOUT-042

**Organization:** NEXUS Systems  
**Affected System:** NEXUS CORE  
**Administrator:** Adrian Vale  
**Incident Date:** 2026-08-21

---

## THE INCIDENT

At approximately **08:31:14**, the NEXUS Security Operations Center
detected abnormal activity involving the administrator account of
NEXUS CORE.

Seconds later, the administrator account was locked.

The first theory was simple:

**Someone had destroyed the recovery credential.**

That theory was wrong.

The recovery environment survived.

Before losing administrative access, Senior Systems Administrator
**Adrian Vale** activated an emergency recovery procedure.

The recovery design deliberately separated the recovery information
across six operational stages.

Those stages are identified as:

```text
A
B
C
D
E
F
```

Each represents **one numerical recovery value**.

---

## YOUR OBJECTIVE

Determine:

```text
A = ?
B = ?
C = ?
D = ?
E = ?
F = ?
```

Then determine the correct order in which those six values must be
assembled.

The final recovery credential contains **six digits**.

---

## WHAT WE KNOW

```text
08:29:47    Unusual service-account authentication
08:30:11    Network anomaly
08:31:07    Security alert
08:31:08    Administrator account locked
08:31:10    Recovery mode enabled
08:32:41    Integrity inspection begins
08:33:52    Emergency isolation requested
08:34:18    Recovery interrupted
08:37:00    Incident response begins
```

Several records disagree about exact timestamps.

Some records are raw system logs.

Some are manually written.

Some are legacy.

Some were produced after the incident.

---

## A NOTE FROM ADRIAN VALE

Only one line from Vale's final recovery note survived:

> "The system can be restored, but only if the fragments are returned
> to their proper sequence."

---

## INVESTIGATION RULES

The repository contains several years of NEXUS operational material.

Most files are unrelated to BLACKOUT-042.

Some contain useful context.

Some contain misleading values.

Some are outdated.

Some are contradictory.

Some evidence exists only in historical repository versions.

**Do not assume every number is relevant.**

**Do not assume the newest document is correct.**

**Do not modify repository files.**

---

## SYSTEM STATUS

```text
NEXUS CORE       : LOCKED
ADMIN ACCOUNT    : LOCKED
RECOVERY SERVICE : PAUSED
NETWORK          : ISOLATION REQUESTED
INCIDENT         : ACTIVE
ATTACKER         : UNKNOWN
```

---

## TIME LIMIT

# 30 MINUTES

The first team to successfully recover the system wins.

Begin the investigation.
