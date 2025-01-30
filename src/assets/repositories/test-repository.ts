import { MitreTechnique, MitreTactic } from "../components/Data";
import { IRepository } from "./repository-interface";

const dataOfTactics: MitreTactic[] = [
  {
    id: "TA0006",
    tactic: "Credential Access",
    number: 8,
    tacticsKey: "credential-access",
  },
  {
    id: "TA0004",
    tactic: "Privilege Escalation",
    number: 6,
    tacticsKey: "privilege-escalation",
  },
  {
    id: "TA0003",
    tactic: "Persistence",
    number: 5,
    tacticsKey: "persistence",
  },
  {
    id: "TA0009",
    tactic: "Collection",
    number: 11,
    tacticsKey: "collection",
  },
  {
    id: "TA0002",
    tactic: "Execution",
    number: 4,
    tacticsKey: "execution",
  },
  {
    id: "TA0042",
    tactic: "Resource Development",
    number: 2,
    tacticsKey: "resource-development",
  },
  {
    id: "TA0007",
    tactic: "Discovery",
    number: 9,
    tacticsKey: "discovery",
  },
  {
    id: "TA0043",
    tactic: "Reconnaissance",
    number: 1,
    tacticsKey: "reconnaissance",
  },
  {
    id: "TA0005",
    tactic: "Defense Evasion",
    number: 7,
    tacticsKey: "defense-evasion",
  },
  {
    id: "TA0010",
    tactic: "Exfiltration",
    number: 13,
    tacticsKey: "exfiltration",
  },
  {
    id: "TA0001",
    tactic: "Initial Access",
    number: 3,
    tacticsKey: "initial-access",
  },
  {
    id: "TA0008",
    tactic: "Lateral Movement",
    number: 10,
    tacticsKey: "lateral-movement",
  },
  {
    id: "TA0040",
    tactic: "Impact",
    number: 14,
    tacticsKey: "impact",
  },
  {
    id: "TA0011",
    tactic: "Command and Control",
    number: 12,
    tacticsKey: "command-and-control",
  },
];

// const tactics = ["defense-evasion", "privilege-escalation"];

const tacticBuckets = new Map<string, MitreTechnique[]>();

// for (let tactic of tactics) {
//   tacticBuckets.set(tactic, []);
// }

const dataOfTechniquesBaseline: MitreTechnique[] = [
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1564.001",
    name: "Hidden Files and Directories",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1114",
    name: "Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence",
  },
  {
    id: "T1199",
    name: "Trusted Relationship",
    tacticKeys: "initial-access",
  },
  {
    id: "T1574",
    name: "Hijack Execution Flow",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1561",
    name: "Disk Wipe",
    tacticKeys: "impact",
  },
  {
    id: "T1485",
    name: "Data Destruction",
    tacticKeys: "impact",
  },
  {
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access",
  },
  {
    id: "T1098",
    name: "Account Manipulation",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1589",
    name: "Gather Victim Identity Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1589",
    name: "Gather Victim Identity Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1584",
    name: "Compromise Infrastructure",
    tacticKeys: "resource-development",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1550.002",
    name: "Pass the Hash",
    tacticKeys: "defense-evasion, lateral-movement",
  },
  {
    id: "T1222.002",
    name: "Linux and Mac File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },

  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1656",
    name: "Impersonation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.002",
    name: "Create Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.003",
    name: "Delete Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1111",
    name: "Multi-Factor Authentication Interception",
    tacticKeys: "credential-access",
  },
  {
    id: "T1621",
    name: "Multi-Factor Authentication Request Generation",
    tacticKeys: "credential-access",
  },
  {
    id: "T1588.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003.003",
    name: "NTDS",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.006",
    name: "DCSync",
    tacticKeys: "credential-access",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1598.004",
    name: "Spearphishing Voice",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  // {
  //   id: "T1597.002",
  //   name: "Purchase Technical Data",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1593.003",
  //   name: "Code Repositories",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1552.008",
  //   name: "Chat Messages",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1078.004",
  //   name: "Cloud Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1548.002",
  //   name: "Bypass User Account Control",
  //   tacticKeys: "privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1087.002",
  //   name: "Domain Account",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1583.006",
  //   name: "Web Services",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1560.001",
  //   name: "Archive via Utility",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1059.001",
  //   name: "PowerShell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.005",
  //   name: "Visual Basic",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.006",
  //   name: "Python",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.007",
  //   name: "JavaScript",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1555",
  //   name: "Credentials from Password Stores",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1555.003",
  //   name: "Credentials from Web Browsers",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1074.001",
  //   name: "Local Data Staging",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1140",
  //   name: "Deobfuscate/Decode Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1203",
  //   name: "Exploitation for Client Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1210",
  //   name: "Exploitation of Remote Services",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1589.002",
  //   name: "Email Addresses",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1562.001",
  //   name: "Disable or Modify Tools",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1559.001",
  //   name: "Component Object Model",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1559.002",
  //   name: "Dynamic Data Exchange",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1567.002",
  //   name: "Exfiltration to Cloud Storage",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1133",
  //   name: "External Remote Services",
  //   tacticKeys: "persistence, initial-access",
  // },
  // {
  //   id: "T1564.001",
  //   name: "Hidden Files and Directories",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1566.001",
  //   name: "Spearphishing Attachment",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1114",
  //   name: "Email Collection",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1071",
  //   name: "Application Layer Protocol",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1574",
  //   name: "Hijack Execution Flow",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1561",
  //   name: "Disk Wipe",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1485",
  //   name: "Data Destruction",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1021.002",
  //   name: "SMB/Windows Admin Shares",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1566.002",
  //   name: "Spearphishing Link",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1486",
  //   name: "Data Encrypted for Impact",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1560",
  //   name: "Archive Collected Data",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1110",
  //   name: "Brute Force",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1566",
  //   name: "Phishing",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1098",
  //   name: "Account Manipulation",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1574.001",
  //   name: "DLL Search Order Hijacking",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1583.004",
  //   name: "Server",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1040",
  //   name: "Network Sniffing",
  //   tacticKeys: "credential-access, discovery",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1590",
  //   name: "Gather Victim Network Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1001",
  //   name: "Data Obfuscation",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1070.004",
  //   name: "File Deletion",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1543.003",
  //   name: "Windows Service",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1572",
  //   name: "Protocol Tunneling",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.004",
  //   name: "DNS",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1018",
  //   name: "Remote System Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1584",
  //   name: "Compromise Infrastructure",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1546.008",
  //   name: "Accessibility Features",
  //   tacticKeys: "privilege-escalation, persistence",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1550.002",
  //   name: "Pass the Hash",
  //   tacticKeys: "defense-evasion, lateral-movement",
  // },
  // {
  //   id: "T1222.002",
  //   name: "Linux and Mac File and Directory Permissions Modification",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },

  // {
  //   id: "T1591.004",
  //   name: "Identify Roles",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1656",
  //   name: "Impersonation",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.002",
  //   name: "Create Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.003",
  //   name: "Delete Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1111",
  //   name: "Multi-Factor Authentication Interception",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1621",
  //   name: "Multi-Factor Authentication Request Generation",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1588.001",
  //   name: "Malware",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003.003",
  //   name: "NTDS",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1003.006",
  //   name: "DCSync",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1069.002",
  //   name: "Domain Groups",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1598.004",
  //   name: "Spearphishing Voice",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1090",
  //   name: "Proxy",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1597.002",
  //   name: "Purchase Technical Data",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1593.003",
  //   name: "Code Repositories",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1552.008",
  //   name: "Chat Messages",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1078.004",
  //   name: "Cloud Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1548.002",
  //   name: "Bypass User Account Control",
  //   tacticKeys: "privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1087.002",
  //   name: "Domain Account",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1583.006",
  //   name: "Web Services",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1560.001",
  //   name: "Archive via Utility",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1059.001",
  //   name: "PowerShell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.005",
  //   name: "Visual Basic",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.006",
  //   name: "Python",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.007",
  //   name: "JavaScript",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1555",
  //   name: "Credentials from Password Stores",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1555.003",
  //   name: "Credentials from Web Browsers",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1074.001",
  //   name: "Local Data Staging",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1140",
  //   name: "Deobfuscate/Decode Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1203",
  //   name: "Exploitation for Client Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1210",
  //   name: "Exploitation of Remote Services",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1589.002",
  //   name: "Email Addresses",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1562.001",
  //   name: "Disable or Modify Tools",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1559.001",
  //   name: "Component Object Model",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1559.002",
  //   name: "Dynamic Data Exchange",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1567.002",
  //   name: "Exfiltration to Cloud Storage",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1133",
  //   name: "External Remote Services",
  //   tacticKeys: "persistence, initial-access",
  // },
  // {
  //   id: "T1564.001",
  //   name: "Hidden Files and Directories",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1566.001",
  //   name: "Spearphishing Attachment",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1114",
  //   name: "Email Collection",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1071",
  //   name: "Application Layer Protocol",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1574",
  //   name: "Hijack Execution Flow",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1561",
  //   name: "Disk Wipe",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1485",
  //   name: "Data Destruction",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1021.002",
  //   name: "SMB/Windows Admin Shares",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1566.002",
  //   name: "Spearphishing Link",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1486",
  //   name: "Data Encrypted for Impact",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1560",
  //   name: "Archive Collected Data",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1110",
  //   name: "Brute Force",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1566",
  //   name: "Phishing",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1098",
  //   name: "Account Manipulation",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1574.001",
  //   name: "DLL Search Order Hijacking",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1583.004",
  //   name: "Server",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1040",
  //   name: "Network Sniffing",
  //   tacticKeys: "credential-access, discovery",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1590",
  //   name: "Gather Victim Network Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1001",
  //   name: "Data Obfuscation",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1070.004",
  //   name: "File Deletion",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1543.003",
  //   name: "Windows Service",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1572",
  //   name: "Protocol Tunneling",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.004",
  //   name: "DNS",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1018",
  //   name: "Remote System Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1584",
  //   name: "Compromise Infrastructure",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1546.008",
  //   name: "Accessibility Features",
  //   tacticKeys: "privilege-escalation, persistence",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1550.002",
  //   name: "Pass the Hash",
  //   tacticKeys: "defense-evasion, lateral-movement",
  // },
  // {
  //   id: "T1222.002",
  //   name: "Linux and Mac File and Directory Permissions Modification",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1005",
  //   name: "Data from Local System",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },

  // {
  //   id: "T1591.004",
  //   name: "Identify Roles",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1656",
  //   name: "Impersonation",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.002",
  //   name: "Create Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1578.003",
  //   name: "Delete Cloud Instance",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1111",
  //   name: "Multi-Factor Authentication Interception",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1621",
  //   name: "Multi-Factor Authentication Request Generation",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1588.001",
  //   name: "Malware",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003.003",
  //   name: "NTDS",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1003.006",
  //   name: "DCSync",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1069.002",
  //   name: "Domain Groups",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1598.004",
  //   name: "Spearphishing Voice",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1090",
  //   name: "Proxy",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1597.002",
  //   name: "Purchase Technical Data",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1593.003",
  //   name: "Code Repositories",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1489",
  //   name: "Service Stop",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1552.008",
  //   name: "Chat Messages",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1078.004",
  //   name: "Cloud Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1588.002",
  //   name: "Tool",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1548.002",
  //   name: "Bypass User Account Control",
  //   tacticKeys: "privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1087.002",
  //   name: "Domain Account",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1583.006",
  //   name: "Web Services",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1560.001",
  //   name: "Archive via Utility",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1547.001",
  //   name: "Registry Run Keys / Startup Folder",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1059.001",
  //   name: "PowerShell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.005",
  //   name: "Visual Basic",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.006",
  //   name: "Python",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1059.007",
  //   name: "JavaScript",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1555",
  //   name: "Credentials from Password Stores",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1555.003",
  //   name: "Credentials from Web Browsers",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1074.001",
  //   name: "Local Data Staging",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1140",
  //   name: "Deobfuscate/Decode Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1203",
  //   name: "Exploitation for Client Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1210",
  //   name: "Exploitation of Remote Services",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1589.002",
  //   name: "Email Addresses",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1562.001",
  //   name: "Disable or Modify Tools",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1559.001",
  //   name: "Component Object Model",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1559.002",
  //   name: "Dynamic Data Exchange",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1036.005",
  //   name: "Match Legitimate Name or Location",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // { id: "T1498", name: "Network Denial of Service", tacticKeys: "impact" },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1082",
  //   name: "System Information Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // { id: "T1489", name: "Service Stop", tacticKeys: "impact" },
  // { id: "T1486", name: "Data Encrypted for Impact", tacticKeys: "impact" },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1567.002",
  //   name: "Exfiltration to Cloud Storage",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1133",
  //   name: "External Remote Services",
  //   tacticKeys: "persistence, initial-access",
  // },
  // {
  //   id: "T1564.001",
  //   name: "Hidden Files and Directories",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1490",
  //   name: "Inhibit System Recovery",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1132.001",
  //   name: "Standard Encoding",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1566.001",
  //   name: "Spearphishing Attachment",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1105",
  //   name: "Ingress Tool Transfer",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1114",
  //   name: "Email Collection",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1204",
  //   name: "User Execution",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1071",
  //   name: "Application Layer Protocol",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1556.003",
  //   name: "Pluggable Authentication Modules",
  //   tacticKeys: "credential-access, defense-evasion, persistence",
  // },
  // {
  //   id: "T1199",
  //   name: "Trusted Relationship",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1574",
  //   name: "Hijack Execution Flow",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1561",
  //   name: "Disk Wipe",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1485",
  //   name: "Data Destruction",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1021.002",
  //   name: "SMB/Windows Admin Shares",
  //   tacticKeys: "lateral-movement",
  // },
  // {
  //   id: "T1566.002",
  //   name: "Spearphishing Link",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1190",
  //   name: "Exploit Public-Facing Application",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1486",
  //   name: "Data Encrypted for Impact",
  //   tacticKeys: "impact",
  // },
  // {
  //   id: "T1560",
  //   name: "Archive Collected Data",
  //   tacticKeys: "collection",
  // },
  // {
  //   id: "T1552.001",
  //   name: "Credentials In Files",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1110",
  //   name: "Brute Force",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1078",
  //   name: "Valid Accounts",
  //   tacticKeys:
  //     "defense-evasion, persistence, privilege-escalation, initial-access",
  // },
  // {
  //   id: "T1566",
  //   name: "Phishing",
  //   tacticKeys: "initial-access",
  // },
  // {
  //   id: "T1098",
  //   name: "Account Manipulation",
  //   tacticKeys: "persistence, privilege-escalation",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1574.002",
  //   name: "DLL Side-Loading",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1574.001",
  //   name: "DLL Search Order Hijacking",
  //   tacticKeys: "persistence, privilege-escalation, defense-evasion",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1027",
  //   name: "Obfuscated Files or Information",
  //   tacticKeys: "defense-evasion",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1041",
  //   name: "Exfiltration Over C2 Channel",
  //   tacticKeys: "exfiltration",
  // },
  // {
  //   id: "T1583.004",
  //   name: "Server",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1588.005",
  //   name: "Exploits",
  //   tacticKeys: "resource-development",
  // },
  // {
  //   id: "T1003",
  //   name: "OS Credential Dumping",
  //   tacticKeys: "credential-access",
  // },
  // {
  //   id: "T1589",
  //   name: "Gather Victim Identity Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1573.001",
  //   name: "Symmetric Cryptography",
  //   tacticKeys: "command-and-control",
  // },
  // {
  //   id: "T1040",
  //   name: "Network Sniffing",
  //   tacticKeys: "credential-access, discovery",
  // },
  // {
  //   id: "T1083",
  //   name: "File and Directory Discovery",
  //   tacticKeys: "discovery",
  // },
  // {
  //   id: "T1590",
  //   name: "Gather Victim Network Information",
  //   tacticKeys: "reconnaissance",
  // },
  // {
  //   id: "T1059.003",
  //   name: "Windows Command Shell",
  //   tacticKeys: "execution",
  // },
  // {
  //   id: "T1055.001",
  //   name: "Dynamic-link Library Injection",
  //   tacticKeys: "defense-evasion, privilege-escalation",
  // },
  // {
  //   id: "T1071.001",
  //   name: "Web Protocols",
  //   tacticKeys: "command-and-control",
  // },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1588.005",
    name: "Exploits",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1584",
    name: "Compromise Infrastructure",
    tacticKeys: "resource-development",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1550.002",
    name: "Pass the Hash",
    tacticKeys: "defense-evasion, lateral-movement",
  },
  {
    id: "T1222.002",
    name: "Linux and Mac File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },

  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1656",
    name: "Impersonation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.002",
    name: "Create Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1578.003",
    name: "Delete Cloud Instance",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1111",
    name: "Multi-Factor Authentication Interception",
    tacticKeys: "credential-access",
  },
  {
    id: "T1621",
    name: "Multi-Factor Authentication Request Generation",
    tacticKeys: "credential-access",
  },
  {
    id: "T1588.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1003.003",
    name: "NTDS",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.006",
    name: "DCSync",
    tacticKeys: "credential-access",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1598.004",
    name: "Spearphishing Voice",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1597.002",
    name: "Purchase Technical Data",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1593.003",
    name: "Code Repositories",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1199",
    name: "Trusted Relationship",
    tacticKeys: "initial-access",
  },
  {
    id: "T1552.008",
    name: "Chat Messages",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.004",
    name: "Cloud Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1583.006",
    name: "Web Services",
    tacticKeys: "resource-development",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1059.007",
    name: "JavaScript",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1203",
    name: "Exploitation for Client Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1210",
    name: "Exploitation of Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1562.001",
    name: "Disable or Modify Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1559.001",
    name: "Component Object Model",
    tacticKeys: "execution",
  },
  {
    id: "T1559.002",
    name: "Dynamic Data Exchange",
    tacticKeys: "execution",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1104",
    name: "Multi-Stage Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1027.003",
    name: "Steganography",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.004",
    name: "Compile After Delivery",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.010",
    name: "Command Obfuscation",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.001",
    name: "Office Template Macros",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090.002",
    name: "External Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518.001",
    name: "Security Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1218.003",
    name: "CMSTP",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.005",
    name: "Mshta",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527261"',
    esa_threatactorttpsid: "88ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    "@odata.etag": 'W/"12527262"',
    esa_threatactorttpsid: "8aac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527263"',
    esa_threatactorttpsid: "8cac1221-666f-ef11-a670-0022489b4d69",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527264"',
    esa_threatactorttpsid: "8eac1221-666f-ef11-a670-0022489b4d69",
    id: "T1102.002",
    name: "Bidirectional Communication",
    tacticKeys: "command-and-control",
  },
  {
    "@odata.etag": 'W/"12527265"',
    esa_threatactorttpsid: "90ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    "@odata.etag": 'W/"12527266"',
    esa_threatactorttpsid: "92ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.001",
    name: "Local Account",
    tacticKeys: "discovery",
  },
  {
    "@odata.etag": 'W/"12527267"',
    esa_threatactorttpsid: "94ac1221-666f-ef11-a670-0022489b4d69",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.004",
    name: "Windows Credential Manager",
    tacticKeys: "credential-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1008",
    name: "Fallback Channels",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1137.004",
    name: "Outlook Home Page",
    tacticKeys: "persistence",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.004",
    name: "LSA Secrets",
    tacticKeys: "credential-access",
  },
  {
    id: "T1003.005",
    name: "Cached Domain Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1201",
    name: "Password Policy Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.001",
    name: "Local Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1069.002",
    name: "Domain Groups",
    tacticKeys: "discovery",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.003",
    name: "Spearphishing via Service",
    tacticKeys: "initial-access",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1505.003",
    name: "Web Shell",
    tacticKeys: "persistence",
  },
  {
    id: "T1218.001",
    name: "Compiled HTML File",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1219",
    name: "Remote Access Software",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1574.001",
    name: "DLL Search Order Hijacking",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.003",
    name: "Clear Command History",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1202",
    name: "Indirect Command Execution",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1218.011",
    name: "Rundll32",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1222",
    name: "File and Directory Permissions Modification",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1497",
    name: "Virtualization/Sandbox Evasion",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1497.001",
    name: "System Checks",
    tacticKeys: "defense-evasion, discovery",
  },
  {
    id: "T1620",
    name: "Reflective Code Loading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.005",
    name: "Password Managers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087",
    name: "Account Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1518",
    name: "Software Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution",
  },
  {
    id: "T1129",
    name: "Shared Modules",
    tacticKeys: "execution",
  },
  {
    id: "T1095",
    name: "Non-Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1102.001",
    name: "Dead Drop Resolver",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1571",
    name: "Non-Standard Port",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.001",
    name: "Symmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1021.004",
    name: "SSH",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1565.001",
    name: "Stored Data Manipulation",
    tacticKeys: "impact",
  },
  {
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.002",
    name: "Credentials in Registry",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery",
  },
  {
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1123",
    name: "Audio Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion",
  },
  {
    id: "T1055.001",
    name: "Dynamic-link Library Injection",
    tacticKeys: "defense-evasion, privilege-escalation",
  },
  {
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003.001",
    name: "LSASS Memory",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1056.001",
    name: "Keylogging",
    tacticKeys: "collection, credential-access",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection",
  },
  {
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1583.004",
    name: "Server",
    tacticKeys: "resource-development",
  },
  {
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access",
  },
  {
    id: "T1059.004",
    name: "Unix Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1546.008",
    name: "Accessibility Features",
    tacticKeys: "privilege-escalation, persistence",
  },
  {
    id: "T1548.002",
    name: "Bypass User Account Control",
    tacticKeys: "privilege-escalation, defense-evasion",
  },
  {
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access",
  },
  {
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact",
  },
  {
    id: "T1595.001",
    name: "Scanning IP Blocks",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.001",
    name: "Hardware",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.002",
    name: "Software",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1592.004",
    name: "Client Configurations",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.001",
    name: "Credentials",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.002",
    name: "Email Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1589.003",
    name: "Employee Names",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.002",
    name: "DNS",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.004",
    name: "Network Topology",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1590.005",
    name: "IP Addresses",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.002",
    name: "Business Relationships",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1591.004",
    name: "Identify Roles",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1091",
    name: "Replication Through Removable Media",
    tacticKeys: "lateral-movement, initial-access",
  },
  {
    id: "T1078.002",
    name: "Domain Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1053.002",
    name: "At",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1047",
    name: "Windows Management Instrumentation",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1136.001",
    name: "Local Account",
    tacticKeys: "persistence",
  },
  {
    id: "T1564.003",
    name: "Hidden Window",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1562.004",
    name: "Disable or Modify System Firewall",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.004",
    name: "Masquerade Task or Service",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1187",
    name: "Forced Authentication",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.001",
    name: "Keychain",
    tacticKeys: "credential-access",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access",
  },
  {
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1135",
    name: "Network Share Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1040",
    name: "Network Sniffing",
    tacticKeys: "credential-access, discovery",
  },
  {
    id: "T1120",
    name: "Peripheral Device Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1016.001",
    name: "Internet Connection Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1033",
    name: "System Owner/User Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1570",
    name: "Lateral Tool Transfer",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1021.005",
    name: "VNC",
    tacticKeys: "lateral-movement",
  },
  {
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection",
  },
  {
    id: "T1185",
    name: "Browser Session Hijacking",
    tacticKeys: "collection",
  },
  {
    id: "T1074.001",
    name: "Local Data Staging",
    tacticKeys: "collection",
  },
  {
    id: "T1005",
    name: "Data from Local System",
    tacticKeys: "collection",
  },
  {
    id: "T1025",
    name: "Data from Removable Media",
    tacticKeys: "collection",
  },
  {
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection",
  },
  {
    id: "T1113",
    name: "Screen Capture",
    tacticKeys: "collection",
  },
  {
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1071.004",
    name: "DNS",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1573.002",
    name: "Asymmetric Cryptography",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration",
  },
  {
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance",
  },
  {
    id: "T1587.001",
    name: "Malware",
    tacticKeys: "resource-development",
  },
  {
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development",
  },
  {
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1569.002",
    name: "Service Execution",
    tacticKeys: "execution",
  },
  {
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation",
  },
  {
    id: "T1078.003",
    name: "Local Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1140",
    name: "Deobfuscate/Decode Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion",
  },
  {
    id: "T1555.003",
    name: "Credentials from Web Browsers",
    tacticKeys: "credential-access",
  },
  {
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery",
  },
  {
    id: "T1001",
    name: "Data Obfuscation",
    tacticKeys: "command-and-control",
  },
  {
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access",
  },
  {
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access",
  },
  {
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys:
      "defense-evasion, persistence, privilege-escalation, initial-access",
  },
  {
    id: "T1059.003",
    name: "Windows Command Shell",
    tacticKeys: "execution",
  },
  {
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution",
  },
  {
    id: "T1106",
    name: "Native API",
    tacticKeys: "execution",
  },
  {
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation",
  },
  {
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution",
  },
  {
    id: "T1204.001",
    name: "Malicious Link",
    tacticKeys: "execution",
  },
  {
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation",
  },
];

const dataOfTechniquesTrending: MitreTechnique[] = [
  {
    "@odata.etag": "W/\"16473250\"",
    "esa_dynamicthreatactorttpsid": "7cf0f591-ed70-ef11-a670-000d3a664cf5",
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517618\"",
    "esa_dynamicthreatactorttpsid": "5f043198-ed70-ef11-a670-000d3a664cf5",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517619\"",
    "esa_dynamicthreatactorttpsid": "37cb0acc-ed70-ef11-a670-000d3a664cf5",
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517620\"",
    "esa_dynamicthreatactorttpsid": "c04644e4-ed70-ef11-a670-000d3a664cf5",
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517621\"",
    "esa_dynamicthreatactorttpsid": "da4644e4-ed70-ef11-a670-000d3a664cf5",
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517622\"",
    "esa_dynamicthreatactorttpsid": "6d8348ea-ed70-ef11-a670-000d3a664cf5",
    id: "T1036.005",
    name: "Match Legitimate Name or Location",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517623\"",
    "esa_dynamicthreatactorttpsid": "ba8348ea-ed70-ef11-a670-000d3a664cf5",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517624\"",
    "esa_dynamicthreatactorttpsid": "483c3f02-ee70-ef11-a670-000d3a664cf5",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"12517625\"",
    "esa_dynamicthreatactorttpsid": "4d3c3f02-ee70-ef11-a670-000d3a664cf5",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517626\"",
    "esa_dynamicthreatactorttpsid": "38507a08-ee70-ef11-a670-000d3a664cf5",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517627\"",
    "esa_dynamicthreatactorttpsid": "29efa814-ee70-ef11-a670-000d3a664cf5",
    id: "T1112",
    name: "Modify Registry",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517628\"",
    "esa_dynamicthreatactorttpsid": "4e60621b-ee70-ef11-a670-000d3a664cf5",
    id: "T1547",
    name: "Boot or Logon Autostart Execution",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517629\"",
    "esa_dynamicthreatactorttpsid": "5260621b-ee70-ef11-a670-000d3a664cf5",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517630\"",
    "esa_dynamicthreatactorttpsid": "86805f21-ee70-ef11-a670-000d3a664cf5",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517631\"",
    "esa_dynamicthreatactorttpsid": "135ff027-ee70-ef11-a670-000d3a664cf5",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517633\"",
    "esa_dynamicthreatactorttpsid": "4afef62d-ee70-ef11-a670-000d3a664cf5",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517634\"",
    "esa_dynamicthreatactorttpsid": "6e7c1d4e-ee70-ef11-a670-000d3a664cf5",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517635\"",
    "esa_dynamicthreatactorttpsid": "916a3254-ee70-ef11-a670-000d3a664cf5",
    id: "T1543",
    name: "Create or Modify System Process",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517636\"",
    "esa_dynamicthreatactorttpsid": "a1b27267-ee70-ef11-a670-000d3a664cf5",
    id: "T1119",
    name: "Automated Collection",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517637\"",
    "esa_dynamicthreatactorttpsid": "3a8d9c73-ee70-ef11-a670-000d3a664cf5",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517638\"",
    "esa_dynamicthreatactorttpsid": "468d9c73-ee70-ef11-a670-000d3a664cf5",
    id: "T1583",
    name: "Acquire Infrastructure",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517639\"",
    "esa_dynamicthreatactorttpsid": "9fde9479-ee70-ef11-a670-000d3a664cf5",
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517640\"",
    "esa_dynamicthreatactorttpsid": "a2de9479-ee70-ef11-a670-000d3a664cf5",
    id: "T1070",
    name: "Indicator Removal",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517641\"",
    "esa_dynamicthreatactorttpsid": "f97f8585-ee70-ef11-a670-000d3a664cf5",
    id: "T1021",
    name: "Remote Services",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517642\"",
    "esa_dynamicthreatactorttpsid": "12808585-ee70-ef11-a670-000d3a664cf5",
    id: "T1556",
    name: "Modify Authentication Process",
    tacticKeys: "credential-access, defense-evasion, persistence"
  },
  {
    "@odata.etag": "W/\"12517643\"",
    "esa_dynamicthreatactorttpsid": "5c42cea4-ee70-ef11-a670-000d3a664cf5",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"12517644\"",
    "esa_dynamicthreatactorttpsid": "6c8e42ab-ee70-ef11-a670-000d3a664cf5",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517645\"",
    "esa_dynamicthreatactorttpsid": "db8e42ab-ee70-ef11-a670-000d3a664cf5",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517646\"",
    "esa_dynamicthreatactorttpsid": "0cdb4dc4-ee70-ef11-a670-000d3a664cf5",
    id: "T1584",
    name: "Compromise Infrastructure",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517647\"",
    "esa_dynamicthreatactorttpsid": "f88e70d0-ee70-ef11-a670-000d3a664cf5",
    id: "T1057",
    name: "Process Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517648\"",
    "esa_dynamicthreatactorttpsid": "6dcb74d6-ee70-ef11-a670-000d3a664cf5",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"12517649\"",
    "esa_dynamicthreatactorttpsid": "6fcb74d6-ee70-ef11-a670-000d3a664cf5",
    id: "T1134",
    name: "Access Token Manipulation",
    tacticKeys: "defense-evasion, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517650\"",
    "esa_dynamicthreatactorttpsid": "bb4414f5-ee70-ef11-a670-000d3a664cf5",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"12517651\"",
    "esa_dynamicthreatactorttpsid": "2e8b23fc-ee70-ef11-a670-000d3a664cf5",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517652\"",
    "esa_dynamicthreatactorttpsid": "db3e1e02-ef70-ef11-a670-000d3a664cf5",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517653\"",
    "esa_dynamicthreatactorttpsid": "b6801b33-ef70-ef11-a670-000d3a664cf5",
    id: "T1485",
    name: "Data Destruction",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517654\"",
    "esa_dynamicthreatactorttpsid": "10826b3f-ef70-ef11-a670-000d3a664cf5",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517655\"",
    "esa_dynamicthreatactorttpsid": "139a714b-ef70-ef11-a670-000d3a664cf5",
    id: "T1561",
    name: "Disk Wipe",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517656\"",
    "esa_dynamicthreatactorttpsid": "249a714b-ef70-ef11-a670-000d3a664cf5",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517657\"",
    "esa_dynamicthreatactorttpsid": "369a714b-ef70-ef11-a670-000d3a664cf5",
    id: "T1583",
    name: "Acquire Infrastructure",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517658\"",
    "esa_dynamicthreatactorttpsid": "53708664-ef70-ef11-a670-000d3a664cf5",
    id: "T1114",
    name: "Email Collection",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517659\"",
    "esa_dynamicthreatactorttpsid": "aa6a7d71-ef70-ef11-a670-000d3a664cf5",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517660\"",
    "esa_dynamicthreatactorttpsid": "95e1487f-ed70-ef11-a670-000d3a667b19",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517661\"",
    "esa_dynamicthreatactorttpsid": "bee1487f-ed70-ef11-a670-000d3a667b19",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517662\"",
    "esa_dynamicthreatactorttpsid": "cfab6b8b-ed70-ef11-a670-000d3a667b19",
    id: "T1496",
    name: "Resource Hijacking",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517663\"",
    "esa_dynamicthreatactorttpsid": "dbab6b8b-ed70-ef11-a670-000d3a667b19",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517664\"",
    "esa_dynamicthreatactorttpsid": "f904c191-ed70-ef11-a670-000d3a667b19",
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517665\"",
    "esa_dynamicthreatactorttpsid": "d760b997-ed70-ef11-a670-000d3a667b19",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517666\"",
    "esa_dynamicthreatactorttpsid": "da60b997-ed70-ef11-a670-000d3a667b19",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517667\"",
    "esa_dynamicthreatactorttpsid": "d113099f-ed70-ef11-a670-000d3a667b19",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517668\"",
    "esa_dynamicthreatactorttpsid": "8ce416a5-ed70-ef11-a670-000d3a667b19",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517669\"",
    "esa_dynamicthreatactorttpsid": "85731fb1-ed70-ef11-a670-000d3a667b19",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517670\"",
    "esa_dynamicthreatactorttpsid": "97731fb1-ed70-ef11-a670-000d3a667b19",
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517671\"",
    "esa_dynamicthreatactorttpsid": "9c731fb1-ed70-ef11-a670-000d3a667b19",
    id: "T1496",
    name: "Resource Hijacking",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517672\"",
    "esa_dynamicthreatactorttpsid": "9f731fb1-ed70-ef11-a670-000d3a667b19",
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517673\"",
    "esa_dynamicthreatactorttpsid": "a2731fb1-ed70-ef11-a670-000d3a667b19",
    id: "T1068",
    name: "Exploitation for Privilege Escalation",
    tacticKeys: "privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517674\"",
    "esa_dynamicthreatactorttpsid": "44b338bd-ed70-ef11-a670-000d3a667b19",
    id: "T1189",
    name: "Drive-by Compromise",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517675\"",
    "esa_dynamicthreatactorttpsid": "78f93cc3-ed70-ef11-a670-000d3a667b19",
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517676\"",
    "esa_dynamicthreatactorttpsid": "7ff93cc3-ed70-ef11-a670-000d3a667b19",
    id: "T1496",
    name: "Resource Hijacking",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517677\"",
    "esa_dynamicthreatactorttpsid": "1a193ac9-ed70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517678\"",
    "esa_dynamicthreatactorttpsid": "b46a85d5-ed70-ef11-a670-000d3a667b19",
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517679\"",
    "esa_dynamicthreatactorttpsid": "b76a85d5-ed70-ef11-a670-000d3a667b19",
    id: "T1547",
    name: "Boot or Logon Autostart Execution",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517680\"",
    "esa_dynamicthreatactorttpsid": "72138cdb-ed70-ef11-a670-000d3a667b19",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517681\"",
    "esa_dynamicthreatactorttpsid": "76138cdb-ed70-ef11-a670-000d3a667b19",
    id: "T1606.001",
    name: "Web Cookies",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517682\"",
    "esa_dynamicthreatactorttpsid": "c558cee1-ed70-ef11-a670-000d3a667b19",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517683\"",
    "esa_dynamicthreatactorttpsid": "4578cbe7-ed70-ef11-a670-000d3a667b19",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517684\"",
    "esa_dynamicthreatactorttpsid": "4d78cbe7-ed70-ef11-a670-000d3a667b19",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517685\"",
    "esa_dynamicthreatactorttpsid": "15f9e9ed-ed70-ef11-a670-000d3a667b19",
    id: "T1567",
    name: "Exfiltration Over Web Service",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517686\"",
    "esa_dynamicthreatactorttpsid": "27f9e9ed-ed70-ef11-a670-000d3a667b19",
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517687\"",
    "esa_dynamicthreatactorttpsid": "3d54e2f3-ed70-ef11-a670-000d3a667b19",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517688\"",
    "esa_dynamicthreatactorttpsid": "257b8300-ee70-ef11-a670-000d3a667b19",
    id: "T1574",
    name: "Hijack Execution Flow",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517689\"",
    "esa_dynamicthreatactorttpsid": "d4de3f14-ee70-ef11-a670-000d3a667b19",
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517690\"",
    "esa_dynamicthreatactorttpsid": "e7de3f14-ee70-ef11-a670-000d3a667b19",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517691\"",
    "esa_dynamicthreatactorttpsid": "a21a9720-ee70-ef11-a670-000d3a667b19",
    id: "T1568.002",
    name: "Domain Generation Algorithms",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517692\"",
    "esa_dynamicthreatactorttpsid": "ab1a9720-ee70-ef11-a670-000d3a667b19",
    id: "T1562.001",
    name: "Disable or Modify Tools",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517693\"",
    "esa_dynamicthreatactorttpsid": "b51a9720-ee70-ef11-a670-000d3a667b19",
    id: "T1041",
    name: "Exfiltration Over C2 Channel",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517694\"",
    "esa_dynamicthreatactorttpsid": "fb724833-ee70-ef11-a670-000d3a667b19",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517695\"",
    "esa_dynamicthreatactorttpsid": "0d734833-ee70-ef11-a670-000d3a667b19",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517696\"",
    "esa_dynamicthreatactorttpsid": "1e734833-ee70-ef11-a670-000d3a667b19",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517697\"",
    "esa_dynamicthreatactorttpsid": "7cff503f-ee70-ef11-a670-000d3a667b19",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517698\"",
    "esa_dynamicthreatactorttpsid": "7eff503f-ee70-ef11-a670-000d3a667b19",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517699\"",
    "esa_dynamicthreatactorttpsid": "306db851-ee70-ef11-a670-000d3a667b19",
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517700\"",
    "esa_dynamicthreatactorttpsid": "3e6db851-ee70-ef11-a670-000d3a667b19",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517701\"",
    "esa_dynamicthreatactorttpsid": "546db851-ee70-ef11-a670-000d3a667b19",
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517702\"",
    "esa_dynamicthreatactorttpsid": "5a6db851-ee70-ef11-a670-000d3a667b19",
    id: "T1036",
    name: "Masquerading",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517703\"",
    "esa_dynamicthreatactorttpsid": "8cc7b057-ee70-ef11-a670-000d3a667b19",
    id: "T1547",
    name: "Boot or Logon Autostart Execution",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517704\"",
    "esa_dynamicthreatactorttpsid": "95c7b057-ee70-ef11-a670-000d3a667b19",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517705\"",
    "esa_dynamicthreatactorttpsid": "97c7b057-ee70-ef11-a670-000d3a667b19",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517706\"",
    "esa_dynamicthreatactorttpsid": "14c56964-ee70-ef11-a670-000d3a667b19",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517707\"",
    "esa_dynamicthreatactorttpsid": "48c56964-ee70-ef11-a670-000d3a667b19",
    id: "T1018",
    name: "Remote System Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517708\"",
    "esa_dynamicthreatactorttpsid": "4ac56964-ee70-ef11-a670-000d3a667b19",
    id: "T1584.005",
    name: "Botnet",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517709\"",
    "esa_dynamicthreatactorttpsid": "55c56964-ee70-ef11-a670-000d3a667b19",
    id: "T1016",
    name: "System Network Configuration Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517710\"",
    "esa_dynamicthreatactorttpsid": "a4597c6a-ee70-ef11-a670-000d3a667b19",
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517711\"",
    "esa_dynamicthreatactorttpsid": "a12c8b77-ee70-ef11-a670-000d3a667b19",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517712\"",
    "esa_dynamicthreatactorttpsid": "fefdb689-ee70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517713\"",
    "esa_dynamicthreatactorttpsid": "54ae2396-ee70-ef11-a670-000d3a667b19",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517714\"",
    "esa_dynamicthreatactorttpsid": "57ae2396-ee70-ef11-a670-000d3a667b19",
    id: "T1583",
    name: "Acquire Infrastructure",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517715\"",
    "esa_dynamicthreatactorttpsid": "5fae2396-ee70-ef11-a670-000d3a667b19",
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance"
  },
  {
    "@odata.etag": "W/\"12517716\"",
    "esa_dynamicthreatactorttpsid": "216b1e9c-ee70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517717\"",
    "esa_dynamicthreatactorttpsid": "b1a756a8-ee70-ef11-a670-000d3a667b19",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517718\"",
    "esa_dynamicthreatactorttpsid": "8d7764ae-ee70-ef11-a670-000d3a667b19",
    id: "T1210",
    name: "Exploitation of Remote Services",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517719\"",
    "esa_dynamicthreatactorttpsid": "2aef78ba-ee70-ef11-a670-000d3a667b19",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517720\"",
    "esa_dynamicthreatactorttpsid": "2def78ba-ee70-ef11-a670-000d3a667b19",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517721\"",
    "esa_dynamicthreatactorttpsid": "7bdcfed2-ee70-ef11-a670-000d3a667b19",
    id: "T1070.004",
    name: "File Deletion",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517722\"",
    "esa_dynamicthreatactorttpsid": "7edcfed2-ee70-ef11-a670-000d3a667b19",
    id: "T1055.003",
    name: "Thread Execution Hijacking",
    tacticKeys: "defense-evasion, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517723\"",
    "esa_dynamicthreatactorttpsid": "0cca65eb-ee70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517724\"",
    "esa_dynamicthreatactorttpsid": "16ca65eb-ee70-ef11-a670-000d3a667b19",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517725\"",
    "esa_dynamicthreatactorttpsid": "18ca65eb-ee70-ef11-a670-000d3a667b19",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517726\"",
    "esa_dynamicthreatactorttpsid": "8705bff2-ee70-ef11-a670-000d3a667b19",
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517727\"",
    "esa_dynamicthreatactorttpsid": "9e05bff2-ee70-ef11-a670-000d3a667b19",
    id: "T1070.001",
    name: "Clear Windows Event Logs",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517728\"",
    "esa_dynamicthreatactorttpsid": "e0100505-ef70-ef11-a670-000d3a667b19",
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517729\"",
    "esa_dynamicthreatactorttpsid": "e60d9f11-ef70-ef11-a670-000d3a667b19",
    id: "T1562.001",
    name: "Disable or Modify Tools",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517730\"",
    "esa_dynamicthreatactorttpsid": "d44f1f18-ef70-ef11-a670-000d3a667b19",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517731\"",
    "esa_dynamicthreatactorttpsid": "983f211e-ef70-ef11-a670-000d3a667b19",
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517732\"",
    "esa_dynamicthreatactorttpsid": "8a3cbb2a-ef70-ef11-a670-000d3a667b19",
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access"
  },
  {
    "@odata.etag": "W/\"12517733\"",
    "esa_dynamicthreatactorttpsid": "0632ef30-ef70-ef11-a670-000d3a667b19",
    id: "T1567",
    name: "Exfiltration Over Web Service",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517734\"",
    "esa_dynamicthreatactorttpsid": "ec4be53e-ef70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517735\"",
    "esa_dynamicthreatactorttpsid": "1c4ce53e-ef70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517736\"",
    "esa_dynamicthreatactorttpsid": "0f29fc4a-ef70-ef11-a670-000d3a667b19",
    id: "T1574",
    name: "Hijack Execution Flow",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517737\"",
    "esa_dynamicthreatactorttpsid": "7cd07f63-ef70-ef11-a670-000d3a667b19",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"12517738\"",
    "esa_dynamicthreatactorttpsid": "2c878f6f-ef70-ef11-a670-000d3a667b19",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517739\"",
    "esa_dynamicthreatactorttpsid": "32878f6f-ef70-ef11-a670-000d3a667b19",
    id: "T1547",
    name: "Boot or Logon Autostart Execution",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517740\"",
    "esa_dynamicthreatactorttpsid": "e92a8281-ef70-ef11-a670-000d3a667b19",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517741\"",
    "esa_dynamicthreatactorttpsid": "ed2a8281-ef70-ef11-a670-000d3a667b19",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517742\"",
    "esa_dynamicthreatactorttpsid": "79762094-ef70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517743\"",
    "esa_dynamicthreatactorttpsid": "63bd629a-ef70-ef11-a670-000d3a667b19",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517744\"",
    "esa_dynamicthreatactorttpsid": "7e1a5ba0-ef70-ef11-a670-000d3a667b19",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517745\"",
    "esa_dynamicthreatactorttpsid": "8a1a5ba0-ef70-ef11-a670-000d3a667b19",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517746\"",
    "esa_dynamicthreatactorttpsid": "0e11cda6-ef70-ef11-a670-000d3a667b19",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517747\"",
    "esa_dynamicthreatactorttpsid": "1411cda6-ef70-ef11-a670-000d3a667b19",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16262329\"",
    "esa_dynamicthreatactorttpsid": "60421d8b-67da-ef11-a730-000d3a6707f5",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16262771\"",
    "esa_dynamicthreatactorttpsid": "ca440590-6ada-ef11-a730-000d3a6707f5",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"16262955\"",
    "esa_dynamicthreatactorttpsid": "fcbe91f6-6ada-ef11-a730-000d3a6707f5",
    id: "T1193",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16263398\"",
    "esa_dynamicthreatactorttpsid": "a41cac26-6bda-ef11-a730-000d3a6707f5",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16263412\"",
    "esa_dynamicthreatactorttpsid": "edfdae3e-6bda-ef11-a730-000d3a6707f5",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16473308\"",
    "esa_dynamicthreatactorttpsid": "80ce44a5-8edc-ef11-a730-000d3a6707f5",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16473313\"",
    "esa_dynamicthreatactorttpsid": "88ce44a5-8edc-ef11-a730-000d3a6707f5",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16473772\"",
    "esa_dynamicthreatactorttpsid": "8a6a81f8-8fdc-ef11-a730-000d3a6707f5",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16473777\"",
    "esa_dynamicthreatactorttpsid": "b16a81f8-8fdc-ef11-a730-000d3a6707f5",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16473786\"",
    "esa_dynamicthreatactorttpsid": "cf6a81f8-8fdc-ef11-a730-000d3a6707f5",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517748\"",
    "esa_dynamicthreatactorttpsid": "faae6a7d-ed70-ef11-a670-000d3a67888a",
    id: "T1114",
    name: "Email Collection",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517749\"",
    "esa_dynamicthreatactorttpsid": "03af6a7d-ed70-ef11-a670-000d3a67888a",
    id: "T1557",
    name: "Adversary-in-the-Middle",
    tacticKeys: "credential-access, collection"
  },
  {
    "@odata.etag": "W/\"12517750\"",
    "esa_dynamicthreatactorttpsid": "f77b8e83-ed70-ef11-a670-000d3a67888a",
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517751\"",
    "esa_dynamicthreatactorttpsid": "0c7c8e83-ed70-ef11-a670-000d3a67888a",
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517752\"",
    "esa_dynamicthreatactorttpsid": "589bdc89-ed70-ef11-a670-000d3a67888a",
    id: "T1606",
    name: "Forge Web Credentials",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517753\"",
    "esa_dynamicthreatactorttpsid": "d1431590-ed70-ef11-a670-000d3a67888a",
    id: "T1193",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517754\"",
    "esa_dynamicthreatactorttpsid": "e4431590-ed70-ef11-a670-000d3a67888a",
    id: "T1112",
    name: "Modify Registry",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517755\"",
    "esa_dynamicthreatactorttpsid": "eb431590-ed70-ef11-a670-000d3a67888a",
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517756\"",
    "esa_dynamicthreatactorttpsid": "b636849c-ed70-ef11-a670-000d3a67888a",
    id: "T1562.001",
    name: "Disable or Modify Tools",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517757\"",
    "esa_dynamicthreatactorttpsid": "261586a2-ed70-ef11-a670-000d3a67888a",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517758\"",
    "esa_dynamicthreatactorttpsid": "291586a2-ed70-ef11-a670-000d3a67888a",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517759\"",
    "esa_dynamicthreatactorttpsid": "3c1586a2-ed70-ef11-a670-000d3a67888a",
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517760\"",
    "esa_dynamicthreatactorttpsid": "3f1586a2-ed70-ef11-a670-000d3a67888a",
    id: "T1056",
    name: "Input Capture",
    tacticKeys: "collection, credential-access"
  },
  {
    "@odata.etag": "W/\"12517761\"",
    "esa_dynamicthreatactorttpsid": "d4e256af-ed70-ef11-a670-000d3a67888a",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517762\"",
    "esa_dynamicthreatactorttpsid": "d6e256af-ed70-ef11-a670-000d3a67888a",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517763\"",
    "esa_dynamicthreatactorttpsid": "05e356af-ed70-ef11-a670-000d3a67888a",
    id: "T1496",
    name: "Resource Hijacking",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517764\"",
    "esa_dynamicthreatactorttpsid": "09e356af-ed70-ef11-a670-000d3a67888a",
    id: "T1565.002",
    name: "Transmitted Data Manipulation",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517765\"",
    "esa_dynamicthreatactorttpsid": "3e7349c1-ed70-ef11-a670-000d3a67888a",
    id: "T1496",
    name: "Resource Hijacking",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517766\"",
    "esa_dynamicthreatactorttpsid": "5d7349c1-ed70-ef11-a670-000d3a67888a",
    id: "T1567",
    name: "Exfiltration Over Web Service",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517767\"",
    "esa_dynamicthreatactorttpsid": "7f7349c1-ed70-ef11-a670-000d3a67888a",
    id: "T1574",
    name: "Hijack Execution Flow",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517768\"",
    "esa_dynamicthreatactorttpsid": "dd7349c1-ed70-ef11-a670-000d3a67888a",
    id: "T1583.001",
    name: "Domains",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517769\"",
    "esa_dynamicthreatactorttpsid": "644641cd-ed70-ef11-a670-000d3a67888a",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517770\"",
    "esa_dynamicthreatactorttpsid": "982562d3-ed70-ef11-a670-000d3a67888a",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517771\"",
    "esa_dynamicthreatactorttpsid": "aa2562d3-ed70-ef11-a670-000d3a67888a",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517772\"",
    "esa_dynamicthreatactorttpsid": "61d15ad9-ed70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517773\"",
    "esa_dynamicthreatactorttpsid": "14977fe5-ed70-ef11-a670-000d3a67888a",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517774\"",
    "esa_dynamicthreatactorttpsid": "7090fcec-ed70-ef11-a670-000d3a67888a",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517775\"",
    "esa_dynamicthreatactorttpsid": "7290fcec-ed70-ef11-a670-000d3a67888a",
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517776\"",
    "esa_dynamicthreatactorttpsid": "7490fcec-ed70-ef11-a670-000d3a67888a",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517777\"",
    "esa_dynamicthreatactorttpsid": "f6cb00f3-ed70-ef11-a670-000d3a67888a",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517778\"",
    "esa_dynamicthreatactorttpsid": "f9cb00f3-ed70-ef11-a670-000d3a67888a",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517779\"",
    "esa_dynamicthreatactorttpsid": "fa865601-ee70-ef11-a670-000d3a67888a",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517780\"",
    "esa_dynamicthreatactorttpsid": "13875601-ee70-ef11-a670-000d3a67888a",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517781\"",
    "esa_dynamicthreatactorttpsid": "1e875601-ee70-ef11-a670-000d3a67888a",
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517782\"",
    "esa_dynamicthreatactorttpsid": "21875601-ee70-ef11-a670-000d3a67888a",
    id: "T1112",
    name: "Modify Registry",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517783\"",
    "esa_dynamicthreatactorttpsid": "a0d58c07-ee70-ef11-a670-000d3a67888a",
    id: "T1555",
    name: "Credentials from Password Stores",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517784\"",
    "esa_dynamicthreatactorttpsid": "a4d58c07-ee70-ef11-a670-000d3a67888a",
    id: "T1114",
    name: "Email Collection",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517785\"",
    "esa_dynamicthreatactorttpsid": "65ae8e0d-ee70-ef11-a670-000d3a67888a",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517786\"",
    "esa_dynamicthreatactorttpsid": "6bae8e0d-ee70-ef11-a670-000d3a67888a",
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517787\"",
    "esa_dynamicthreatactorttpsid": "fffea513-ee70-ef11-a670-000d3a67888a",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517788\"",
    "esa_dynamicthreatactorttpsid": "02ffa513-ee70-ef11-a670-000d3a67888a",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517789\"",
    "esa_dynamicthreatactorttpsid": "adb1bf19-ee70-ef11-a670-000d3a67888a",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517790\"",
    "esa_dynamicthreatactorttpsid": "ecfc5220-ee70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517791\"",
    "esa_dynamicthreatactorttpsid": "02fd5220-ee70-ef11-a670-000d3a67888a",
    id: "T1059.005",
    name: "Visual Basic",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517792\"",
    "esa_dynamicthreatactorttpsid": "06fd5220-ee70-ef11-a670-000d3a67888a",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517793\"",
    "esa_dynamicthreatactorttpsid": "48fc9926-ee70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517794\"",
    "esa_dynamicthreatactorttpsid": "4efc9926-ee70-ef11-a670-000d3a67888a",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517795\"",
    "esa_dynamicthreatactorttpsid": "881ccd2d-ee70-ef11-a670-000d3a67888a",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517796\"",
    "esa_dynamicthreatactorttpsid": "8e1ccd2d-ee70-ef11-a670-000d3a67888a",
    id: "T1550",
    name: "Use Alternate Authentication Material",
    tacticKeys: "defense-evasion, lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517797\"",
    "esa_dynamicthreatactorttpsid": "12690c3a-ee70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517798\"",
    "esa_dynamicthreatactorttpsid": "4db1954e-ee70-ef11-a670-000d3a67888a",
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517799\"",
    "esa_dynamicthreatactorttpsid": "4fb1954e-ee70-ef11-a670-000d3a67888a",
    id: "T1572",
    name: "Protocol Tunneling",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517800\"",
    "esa_dynamicthreatactorttpsid": "a285bf5a-ee70-ef11-a670-000d3a67888a",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517801\"",
    "esa_dynamicthreatactorttpsid": "2548ec60-ee70-ef11-a670-000d3a67888a",
    id: "T1590",
    name: "Gather Victim Network Information",
    tacticKeys: "reconnaissance"
  },
  {
    "@odata.etag": "W/\"12517802\"",
    "esa_dynamicthreatactorttpsid": "3a48ec60-ee70-ef11-a670-000d3a67888a",
    id: "T1601.001",
    name: "Patch System Image",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517803\"",
    "esa_dynamicthreatactorttpsid": "e5e0e466-ee70-ef11-a670-000d3a67888a",
    id: "T1602.002",
    name: "Network Device Configuration Dump",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517804\"",
    "esa_dynamicthreatactorttpsid": "e6e0e466-ee70-ef11-a670-000d3a67888a",
    id: "T1212",
    name: "Exploitation for Credential Access",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517805\"",
    "esa_dynamicthreatactorttpsid": "ece0e466-ee70-ef11-a670-000d3a67888a",
    id: "T1588.002",
    name: "Tool",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517806\"",
    "esa_dynamicthreatactorttpsid": "c65d2574-ee70-ef11-a670-000d3a67888a",
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517807\"",
    "esa_dynamicthreatactorttpsid": "06d1437a-ee70-ef11-a670-000d3a67888a",
    id: "T1543",
    name: "Create or Modify System Process",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517808\"",
    "esa_dynamicthreatactorttpsid": "e3efee80-ee70-ef11-a670-000d3a67888a",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517809\"",
    "esa_dynamicthreatactorttpsid": "791b2988-ee70-ef11-a670-000d3a67888a",
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517810\"",
    "esa_dynamicthreatactorttpsid": "7b1b2988-ee70-ef11-a670-000d3a67888a",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517811\"",
    "esa_dynamicthreatactorttpsid": "4c608794-ee70-ef11-a670-000d3a67888a",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"12517812\"",
    "esa_dynamicthreatactorttpsid": "57608794-ee70-ef11-a670-000d3a67888a",
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517813\"",
    "esa_dynamicthreatactorttpsid": "5d608794-ee70-ef11-a670-000d3a67888a",
    id: "T1574",
    name: "Hijack Execution Flow",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517814\"",
    "esa_dynamicthreatactorttpsid": "61608794-ee70-ef11-a670-000d3a67888a",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517815\"",
    "esa_dynamicthreatactorttpsid": "6a608794-ee70-ef11-a670-000d3a67888a",
    id: "T1003",
    name: "OS Credential Dumping",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517816\"",
    "esa_dynamicthreatactorttpsid": "830d50a2-ee70-ef11-a670-000d3a67888a",
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517817\"",
    "esa_dynamicthreatactorttpsid": "850d50a2-ee70-ef11-a670-000d3a67888a",
    id: "T1090",
    name: "Proxy",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517818\"",
    "esa_dynamicthreatactorttpsid": "1f824fa8-ee70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517819\"",
    "esa_dynamicthreatactorttpsid": "21824fa8-ee70-ef11-a670-000d3a67888a",
    id: "T1027.005",
    name: "Indicator Removal from Tools",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517820\"",
    "esa_dynamicthreatactorttpsid": "fecb47ae-ee70-ef11-a670-000d3a67888a",
    id: "T1552.006",
    name: "Group Policy Preferences",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517821\"",
    "esa_dynamicthreatactorttpsid": "5a8018bb-ee70-ef11-a670-000d3a67888a",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517822\"",
    "esa_dynamicthreatactorttpsid": "658018bb-ee70-ef11-a670-000d3a67888a",
    id: "T1195",
    name: "Supply Chain Compromise",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517823\"",
    "esa_dynamicthreatactorttpsid": "678018bb-ee70-ef11-a670-000d3a67888a",
    id: "T1584",
    name: "Compromise Infrastructure",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517824\"",
    "esa_dynamicthreatactorttpsid": "79ca2fc1-ee70-ef11-a670-000d3a67888a",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517825\"",
    "esa_dynamicthreatactorttpsid": "11cc9acf-ee70-ef11-a670-000d3a67888a",
    id: "T1543.003",
    name: "Windows Service",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517826\"",
    "esa_dynamicthreatactorttpsid": "27cc9acf-ee70-ef11-a670-000d3a67888a",
    id: "T1134",
    name: "Access Token Manipulation",
    tacticKeys: "defense-evasion, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517827\"",
    "esa_dynamicthreatactorttpsid": "41cc9acf-ee70-ef11-a670-000d3a67888a",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517828\"",
    "esa_dynamicthreatactorttpsid": "e98924d6-ee70-ef11-a670-000d3a67888a",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517829\"",
    "esa_dynamicthreatactorttpsid": "511f65ee-ee70-ef11-a670-000d3a67888a",
    id: "T1491",
    name: "Defacement",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517830\"",
    "esa_dynamicthreatactorttpsid": "84117cfa-ee70-ef11-a670-000d3a67888a",
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517831\"",
    "esa_dynamicthreatactorttpsid": "9c117cfa-ee70-ef11-a670-000d3a67888a",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517832\"",
    "esa_dynamicthreatactorttpsid": "11ef910f-ef70-ef11-a670-000d3a67888a",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517833\"",
    "esa_dynamicthreatactorttpsid": "19ef910f-ef70-ef11-a670-000d3a67888a",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517834\"",
    "esa_dynamicthreatactorttpsid": "5d12c115-ef70-ef11-a670-000d3a67888a",
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access"
  },
  {
    "@odata.etag": "W/\"12517835\"",
    "esa_dynamicthreatactorttpsid": "6512c115-ef70-ef11-a670-000d3a67888a",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517836\"",
    "esa_dynamicthreatactorttpsid": "ae5dd81b-ef70-ef11-a670-000d3a67888a",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517837\"",
    "esa_dynamicthreatactorttpsid": "b15dd81b-ef70-ef11-a670-000d3a67888a",
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517838\"",
    "esa_dynamicthreatactorttpsid": "0975cd22-ef70-ef11-a670-000d3a67888a",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517839\"",
    "esa_dynamicthreatactorttpsid": "7c8eca28-ef70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517840\"",
    "esa_dynamicthreatactorttpsid": "808eca28-ef70-ef11-a670-000d3a67888a",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517841\"",
    "esa_dynamicthreatactorttpsid": "828eca28-ef70-ef11-a670-000d3a67888a",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517842\"",
    "esa_dynamicthreatactorttpsid": "56dac22e-ef70-ef11-a670-000d3a67888a",
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517843\"",
    "esa_dynamicthreatactorttpsid": "5cdac22e-ef70-ef11-a670-000d3a67888a",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517844\"",
    "esa_dynamicthreatactorttpsid": "27649541-ef70-ef11-a670-000d3a67888a",
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517845\"",
    "esa_dynamicthreatactorttpsid": "2b649541-ef70-ef11-a670-000d3a67888a",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517846\"",
    "esa_dynamicthreatactorttpsid": "8a119047-ef70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517847\"",
    "esa_dynamicthreatactorttpsid": "8c119047-ef70-ef11-a670-000d3a67888a",
    id: "T1199",
    name: "Trusted Relationship",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517848\"",
    "esa_dynamicthreatactorttpsid": "dbf27c5a-ef70-ef11-a670-000d3a67888a",
    id: "T1498",
    name: "Network Denial of Service",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517849\"",
    "esa_dynamicthreatactorttpsid": "def27c5a-ef70-ef11-a670-000d3a67888a",
    id: "T1498",
    name: "Network Denial of Service",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517850\"",
    "esa_dynamicthreatactorttpsid": "cc258a66-ef70-ef11-a670-000d3a67888a",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517851\"",
    "esa_dynamicthreatactorttpsid": "d0258a66-ef70-ef11-a670-000d3a67888a",
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence"
  },
  {
    "@odata.etag": "W/\"12517852\"",
    "esa_dynamicthreatactorttpsid": "bf5b8e6c-ef70-ef11-a670-000d3a67888a",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517853\"",
    "esa_dynamicthreatactorttpsid": "5aa68672-ef70-ef11-a670-000d3a67888a",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517854\"",
    "esa_dynamicthreatactorttpsid": "68a68672-ef70-ef11-a670-000d3a67888a",
    id: "T1564.001",
    name: "Hidden Files and Directories",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517855\"",
    "esa_dynamicthreatactorttpsid": "bc51f581-ef70-ef11-a670-000d3a67888a",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517856\"",
    "esa_dynamicthreatactorttpsid": "cc95158e-ef70-ef11-a670-000d3a67888a",
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517857\"",
    "esa_dynamicthreatactorttpsid": "ce95158e-ef70-ef11-a670-000d3a67888a",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517858\"",
    "esa_dynamicthreatactorttpsid": "cf95158e-ef70-ef11-a670-000d3a67888a",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517859\"",
    "esa_dynamicthreatactorttpsid": "d895158e-ef70-ef11-a670-000d3a67888a",
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517860\"",
    "esa_dynamicthreatactorttpsid": "da95158e-ef70-ef11-a670-000d3a67888a",
    id: "T1133",
    name: "External Remote Services",
    tacticKeys: "persistence, initial-access"
  },
  {
    "@odata.etag": "W/\"12517861\"",
    "esa_dynamicthreatactorttpsid": "e095158e-ef70-ef11-a670-000d3a67888a",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517862\"",
    "esa_dynamicthreatactorttpsid": "e195158e-ef70-ef11-a670-000d3a67888a",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517863\"",
    "esa_dynamicthreatactorttpsid": "03911794-ef70-ef11-a670-000d3a67888a",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517864\"",
    "esa_dynamicthreatactorttpsid": "de62389a-ef70-ef11-a670-000d3a67888a",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16473781\"",
    "esa_dynamicthreatactorttpsid": "fcd3ddf9-8fdc-ef11-a730-000d3ab61bae",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517865\"",
    "esa_dynamicthreatactorttpsid": "d0983105-dd86-ef11-ac21-000d3ab67859",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517866\"",
    "esa_dynamicthreatactorttpsid": "c9d4637b-3f87-ef11-ac21-000d3ab67859",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"13482657\"",
    "esa_dynamicthreatactorttpsid": "782a0752-7ea2-ef11-8a6a-000d3ab828ba",
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517867\"",
    "esa_dynamicthreatactorttpsid": "bf4638f0-7886-ef11-ac21-000d3ab828ba",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517868\"",
    "esa_dynamicthreatactorttpsid": "cb4638f0-7886-ef11-ac21-000d3ab828ba",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517869\"",
    "esa_dynamicthreatactorttpsid": "d44638f0-7886-ef11-ac21-000d3ab828ba",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517870\"",
    "esa_dynamicthreatactorttpsid": "242aded9-d586-ef11-ac21-000d3ab828ba",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517871\"",
    "esa_dynamicthreatactorttpsid": "322aded9-d586-ef11-ac21-000d3ab828ba",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517872\"",
    "esa_dynamicthreatactorttpsid": "394af0b4-dc86-ef11-ac21-000d3ab828ba",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517873\"",
    "esa_dynamicthreatactorttpsid": "bfd1cf41-e786-ef11-ac21-000d3ab828ba",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517874\"",
    "esa_dynamicthreatactorttpsid": "c8be2278-3f87-ef11-ac21-000d3ab828ba",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517875\"",
    "esa_dynamicthreatactorttpsid": "cabe2278-3f87-ef11-ac21-000d3ab828ba",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517876\"",
    "esa_dynamicthreatactorttpsid": "53790e56-4087-ef11-ac21-000d3ab828ba",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"13482187\"",
    "esa_dynamicthreatactorttpsid": "73b303db-6ca2-ef11-8a6a-0022489c8af0",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"13482192\"",
    "esa_dynamicthreatactorttpsid": "8bb303db-6ca2-ef11-8a6a-0022489c8af0",
    id: "T1558.002",
    name: "Silver Ticket",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"13482196\"",
    "esa_dynamicthreatactorttpsid": "9cb54ae1-6ca2-ef11-8a6a-0022489c8af0",
    id: "T1210",
    name: "Exploitation of Remote Services",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"13482652\"",
    "esa_dynamicthreatactorttpsid": "5b5e6a53-7ea2-ef11-8a6a-0022489c8af0",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"13482661\"",
    "esa_dynamicthreatactorttpsid": "7d5e6a53-7ea2-ef11-8a6a-0022489c8af0",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"13482665\"",
    "esa_dynamicthreatactorttpsid": "975e6a53-7ea2-ef11-8a6a-0022489c8af0",
    id: "T1059.002",
    name: "AppleScript",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"13482698\"",
    "esa_dynamicthreatactorttpsid": "95a60f97-7ea2-ef11-8a6a-0022489c8af0",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"13482702\"",
    "esa_dynamicthreatactorttpsid": "97a60f97-7ea2-ef11-8a6a-0022489c8af0",
    id: "T1553.002",
    name: "Code Signing",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"13482706\"",
    "esa_dynamicthreatactorttpsid": "9ea60f97-7ea2-ef11-8a6a-0022489c8af0",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"13482711\"",
    "esa_dynamicthreatactorttpsid": "b0a60f97-7ea2-ef11-8a6a-0022489c8af0",
    id: "T1059.002",
    name: "AppleScript",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517877\"",
    "esa_dynamicthreatactorttpsid": "707157d9-d586-ef11-ac20-0022489c8af0",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517878\"",
    "esa_dynamicthreatactorttpsid": "de6abb43-e786-ef11-ac20-0022489c8af0",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517879\"",
    "esa_dynamicthreatactorttpsid": "e36abb43-e786-ef11-ac20-0022489c8af0",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517880\"",
    "esa_dynamicthreatactorttpsid": "414f3c50-4087-ef11-ac20-0022489c8af0",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16472925\"",
    "esa_dynamicthreatactorttpsid": "44e423f8-86dc-ef11-a72f-002248a1e6f6",
    id: "T1583.001",
    name: "Domains",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"16472929\"",
    "esa_dynamicthreatactorttpsid": "5be423f8-86dc-ef11-a72f-002248a1e6f6",
    id: "T1584.002",
    name: "DNS Server",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"16473285\"",
    "esa_dynamicthreatactorttpsid": "5de423f8-86dc-ef11-a72f-002248a1e6f6",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16473317\"",
    "esa_dynamicthreatactorttpsid": "0e1597a3-8edc-ef11-a72f-002248a1e6f6",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16473322\"",
    "esa_dynamicthreatactorttpsid": "501597a3-8edc-ef11-a72f-002248a1e6f6",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517881\"",
    "esa_dynamicthreatactorttpsid": "48cacfaf-dc86-ef11-ac20-6045bdde546f",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517882\"",
    "esa_dynamicthreatactorttpsid": "4dcacfaf-dc86-ef11-ac20-6045bdde546f",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517883\"",
    "esa_dynamicthreatactorttpsid": "9b22a909-dd86-ef11-ac20-6045bdde546f",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517884\"",
    "esa_dynamicthreatactorttpsid": "a922a909-dd86-ef11-ac20-6045bdde546f",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517885\"",
    "esa_dynamicthreatactorttpsid": "0aa8e553-4087-ef11-ac20-6045bdde546f",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517886\"",
    "esa_dynamicthreatactorttpsid": "50489242-4187-ef11-ac20-6045bdde546f",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517887\"",
    "esa_dynamicthreatactorttpsid": "52489242-4187-ef11-ac20-6045bdde546f",
    id: "T1485",
    name: "Data Destruction",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"16262324\"",
    "esa_dynamicthreatactorttpsid": "359c408a-67da-ef11-a72f-7c1e521fd0ca",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16262762\"",
    "esa_dynamicthreatactorttpsid": "d164598e-6ada-ef11-a72f-7c1e521fd0ca",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16262766\"",
    "esa_dynamicthreatactorttpsid": "dfc37794-6ada-ef11-a72f-7c1e521fd0ca",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16262776\"",
    "esa_dynamicthreatactorttpsid": "f1c37794-6ada-ef11-a72f-7c1e521fd0ca",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16262946\"",
    "esa_dynamicthreatactorttpsid": "994fa6f6-6ada-ef11-a72f-7c1e521fd0ca",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16262951\"",
    "esa_dynamicthreatactorttpsid": "a54fa6f6-6ada-ef11-a72f-7c1e521fd0ca",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"16262960\"",
    "esa_dynamicthreatactorttpsid": "46cab8fc-6ada-ef11-a72f-7c1e521fd0ca",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16262964\"",
    "esa_dynamicthreatactorttpsid": "50cab8fc-6ada-ef11-a72f-7c1e521fd0ca",
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"16263403\"",
    "esa_dynamicthreatactorttpsid": "e9c48127-6bda-ef11-a72f-7c1e521fd0ca",
    id: "T1078",
    name: "Valid Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"16263408\"",
    "esa_dynamicthreatactorttpsid": "ebc48127-6bda-ef11-a72f-7c1e521fd0ca",
    id: "T1193",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"16263417\"",
    "esa_dynamicthreatactorttpsid": "d62c843f-6bda-ef11-a72f-7c1e521fd0ca",
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517889\"",
    "esa_dynamicthreatactorttpsid": "83bf6e81-ed70-ef11-a670-7c1e52345808",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517890\"",
    "esa_dynamicthreatactorttpsid": "97bf6e81-ed70-ef11-a670-7c1e52345808",
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517891\"",
    "esa_dynamicthreatactorttpsid": "a0bf6e81-ed70-ef11-a670-7c1e52345808",
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517892\"",
    "esa_dynamicthreatactorttpsid": "abbf6e81-ed70-ef11-a670-7c1e52345808",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517893\"",
    "esa_dynamicthreatactorttpsid": "adbf6e81-ed70-ef11-a670-7c1e52345808",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517894\"",
    "esa_dynamicthreatactorttpsid": "8204f188-ed70-ef11-a670-7c1e52345808",
    id: "T1547",
    name: "Boot or Logon Autostart Execution",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517895\"",
    "esa_dynamicthreatactorttpsid": "8404f188-ed70-ef11-a670-7c1e52345808",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517896\"",
    "esa_dynamicthreatactorttpsid": "2b738c96-ed70-ef11-a670-7c1e52345808",
    id: "T1547.002",
    name: "Authentication Package",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517897\"",
    "esa_dynamicthreatactorttpsid": "2f738c96-ed70-ef11-a670-7c1e52345808",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517898\"",
    "esa_dynamicthreatactorttpsid": "2cd81ca3-ed70-ef11-a670-7c1e52345808",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517899\"",
    "esa_dynamicthreatactorttpsid": "41d81ca3-ed70-ef11-a670-7c1e52345808",
    id: "T1547.001",
    name: "Registry Run Keys / Startup Folder",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517900\"",
    "esa_dynamicthreatactorttpsid": "8802a2b1-ed70-ef11-a670-7c1e52345808",
    id: "T1583.001",
    name: "Domains",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517901\"",
    "esa_dynamicthreatactorttpsid": "9fe80dda-ed70-ef11-a670-7c1e52345808",
    id: "T1485",
    name: "Data Destruction",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517902\"",
    "esa_dynamicthreatactorttpsid": "8a9488e9-ed70-ef11-a670-7c1e52345808",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517903\"",
    "esa_dynamicthreatactorttpsid": "8d9488e9-ed70-ef11-a670-7c1e52345808",
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517904\"",
    "esa_dynamicthreatactorttpsid": "959488e9-ed70-ef11-a670-7c1e52345808",
    id: "T1547",
    name: "Boot or Logon Autostart Execution",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517905\"",
    "esa_dynamicthreatactorttpsid": "1b10bcf5-ed70-ef11-a670-7c1e52345808",
    id: "T1071.001",
    name: "Web Protocols",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517906\"",
    "esa_dynamicthreatactorttpsid": "1d10bcf5-ed70-ef11-a670-7c1e52345808",
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517907\"",
    "esa_dynamicthreatactorttpsid": "590fa702-ee70-ef11-a670-7c1e52345808",
    id: "T1547.012",
    name: "Print Processors",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517908\"",
    "esa_dynamicthreatactorttpsid": "5c0fa702-ee70-ef11-a670-7c1e52345808",
    id: "T1055",
    name: "Process Injection",
    tacticKeys: "defense-evasion, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517909\"",
    "esa_dynamicthreatactorttpsid": "20629f08-ee70-ef11-a670-7c1e52345808",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517910\"",
    "esa_dynamicthreatactorttpsid": "a1fe210f-ee70-ef11-a670-7c1e52345808",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517911\"",
    "esa_dynamicthreatactorttpsid": "dcdbfb21-ee70-ef11-a670-7c1e52345808",
    id: "T1053.005",
    name: "Scheduled Task",
    tacticKeys: "execution, persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517912\"",
    "esa_dynamicthreatactorttpsid": "d3b45a28-ee70-ef11-a670-7c1e52345808",
    id: "T1105",
    name: "Ingress Tool Transfer",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517913\"",
    "esa_dynamicthreatactorttpsid": "d5b45a28-ee70-ef11-a670-7c1e52345808",
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517914\"",
    "esa_dynamicthreatactorttpsid": "4a08532e-ee70-ef11-a670-7c1e52345808",
    id: "T1020",
    name: "Automated Exfiltration",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517915\"",
    "esa_dynamicthreatactorttpsid": "f362374b-ee70-ef11-a670-7c1e52345808",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517916\"",
    "esa_dynamicthreatactorttpsid": "2e9bf551-ee70-ef11-a670-7c1e52345808",
    id: "T1059.006",
    name: "Python",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517917\"",
    "esa_dynamicthreatactorttpsid": "349bf551-ee70-ef11-a670-7c1e52345808",
    id: "T1204.002",
    name: "Malicious File",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517918\"",
    "esa_dynamicthreatactorttpsid": "71460759-ee70-ef11-a670-7c1e52345808",
    id: "T1547",
    name: "Boot or Logon Autostart Execution",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517919\"",
    "esa_dynamicthreatactorttpsid": "84460759-ee70-ef11-a670-7c1e52345808",
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517920\"",
    "esa_dynamicthreatactorttpsid": "a3cbf25f-ee70-ef11-a670-7c1e52345808",
    id: "T1078.001",
    name: "Default Accounts",
    tacticKeys: "defense-evasion, persistence, privilege-escalation, initial-access"
  },
  {
    "@odata.etag": "W/\"12517921\"",
    "esa_dynamicthreatactorttpsid": "a8cbf25f-ee70-ef11-a670-7c1e52345808",
    id: "T1556",
    name: "Modify Authentication Process",
    tacticKeys: "credential-access, defense-evasion, persistence"
  },
  {
    "@odata.etag": "W/\"12517922\"",
    "esa_dynamicthreatactorttpsid": "d403b166-ee70-ef11-a670-7c1e52345808",
    id: "T1048.003",
    name: "Exfiltration Over Unencrypted Non-C2 Protocol",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517923\"",
    "esa_dynamicthreatactorttpsid": "df03b166-ee70-ef11-a670-7c1e52345808",
    id: "T1020",
    name: "Automated Exfiltration",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517924\"",
    "esa_dynamicthreatactorttpsid": "e503b166-ee70-ef11-a670-7c1e52345808",
    id: "T1587.004",
    name: "Exploits",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517925\"",
    "esa_dynamicthreatactorttpsid": "f103b166-ee70-ef11-a670-7c1e52345808",
    id: "T1586.002",
    name: "Email Accounts",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517926\"",
    "esa_dynamicthreatactorttpsid": "f503b166-ee70-ef11-a670-7c1e52345808",
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517927\"",
    "esa_dynamicthreatactorttpsid": "f903b166-ee70-ef11-a670-7c1e52345808",
    id: "T1583.006",
    name: "Web Services",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517928\"",
    "esa_dynamicthreatactorttpsid": "fa03b166-ee70-ef11-a670-7c1e52345808",
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517929\"",
    "esa_dynamicthreatactorttpsid": "fd03b166-ee70-ef11-a670-7c1e52345808",
    id: "T1566",
    name: "Phishing",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517930\"",
    "esa_dynamicthreatactorttpsid": "d6be617f-ee70-ef11-a670-7c1e52345808",
    id: "T1071",
    name: "Application Layer Protocol",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517931\"",
    "esa_dynamicthreatactorttpsid": "45bc0586-ee70-ef11-a670-7c1e52345808",
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517932\"",
    "esa_dynamicthreatactorttpsid": "a8100092-ee70-ef11-a670-7c1e52345808",
    id: "T1049",
    name: "System Network Connections Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517933\"",
    "esa_dynamicthreatactorttpsid": "0bccb3ac-ee70-ef11-a670-7c1e52345808",
    id: "T1190",
    name: "Exploit Public-Facing Application",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517934\"",
    "esa_dynamicthreatactorttpsid": "4accb3ac-ee70-ef11-a670-7c1e52345808",
    id: "T1552",
    name: "Unsecured Credentials",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517935\"",
    "esa_dynamicthreatactorttpsid": "583225b9-ee70-ef11-a670-7c1e52345808",
    id: "T1059.007",
    name: "JavaScript",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517936\"",
    "esa_dynamicthreatactorttpsid": "703225b9-ee70-ef11-a670-7c1e52345808",
    id: "T1574.002",
    name: "DLL Side-Loading",
    tacticKeys: "persistence, privilege-escalation, defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517937\"",
    "esa_dynamicthreatactorttpsid": "e35b54bf-ee70-ef11-a670-7c1e52345808",
    id: "T1595",
    name: "Active Scanning",
    tacticKeys: "reconnaissance"
  },
  {
    "@odata.etag": "W/\"12517938\"",
    "esa_dynamicthreatactorttpsid": "625c54bf-ee70-ef11-a670-7c1e52345808",
    id: "T1583",
    name: "Acquire Infrastructure",
    tacticKeys: "resource-development"
  },
  {
    "@odata.etag": "W/\"12517939\"",
    "esa_dynamicthreatactorttpsid": "44c84ccd-ee70-ef11-a670-7c1e52345808",
    id: "T1012",
    name: "Query Registry",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517940\"",
    "esa_dynamicthreatactorttpsid": "522051d3-ee70-ef11-a670-7c1e52345808",
    id: "T1082",
    name: "System Information Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517941\"",
    "esa_dynamicthreatactorttpsid": "552051d3-ee70-ef11-a670-7c1e52345808",
    id: "T1007",
    name: "System Service Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517942\"",
    "esa_dynamicthreatactorttpsid": "672051d3-ee70-ef11-a670-7c1e52345808",
    id: "T1083",
    name: "File and Directory Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517943\"",
    "esa_dynamicthreatactorttpsid": "7f2051d3-ee70-ef11-a670-7c1e52345808",
    id: "T1098",
    name: "Account Manipulation",
    tacticKeys: "persistence, privilege-escalation"
  },
  {
    "@odata.etag": "W/\"12517944\"",
    "esa_dynamicthreatactorttpsid": "107187d9-ee70-ef11-a670-7c1e52345808",
    id: "T1110.003",
    name: "Password Spraying",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517945\"",
    "esa_dynamicthreatactorttpsid": "c48884df-ee70-ef11-a670-7c1e52345808",
    id: "T1110",
    name: "Brute Force",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517946\"",
    "esa_dynamicthreatactorttpsid": "0fc289ec-ee70-ef11-a670-7c1e52345808",
    id: "T1567",
    name: "Exfiltration Over Web Service",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517947\"",
    "esa_dynamicthreatactorttpsid": "2562aff2-ee70-ef11-a670-7c1e52345808",
    id: "T1021.001",
    name: "Remote Desktop Protocol",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517948\"",
    "esa_dynamicthreatactorttpsid": "2862aff2-ee70-ef11-a670-7c1e52345808",
    id: "T1560.001",
    name: "Archive via Utility",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517949\"",
    "esa_dynamicthreatactorttpsid": "2d62aff2-ee70-ef11-a670-7c1e52345808",
    id: "T1552.001",
    name: "Credentials In Files",
    tacticKeys: "credential-access"
  },
  {
    "@odata.etag": "W/\"12517950\"",
    "esa_dynamicthreatactorttpsid": "3162aff2-ee70-ef11-a670-7c1e52345808",
    id: "T1059",
    name: "Command and Scripting Interpreter",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517951\"",
    "esa_dynamicthreatactorttpsid": "7cc417f9-ee70-ef11-a670-7c1e52345808",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517952\"",
    "esa_dynamicthreatactorttpsid": "7ec417f9-ee70-ef11-a670-7c1e52345808",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517953\"",
    "esa_dynamicthreatactorttpsid": "178eef00-ef70-ef11-a670-7c1e52345808",
    id: "T1496",
    name: "Resource Hijacking",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517954\"",
    "esa_dynamicthreatactorttpsid": "f7c5130e-ef70-ef11-a670-7c1e52345808",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517955\"",
    "esa_dynamicthreatactorttpsid": "d1522614-ef70-ef11-a670-7c1e52345808",
    id: "T1087.002",
    name: "Domain Account",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517956\"",
    "esa_dynamicthreatactorttpsid": "000b211a-ef70-ef11-a670-7c1e52345808",
    id: "T1489",
    name: "Service Stop",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517957\"",
    "esa_dynamicthreatactorttpsid": "74a76520-ef70-ef11-a670-7c1e52345808",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517958\"",
    "esa_dynamicthreatactorttpsid": "76a76520-ef70-ef11-a670-7c1e52345808",
    id: "T1485",
    name: "Data Destruction",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517959\"",
    "esa_dynamicthreatactorttpsid": "e567b22d-ef70-ef11-a670-7c1e52345808",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517960\"",
    "esa_dynamicthreatactorttpsid": "e767b22d-ef70-ef11-a670-7c1e52345808",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517961\"",
    "esa_dynamicthreatactorttpsid": "3ff4493a-ef70-ef11-a670-7c1e52345808",
    id: "T1021.002",
    name: "SMB/Windows Admin Shares",
    tacticKeys: "lateral-movement"
  },
  {
    "@odata.etag": "W/\"12517962\"",
    "esa_dynamicthreatactorttpsid": "41f4493a-ef70-ef11-a670-7c1e52345808",
    id: "T1562.001",
    name: "Disable or Modify Tools",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517963\"",
    "esa_dynamicthreatactorttpsid": "43f4493a-ef70-ef11-a670-7c1e52345808",
    id: "T1046",
    name: "Network Service Discovery",
    tacticKeys: "discovery"
  },
  {
    "@odata.etag": "W/\"12517964\"",
    "esa_dynamicthreatactorttpsid": "dc0cf44c-ef70-ef11-a670-7c1e52345808",
    id: "T1556.003",
    name: "Pluggable Authentication Modules",
    tacticKeys: "credential-access, defense-evasion, persistence"
  },
  {
    "@odata.etag": "W/\"12517965\"",
    "esa_dynamicthreatactorttpsid": "635c7b66-ef70-ef11-a670-7c1e52345808",
    id: "T1566.002",
    name: "Spearphishing Link",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517966\"",
    "esa_dynamicthreatactorttpsid": "f4f71c6d-ef70-ef11-a670-7c1e52345808",
    id: "T1204",
    name: "User Execution",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517967\"",
    "esa_dynamicthreatactorttpsid": "f8f71c6d-ef70-ef11-a670-7c1e52345808",
    id: "T1027",
    name: "Obfuscated Files or Information",
    tacticKeys: "defense-evasion"
  },
  {
    "@odata.etag": "W/\"12517968\"",
    "esa_dynamicthreatactorttpsid": "32721c73-ef70-ef11-a670-7c1e52345808",
    id: "T1566.001",
    name: "Spearphishing Attachment",
    tacticKeys: "initial-access"
  },
  {
    "@odata.etag": "W/\"12517969\"",
    "esa_dynamicthreatactorttpsid": "36721c73-ef70-ef11-a670-7c1e52345808",
    id: "T1059.001",
    name: "PowerShell",
    tacticKeys: "execution"
  },
  {
    "@odata.etag": "W/\"12517970\"",
    "esa_dynamicthreatactorttpsid": "be653d81-ef70-ef11-a670-7c1e52345808",
    id: "T1114.001",
    name: "Local Email Collection",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517971\"",
    "esa_dynamicthreatactorttpsid": "a1fbdf8e-ef70-ef11-a670-7c1e52345808",
    id: "T1560",
    name: "Archive Collected Data",
    tacticKeys: "collection"
  },
  {
    "@odata.etag": "W/\"12517972\"",
    "esa_dynamicthreatactorttpsid": "2a4c1695-ef70-ef11-a670-7c1e52345808",
    id: "T1567.002",
    name: "Exfiltration to Cloud Storage",
    tacticKeys: "exfiltration"
  },
  {
    "@odata.etag": "W/\"12517973\"",
    "esa_dynamicthreatactorttpsid": "2d4c1695-ef70-ef11-a670-7c1e52345808",
    id: "T1132.001",
    name: "Standard Encoding",
    tacticKeys: "command-and-control"
  },
  {
    "@odata.etag": "W/\"12517974\"",
    "esa_dynamicthreatactorttpsid": "a343daa2-ef70-ef11-a670-7c1e52345808",
    id: "T1486",
    name: "Data Encrypted for Impact",
    tacticKeys: "impact"
  },
  {
    "@odata.etag": "W/\"12517975\"",
    "esa_dynamicthreatactorttpsid": "9f7b98a9-ef70-ef11-a670-7c1e52345808",
    id: "T1490",
    name: "Inhibit System Recovery",
    tacticKeys: "impact"
  }]

const groupedByTactics = dataOfTechniquesBaseline.reduce((acc, tech) => {
  const splitedTechniques = tech.tacticKeys.split(", ").map((e) => e.trim());
  splitedTechniques.forEach((tactic) => {
    if (!acc[tactic]) {
      acc[tactic] = [];
    } else {
      acc[tactic].push(splitedTechniques);
    }
    splitedTechniques.map((e) => e);
  });

  return acc;
}, {});

export class TestRepository implements IRepository {
  async getTechniquesMatrixTrending(): Promise<MitreTechnique[]> {
    return dataOfTechniquesTrending;
 }
  async getBaselineTechniques(): Promise<MitreTechnique[]> {
    return dataOfTechniquesBaseline;
  }
  async getTactics(): Promise<MitreTactic[]> {
    return dataOfTactics;
  }
}
