$files = Get-ChildItem -Path "src\app", "src\App.jsx" -Recurse -Include "*.jsx"
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace "'\./pages/", "'./views/"
    $newContent = $newContent -replace "'\.\./pages/", "'../views/"
    $newContent = $newContent -replace "'\.\./\.\./pages/", "'../../views/"
    if ($content -ne $newContent) {
        [IO.File]::WriteAllText($file.FullName, $newContent)
        Write-Host "Updated $($file.FullName)"
    }
}
