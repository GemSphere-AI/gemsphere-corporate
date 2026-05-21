$header = @"
/*
 * Copyright © 2025 GemSphere Technologies Private Limited.
 * All rights reserved.
 *
 * This source code is proprietary and confidential.
 * Unauthorized copying, modification, distribution, or use of this
 * file, via any medium, is strictly prohibited.
 */

"@

$files = Get-ChildItem -Path "src" -Recurse -Include "*.jsx", "*.js"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch "Copyright © 2025 GemSphere") {
        $newContent = $header + $content
        [IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Added copyright to $($file.Name)"
    }
}
