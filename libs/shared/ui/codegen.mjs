#!/usr/bin/env node
/* eslint-disable no-undef */

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Codegen script for shadcn/ui components
 *
 * Usage:
 *   node codegen.mjs <component-name> [<component-name> ...]  - Add specific components
 *   node codegen.mjs --all                                     - Add all components
 *
 * This script:
 * 1. Runs shadcn add command to generate components
 * 2. Replaces absolute path aliases with relative imports
 * 3. Runs lint --fix to format the code
 */

const args = process.argv.slice(2);
const isAllMode = args.includes('--all');

if (!isAllMode && args.length === 0) {
  console.error('❌ Error: No component name provided');
  console.error('\nUsage:');
  console.error('  node codegen.mjs <component-name> [<component-name> ...]  - Add specific components');
  console.error('  node codegen.mjs --all                                     - Add all components');
  console.error('\nExamples:');
  console.error('  node codegen.mjs button card dialog');
  console.error('  node codegen.mjs --all');
  process.exit(1);
}

// Step 1: Run shadcn add command
if (isAllMode) {
  console.log('\n📦 Adding all shadcn/ui components...\n');

  try {
    execSync('pnpm dlx shadcn@canary add --all --overwrite', {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
  } catch {
    console.error('❌ Failed to add components');
    process.exit(1);
  }
} else {
  const components = args;
  console.log(`\n📦 Adding shadcn/ui components: ${components.join(', ')}\n`);

  try {
    execSync(`pnpm dlx shadcn@canary add ${components.join(' ')}`, {
      stdio: 'inherit',
      cwd: process.cwd(),
    });
  } catch {
    console.error('❌ Failed to add components');
    process.exit(1);
  }
}

// Step 2: Process generated files to fix imports
console.log('\n🔧 Processing files to fix imports...\n');

/**
 * Recursively process all TypeScript files in a directory
 */
function processDirectory(dir) {
  const files = readdirSync(dir);

  for (const file of files) {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

/**
 * Process a single file to replace alias imports with relative imports
 */
function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  let modified = false;

  // Define alias replacements
  // Order matters: more specific patterns first
  const replacements = [
    // Utils import
    [/@heewon\.dev\/ui\/lib\/utils/g, '../libs/utils'],
    // Other lib imports
    [/@heewon\.dev\/ui\/lib\//g, '../libs/'],
    // Component imports (e.g., @heewon.dev/ui/components/button)
    [/@heewon\.dev\/ui\/components\//g, './'],
    // Hooks imports
    [/@heewon\.dev\/ui\/hooks\//g, '../hooks/'],
  ];

  for (const [pattern, replacement] of replacements) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  }

  if (modified) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`  ✓ Updated: ${filePath}`);
  }
}

// Process src/components directory
const componentsDir = './src/components';
try {
  processDirectory(componentsDir);
} catch {
  console.error('❌ Failed to process files');
  process.exit(1);
}

// Step 3: Run lint fix
console.log('\n🎨 Running lint fix...\n');
try {
  execSync('pnpm lint --fix', { stdio: 'inherit' });
} catch {
  console.warn('⚠️  Lint fix completed with warnings');
}

console.log('\n✅ Done! Components generated and imports fixed.\n');
