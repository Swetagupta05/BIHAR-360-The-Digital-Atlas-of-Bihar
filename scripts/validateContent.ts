import { ALL_DISTRICTS } from '../src/data/districts';
import { DISTRICT_IMAGES_REGISTRY, isDistrictImageVerified } from '../src/data/districtImages';

function runAudit() {
  console.log('====================================================');
  console.log('   BIHAR 360 — CONTENT, IMAGERY & DISTRICT AUDIT   ');
  console.log('====================================================\n');

  const seenUrls = new Map<string, string[]>();
  let verifiedCount = 0;
  let documentaryCount = 0;
  let cartographicCount = 0;
  let totalIssues = 0;

  console.log(`Auditing all ${ALL_DISTRICTS.length} districts of Bihar:\n`);

  for (const district of ALL_DISTRICTS) {
    const slug = district.slug;
    const metadata = DISTRICT_IMAGES_REGISTRY[slug];

    const issues: string[] = [];

    // Check if district has an unverified raw external image in heroImage that is not in registry
    if (district.heroImage && district.heroImage.includes('unsplash.com')) {
      issues.push(`CRITICAL: Contains raw Unsplash URL in district dataset: ${district.heroImage.slice(0, 50)}...`);
    }

    if (metadata) {
      // Validate metadata fields
      if (!metadata.altText || metadata.altText.trim().length === 0) {
        issues.push('Missing altText');
      }
      if (!metadata.subject || metadata.subject.trim().length === 0) {
        issues.push('Missing subject description');
      }
      if (!metadata.sourceName || metadata.sourceName.trim().length === 0) {
        issues.push('Missing sourceName');
      }
      if (!metadata.districtId || metadata.districtId !== slug) {
        issues.push(`districtId mismatch: expected "${slug}", got "${metadata.districtId}"`);
      }

      // Track duplicate URLs
      if (seenUrls.has(metadata.url)) {
        seenUrls.get(metadata.url)!.push(district.name);
        issues.push(`Duplicate image URL shared with: ${seenUrls.get(metadata.url)!.join(', ')}`);
      } else {
        seenUrls.set(metadata.url, [district.name]);
      }

      // Check verified claims
      if (metadata.verified) {
        if (!metadata.verificationSource || metadata.verificationSource.trim().length === 0) {
          issues.push('Claimed verified=true but missing verificationSource!');
        } else {
          verifiedCount++;
          console.log(`✓ ${district.name.padEnd(16)} [${district.region.padEnd(8)}] — Verified Landmark: ${metadata.landmark} (${metadata.verificationSource})`);
        }
      } else {
        documentaryCount++;
        console.log(`ℹ ${district.name.padEnd(16)} [${district.region.padEnd(8)}] — Documentary Visual Interpretation: ${metadata.landmark}`);
      }
    } else {
      cartographicCount++;
      console.log(`🗺 ${district.name.padEnd(16)} [${district.region.padEnd(8)}] — Editorial Cartographic Identity (No fake photo fallback)`);
    }

    // Verify statistics integrity
    if (!district.areaSqKm || district.areaSqKm <= 0) {
      issues.push('Invalid or missing areaSqKm');
    }
    if (!district.literacyRate || !district.literacyRate.includes('%')) {
      issues.push('Invalid or missing literacyRate');
    }

    if (issues.length > 0) {
      totalIssues += issues.length;
      for (const issue of issues) {
        console.error(`   ⚠ Issue: ${issue}`);
      }
    }
  }

  console.log('\n----------------------------------------------------');
  console.log('AUDIT SUMMARY:');
  console.log(`Total Districts Audited       : ${ALL_DISTRICTS.length} / 38`);
  console.log(`Verified Landmark Photographs : ${verifiedCount}`);
  console.log(`Documentary Interpretations   : ${documentaryCount}`);
  console.log(`Editorial Cartography Visuals : ${cartographicCount}`);
  console.log(`Identified Integrity Issues   : ${totalIssues}`);
  console.log('----------------------------------------------------\n');

  if (totalIssues > 0) {
    console.error(`Audit finished with ${totalIssues} issue(s) that must be resolved.`);
    process.exit(1);
  } else {
    console.log('✓ All 38 districts passed content and image integrity validation.');
  }
}

runAudit();
