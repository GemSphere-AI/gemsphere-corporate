$files = Get-ChildItem -Path "src\components", "src\views" -Recurse -Include "*.jsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    if ($content -notmatch '"use client"') {
        # Find the end of the copyright comment block (which ends with */)
        # or just put "use client"; right before the first import statement
        if ($content -match "(?sm)^(.*?\*/\s*)(import.*)") {
            $newContent = $content -replace "(?sm)^(.*?\*/\s*)(import.*)", "`$1`"use client`";`n`$2"
            [IO.File]::WriteAllText($file.FullName, $newContent)
            Write-Host "Added use client to $($file.Name)"
        } elseif ($content -match "(?sm)^(\s*)(import.*)") {
            $newContent = $content -replace "(?sm)^(\s*)(import.*)", "`$1`"use client`";`n`$2"
            [IO.File]::WriteAllText($file.FullName, $newContent)
            Write-Host "Added use client to $($file.Name)"
        }
    }
}
