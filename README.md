# Visa Mill

An interactive visualization of the complete U.S. visa classification system under the Immigration and Nationality Act (INA), 8 U.S.C. 1101 et seq.

323 visa classifications -- 89 nonimmigrant (NIV), 234 immigrant (IV) -- organized as a collapsible tree with 205 dependency links showing derivative, spouse, child, and pathway relationships between visa types.

## Data sources

The dataset was compiled from official U.S. government sources:

| Source | What it provides |
|---|---|
| **INA / 8 U.S.C.** | Statutory definitions of all visa classifications -- nonimmigrant (101(a)(15)), immigrant preferences (203), special immigrants (101(a)(27)) |
| **22 CFR Part 41** | Nonimmigrant classification symbols (41.12) and per-visa regulatory requirements |
| **22 CFR Part 42** | Immigrant classification symbols (42.11) |
| **9 FAM 402.1-402.18** | State Department Foreign Affairs Manual -- NIV classification guidance, statutory authorities, and processing procedures |
| **9 FAM 502.2-502.7** | FAM -- IV classification guidance, family/employment/diversity/special immigrant procedures |
| **DoS visa categories** | Department of State all visa categories listing (travel.state.gov) |
| **DHS classes of admission** | DHS immigrant classes of admission (ohss.dhs.gov) |

### How citations were built

Each visa node's `law` field was initially populated with its primary INA section (e.g., `INA 101(a)(15)(H)(i)(b)` for H-1B). These were then expanded by scraping the statutory authority sections from each visa's corresponding FAM page, adding all INA, CFR, and Public Law references cited by the State Department for that visa type. This produced 1,733 total law citations across 323 nodes.

## Link sources

All statutory and regulatory citations in the sidebar are clickable links:

| Citation type | Links to | Example |
|---|---|---|
| INA sections | Cornell LII (law.cornell.edu/uscode/text/8) with subsection deep-links | `INA 101(a)(15)(A)(i)` links to `8/1101#a_15_A_i` |
| U.S.C. sections | Cornell LII | `48 U.S.C. 1806` links to `uscode/text/48/1806` |
| CFR sections | Cornell LII (law.cornell.edu/cfr/text) with paragraph anchors | `8 CFR 214.2(h)` links to `cfr/text/8/214.2#h` |
| CFR parts | Cornell LII | `22 CFR Part 41` links to `cfr/text/22/part-41` |
| FAM sections | fam.state.gov with deep-link anchors to specific subsections | `9 FAM 402.10-4(B)` links to `09FAM040210.html#M402_10_4_B` |
| Public Laws (104th Congress+) | GovInfo (govinfo.gov) HTML full text | `PL 110-229` links to `PLAW-110publ229` |
| Named acts | GovInfo via PL number mapping | `TVPA` links to PL 106-386 |

Public Laws before the 104th Congress (pre-1995) and treaties/agreements (NATO SOFA, USMCA, etc.) are displayed as plain text -- no reliable free HTML source exists for these.

### INA to U.S.C. mapping

INA section numbers do not match U.S.C. section numbers. The app maintains a lookup table (`INA_TO_USC`) mapping the 19 INA sections that appear in the dataset to their corresponding 8 U.S.C. sections (e.g., INA 101 = 8 U.S.C. 1101, INA 203 = 8 U.S.C. 1153).

## FAM integration

Each visa node is mapped to its Foreign Affairs Manual page and, where possible, to the specific subsection covering that visa type.

- **22 unique FAM pages** cover all 323 visa nodes (17 NIV pages under 9 FAM 402, 5 IV pages under 9 FAM 502)
- **175 nodes** have per-visa deep-link anchors to specific FAM subsections (e.g., H-1B links to `M402_10_4_B`)
- **148 nodes** fall back to the Classification Symbols section (`_3` anchor) -- these are IV numbered variants and legacy programs without dedicated FAM subsections
- **81 FAM section titles** are displayed in the sidebar below the FAM link
- FAM anchor IDs use the pattern `M{section}_{subsection}` (e.g., `M402_10_4_B` for 9 FAM 402.10-4(B))

The FAM anchor mapping was built by scraping all 24 live FAM pages (402.1-402.18 and 502.2-502.7). Pages 402.19-402.23 return 404 -- the S, T, U, TN, and V visa categories are covered under 402.6, 402.7, and 402.17 respectively.

## Tree structure

The visualization organizes visas as:

```
VISA MILL (root)
  NIV (hub)
    Category (e.g., "Worker & Exchange")
      Subcategory / Family (e.g., "H")
        Principal (e.g., H-1B) -- expandable if it has derivatives
          Derivative (e.g., H-4)
  IV (hub)
    Category (e.g., "Employment")
      Subcategory / Family (e.g., "EB-1")
        ...
```

### Principal/derivative clustering

Within each subcategory, visas with internal derivative links are clustered under their principal. A principal is a visa that has outbound links but no inbound links within its subcategory. Derivatives are assigned to the first principal alphabetically.

When a derivative has multiple principals (e.g., G-5 is a derivative of G-1, G-2, G-3, and G-4), it is assigned to the first (G-1) and dashed arc lines connect from the derivative to the other principals when both are visible in the tree.

### Link types

| Type | Count | Meaning |
|---|---|---|
| derivative | 70 | Attendant/employee visa derived from principal (e.g., G-1 to G-5) |
| child | 61 | Child variant of a principal (e.g., IR1 to IR2) |
| spouse | 51 | Spouse variant of a principal (e.g., F31 to F32) |
| pathway | 23 | Transition from one visa to another (e.g., F-1 to H-1B, H-1B to EB-1) |

## Files

| File | Description |
|---|---|
| `index.html` | Main visualization -- D3.js collapsible tree with sidebar detail panel |
| `reference.html` | Searchable reference table with sidebar detail panel |
| `visa_data.json` | Complete dataset -- 323 nodes, 205 links, metadata |
| `favicon.svg` | Site icon |
| `fam_anchors.json` | Scraped anchor IDs from all 24 FAM pages |
| `fam_anchors_full.json` | Scraped anchors with surrounding text content |
| `fam_anchor_titles.json` | 1,016 FAM section titles mapped to anchor IDs |
| `fam_visa_anchors.json` | Initial per-visa anchor mapping (superseded by inline `VISA_FAM_ANCHORS`) |
| `fam_missing_citations.json` | Audit of law citations found on FAM pages but missing from node data |

## How it works

The app is a single-page HTML file with inline CSS and JavaScript. No build step, no dependencies beyond D3.js (loaded from CDN).

1. `visa_data.json` is fetched and transformed into a D3 hierarchy by `transformToHierarchy()`
2. Nodes are grouped: Group (NIV/IV) -> Category -> Subcategory -> Principal/Derivative
3. The tree is rendered with `d3.tree()` layout, with dynamic box sizing based on text measurement
4. Clicking a node expands/collapses it (accordion behavior -- one open at a time per level) and shows its detail in the sidebar
5. Law citations are parsed by `parseCitation()` which matches INA/USC/CFR/FAM/PL patterns and generates clickable links
6. Multi-parent derivative arcs are drawn by `drawArcOverlays()` when both endpoints are visible
